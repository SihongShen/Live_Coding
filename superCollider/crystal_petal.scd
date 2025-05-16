s.boot;
s.meter;
//adapted from musical/experiments/crystal-mist.scd on Github
// 1. music
(
SynthDef(\crystal_mist) { |out=0, pan=0, freq=440, crunch=50, pulse=1.25, attack=0.005, sustain=1, decay=0.5, amp=0.25|
	var level, saw, reverb, pan2,fx;

	level = EnvGen.kr(Env([0,amp,amp,0], [attack,sustain,decay]), doneAction: 2);
	saw = Pulse.ar(freq, 0.5, Saw.kr(crunch, SinOsc.kr(pulse)));

	saw = tanh(saw * 2);
	saw = PitchShift.ar(saw, 0.2, SinOsc.kr(0.1).range(0.95, 1.05));

	fx = CombC.ar(saw, 0.3, LFNoise1.kr(0.5).range(0.01, 0.1), 3);
	reverb = FreeVerb.ar(saw + fx, 0.5, 1, 1);
	pan2 = Pan2.ar(reverb, pan);

	Out.ar(out, pan2 * level);
}.add;

// turn on the music
Routine({
	Pbind(
		\instrument, \crystal_mist,
		\freq, Pstutter(Pseq([4], inf), Pseq([440, 330, 440, 275] * 0.618, inf)),
		\dur, Pseq([1], inf),
		\crunch, 20,
		\pulse, 10,
		\amp, 0.2
	).play;

	Pbind(
		\instrument, \crystal_mist,
		\freq, Pstutter(Pseq([4], inf), Pseq([440, 550, 440, 330] * 2, inf)),
		\dur, Pseq([0.5], inf),
		\crunch, 1,
		\pulse, 1.25,
		\amp, 0.2
	).play;
}).play;
)

// 2. visual
(
//create global variable
~vis = (
    width: 600, height: 600,  // window
    bufferSize: 512,
    data: Signal.newClear(512).fill(0.2),
    scopeBuf: Buffer.alloc(s, 512)
);

// audio analysis
SynthDef(\audioAnalyzer, { |bufnum|
    var in = In.ar(0, 2).mean;
    var env = Amplitude.kr(in, 0.01, 0.1);
    var sig = in * env * 8;
    RecordBuf.ar(sig, bufnum, loop: 1);
}).add;

// visualize window
AppClock.sched(0, {
    ~vis.win = Window("Visualizer", Rect(100,100,~vis.width,~vis.height)).front;
    ~vis.view = UserView(~vis.win, ~vis.win.bounds)
        .background_(Color.black);

    ~vis.view.drawFunc = {
        var center = ~vis.view.bounds.center;
        var radius = min(center.x, center.y) * 0.95;
        var baseHue = Main.elapsedTime.frac * 0.3;

        12.do { |petal|
            var rotation = petal * (2pi/8);
            var hue = (baseHue + (petal/16)).wrap(0,1);

            Pen.strokeColor = Color.hsv(hue, hue*0.9, 1.0);
            Pen.width = hue*2;

            Pen.moveTo(center.x @ center.y);

            ~vis.bufferSize.do { |i|
                var val = ~vis.data[i].clip(-1,1).abs;
                var mag = val * val * 8000 * radius;
                var angle = i * (2pi/~vis.bufferSize);
                var x = mag * cos(angle);
                var y = mag * sin(angle);

                var rotX = center.x + (x * cos(rotation) - y * sin(rotation));
                var rotY = center.y + (x * sin(rotation) + y * cos(rotation));

                Pen.lineTo(rotX @ rotY);
            };
            Pen.stroke;
        };
    };
});

// data update
fork {
    s.sync;
    ~vis.scopeSynth = Synth(\audioAnalyzer, [\bufnum, ~vis.scopeBuf]);

    ~vis.updateRoutine = Routine({
        loop {
            ~vis.scopeBuf.getn(0, ~vis.bufferSize, { |bufData|
                ~vis.data = Signal.newFrom(bufData);
            });
            0.02.wait;
            { ~vis.view.refresh }.defer;
        };
    }).play(AppClock);
};
)