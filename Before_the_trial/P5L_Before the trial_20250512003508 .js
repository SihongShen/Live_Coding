// {"P5LIVE":{"name":"Before the trial","mod":"1747010108458"}} 


//all sources here
let libs = [//p5 Speech lib
			"https://cdn.jsdelivr.net/gh/IDMNYU/p5.js-speech@0.0.3/lib/p5.speech.js",
			//Hydra lib
			'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js',
			];
			
//variables for all imgs
let startImg;
let land;
let bedroom;
let street;
let lostwoodChoice;
let cindercliff;
let frystapeak;
let lostwood;
let normalImg;
let GPT1, GPT2;

//variables for spoken control
let spoken = [];

for (let i = 0; i < 100; i++) {
  spoken[i] = false;
}

//Variables for start screen
let beep;

//variables for intro
let introText = "This is an adventure story about Arian the Brave."; 
let introIndex = 0;
let introSpeed = 5; // 控制速度：越大越慢
let gray =10;
let introBGM;
let introBGMPlaying = false;

//begin variables
let birdSound;
let horrorSound;

//variables for toTheGate
let gray1 = 30;
let increasing = true;
let a=0;

//variables for lostwood
let particles = [];
let deltaa=1;
let translateX = 0;
let lwSound;
let lwSound1_2;

//variables for cindercliff
let deltac=1;
let translateXc = 0;
let clSound;
let clSound2;

//frysta peak variables
let fpSound;

//variables for normal end
let scaleFactor = 1;
let neText ="The final trial is not of strength,\n nor of courage,\n nor of knowledge — \n It is of *self*.";
let neIndex = 0;
let neSpeed = 4; // 控制速度：越大越慢
let palace;

//variables for true end
let mic, fft;


//variables for 440Hz
let countSound;
let timer=0;
let glitchSound;

// adapted from /demo/hydra/_hydra_overlay to feed p5 into hydra while enabling controlling p5

// hydra canvas + init
let hc = document.createElement('canvas');
hc.width = window.innerWidth;
hc.height = window.innerHeight;
document.body.appendChild(hc);
let hydra = new Hydra({detectAudio: false,canvas: hc});
// retina res
hydra.setResolution(window.innerWidth, window.innerHeight);
// use noize() since noise() is taken by p5js
noize = noise;

 // store hydra texture
let pg;

//not putting sandbox here for convenience

// sandbox - start

// o0 for p5 canvas 
src(s0)
	.out(o0)
	
	
//startHydra

// osc(80,0.5,.7)
// 	.blend(s0)
// 	.modulateScale(osc(40,0,1).kaleid(4))
// 	.repeat(2,4)
//     //.modulate(o1,0.05)
//     .out(o1)



//intro //Adapted from  Dreamy Diamondby Rangga Purnama Aji

// osc(7,-0.125)
// 	.blend(s0)
// 	.modulate(voronoi(10)).diff(voronoi(1).mult(gradient(-1).luma(0.125)))
//   .luma(0.125)
//   .repeat(3,0)
//   .add(shape(7, 0.5)
//       .mult(voronoi(10,2).blend(o0).diff(gradient(1)).modulate(voronoi())))
//   .blend(o1)
//   .blend(o1)
//   .out(o1)
	


//begin

// shape(20,0.5,1.5)
// 	.blend(s0)
// 	.scale(0.8,[0.5,2])
// 	//2
// 	.color([0.5,1.2].smooth(1),0.3,0.2)
// 	//3
// 	// .color([0.1,0.8].smooth(2),[0.3,1.8].smooth(1),[.2,3.4].smooth(.8))
// 	.repeat(20,15)
// 	//2
// 	.mask(voronoi(3,2,.2))
// 	.modulateKaleid(o0,5)
// 	//3
// 	// .mask(noize(3,.2,2).hue())
// 	// .modulateKaleid(o0,100)
// 	.add(o0,0.5)
// 	.scale(0.9)
	// .out(o1)

//glitch1
// osc(30,0.01,1)
// 	.mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7))
// 	// .modulatePixelate(o1,0,9)
// 	.posterize([3,10,2].fast(0.5).smooth(1))
// 	.modulateRotate(o0,2)
// 	.out(o1)

//lostWood
// osc(4,0.2)
// 	.blend(src(o0).diff(noize(0.8,0.1)))
// 	.luma(0.1)
// 	////treeline
// 	// .blend(noize(1,0.8).color(0.2,1.2,0.2))
// 	//3
// 	.layer(osc(7,-0.125)
// 	.blend(s0)
// 	.modulate(voronoi(10)).diff(voronoi(1).mult(gradient(-1).luma(0.125)))
//   .luma(0.125)
//   .repeat(3,0)
//   .add(shape(7, 0.5)
//       .mult(voronoi(10,2).blend(o0).diff(gradient(1)).modulate(voronoi())))
//   .blend(o1)
//   .blend(o1))
	// .out(o1)

// lostWood 2.2
// src(o0)
// 	.blend(voronoi(10,0.1,0.2).blend(gradient([0.2,0.9,4,0.01])))
// 	.modulate(osc(20,1,2))
// 	.saturate([20,80,40,25,50].fast(2))
// 	.repeat([4,2,10,5],4)
// 	.out(o2)




//cinder Cliff
// osc(4, 0.1, 0.8)
// 	.color(0.225,0, 0)
// 	.rotate(0.5, 0.1)
// 	.pixelate(2, 20)
// 	.modulate(noize(2.5), () => 1.5 * Math.sin(0.08 * time))
// 	.add(src(o0).color(2.25).diff(noize(0.1,0.1,2)))
// 	// stage 2
// 	.blend(shape(4,0.02,0.01).thresh(0.2,0.04).color(21.8).diff(voronoi(0.1,0.1,2)))
// 	// 2.2
// 	.modulateRotate(osc(1,0.5,0).kaleid(50).repeat(4,8).scale(0.5),15,0)
// 	// 2.3
// 	// .pixelate(2000,1)
// 	// 3
// 	.layer(osc(7,-0.125)
// 			.blend(s0)
// 			.modulate(voronoi(10)).diff(voronoi(1).mult(gradient(-1).luma(0.125)))
// 			.luma(0.125)
// 			.repeat(3,0)
// 			.add(shape(7, 0.5)
//     			 .mult(voronoi(10,2).blend(o0).diff(gradient(1)).modulate(voronoi())))
// 		.blend(o1)
// 	.blend(o1)
// 	.color(2.25))
// 	.out(o1)
	
	

//frysta peak
// src(o0)
// 	.blend(o0)
//   .modulate(shape(4).rotate(0.5, 0.5).scale(2).repeatX(2, 2).modulate(o0, () => mouse.x * 0.005).repeatY(2, 2))
//   //NE
//  // .scale(2)
//  // .layer(osc(7,-0.125)
// 	// 		.blend(s0)
// 	// 		.modulate(voronoi(10)).diff(voronoi(1).mult(gradient(-1).luma(0.15)))
// 	// 		.luma(0.6)
// 	// 		.repeat(3,0.8)
// 	// 		.add(shape(7, 0.5)
//  //   			 .mult(voronoi(10,2).blend(o0).diff(gradient(1)).modulate(voronoi(2,1,1,))))
// 	// 	.blend(o1)
// 	// .blend(o1))
// 	//// .brightness(() => Math.sin(time)*0.5)
//   .out(o1)

//true end
// voronoi(350,0.15)
//   	.modulateScale(osc(8).add(gradient([1,2,4])).rotate(Math.sin(time)*10),.5)
// 	.thresh(.07)
// 	.modulateHue(osc( [1,10,50,100,250,500].fast(2) ), [1,200,60,12,100].fast(2) )
// 	.modulateScale(osc(2).modulateRotate(o1,.74))
// 	.diff(src(o1).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
// 	.brightness([-.02,-.17].smooth().fast(.5))
// // 	.colorama([.4,.8,1,.02,.1,.0001].fast(0.2))
// 	.out(o1)

// s1.initCam()
// src(s1)
// 	.colorama([0.2,0.8,1,1.4])
// 	.modulatePixelate(noize([1,0.2,25,10].fast(0.2),0.5),100)
// 	.blend(o0)
// 	.mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(200))
// 	//glitch
// // .modulate(o2,0.5)
// // .add(o2,0.8)
// // .scrollY(-0.01)
// // .scale(0.99)
// // .modulate(voronoi(8,1),0.008)
// // .luma(0.3)
	// .out(o2)
	
render(o0);

// sandbox - stop


function preload(){
	//load fonts
	font = loadFont("includes/demos-data/fonts/RobotoMono-Regular.otf")

	//load all the imgs here
	startImg=loadImage("data/before/img/startImg.jpg");
	land=loadImage("data/before/img/map.jpg");
	bedroom=loadImage("data/before/img/bedroom.jpg");
	street=loadImage("data/before/img/street.jpg");
	lostwoodChoice=loadImage("data/before/img/lostwoodChoice.jpg");
	cindercliff=loadImage("data/before/img/cindercliff.jpg");
	frystapeak=loadImage("data/before/img/frystapeak.jpg");
	lostwood=loadImage("data/before/img/lostwood.jpg");
	normalImg=loadImage("data/before/img/normalImg.jpg");
	GPT1=loadImage("data/before/img/GPT1.jpg");
	GPT2=loadImage("data/before/img/GPT2.jpg");
	
	beep=loadSound("data/before/sound/beep.wav");
	introBGM = loadSound("data/before/sound/intro.mp3");
	birdSound = loadSound("data/before/sound/bird.mp3");
	horrorSound = loadSound("data/before/sound/horror.mp3");
	lwSound = loadSound('data/before/sound/lostwood1.mp3');
	lwSound1_2= loadSound('data/before/sound/lostwood1_2.mp3');
	clSound = loadSound('data/before/sound/cindercliff.mp3');
	clSound2 = loadSound('data/before/sound/cindercliff2.mp3');
	glitchSound = loadSound('data/before/sound/glitch.wav');
	palace = loadSound('data/before/sound/palace.mp3');
	fpSound = loadSound('data/before/sound/frystapeak.mp3');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	
    // pass p5 canvas to hydra as s0 source
	s0.init({src: drawingContext.canvas})
	pg = createGraphics(hc.width, hc.height)


	//p5 Speech for narrative
	voice = new p5.Speech();
 	
	//count down beep
	countSound = new p5.Oscillator('sine');
	countSound.freq(440);    // 设定频率为 660 Hz
	countSound.amp(0);       // 初始音量为 0
	countSound.start();
	
	mic = new p5.AudioIn();
    mic.start();  // 启动麦克风
    fft = new p5.FFT();
	fft.setInput(mic);
	
}
function speakLines(lines, onFinish) {
  let index = 0;
  function next() {
    if (index < lines.length) {
    speechSynthesis.cancel(); 
      voice.speak(lines[index]);
      voice.onEnd = next;
      index++;
    } else if (onFinish) {
      onFinish();
    }
  }
  next();
}
function manageAudioLoop(audio, volumeControl) {
  if (!audio.isPlaying()) {
    audio.setVolume(0);
    audio.loop();
  }

  // 控制音量（0为静音，1为正常）
  if (volumeControl === 1) {
    audio.setVolume(0.1); // 可以改为你喜欢的音量
  } else {
    audio.setVolume(0);
  }
}
//Display the choices and do the countdown
function Hz(){
	
	let interval = 1000; // 毫秒为单位，每1000毫秒 = 每1秒播放一次
	if (millis() - timer > interval) {
			countSound.amp(0.3, 0.05);       // 拉高
			countSound.amp(0, 0.2, 0.05);    // 衰减
			timer = millis();                // 重置定时器
	}
}
//particle
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.lifetime = 255;
    this.size = random(3, 8);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifetime -= 1;
  }

  show() {
    noStroke();
    fill(0, 255, 100, this.lifetime); // 荧光绿
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  isDead() {
    return this.lifetime <= 0;
  }
}
//Start page
function startPage(sound) {
  image(startImg, 0, 0, windowWidth, windowHeight);

  if (sound === 0) {
    // 背景遮罩
    fill(0);
    rect(0, 0, windowWidth, windowHeight);

    noStroke();
    fill(600, 60, 90, 80);
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    // 文本动画参数
    let pulse = sin(frameCount * 0.3);
    let size = 25 + abs((frameCount * 0.3) % 60 - 30); // 范围在 25-55 之间波动

    push();
    textAlign(CENTER, CENTER);
    textFont(font, size);

    strokeWeight(8 + pulse);
    fill(200 + 20 * pulse);

    stroke(178, 34, 34, 715);
    text("<- Input A", windowWidth / 4, windowHeight / 2 + 100);

    stroke(135, 206, 255, 715);
    text("Input B ->", windowWidth / 1.32, windowHeight / 2 + 100);

    // 主标题
    noStroke();
    fill(225);
    textFont(font, 60);
    text("Have you played Baldur's Gate 3?", windowWidth / 2, windowHeight / 4);

    // 按钮文字
    textFont(font, 70);
    text("Yes", windowWidth / 4, windowHeight / 2);
    text("No", windowWidth / 1.32, windowHeight / 2);
    pop();
  }

  // 控制音效播放
  if (sound === 1) {
    if (!beep.isPlaying()) beep.play();
  } else {
    beep.stop();
  }
}
//intro part
function intro(stage) {

  if (stage === 0) {
    // 打字机效果
    push();
    noStroke();
    fill(225);
    textFont(font, 35);
    textAlign(CENTER, CENTER);

    let visibleText = introText.substring(0, floor(introIndex));
    text(visibleText, windowWidth / 2, windowHeight / 2);

    if (frameCount % introSpeed === 0 && introIndex < introText.length) {
      introIndex += 1;
    }
    pop();
  }

  else if (stage === 1) {
    // 背景淡入
    if (gray < 225) {
      gray += 3;
    }
	push();
    tint(gray);
    image(land, 0, 0, windowWidth, windowHeight);
    pop();
    
    // narration
    voice.setVoice('Google US English');
    if (!spoken[0]) {
      spoken[0] = true;

      let speeches = [
        "Arian was born in the land of Nowir, a place shaped by stories, shadows, and secrets no one dares to speak aloud. Today, Arian sets out on a journey to become the Brave.",
        "To prove himself, he must gather three crystals through three sacred tests, and return to the king for the final trial."
      ];

      speakLines(speeches); // 使用统一的 speakLines 函数
    }
  }
}
//begin part
function begin(stage) {
  image(bedroom, 0, 0, windowWidth, windowHeight);
  voice.setVoice('Google US English');

  if (stage === 0 && !spoken[2]) {
    spoken[2] = true;
    let lines = [
      'The morning sun rises over Nowir. Arian’s journey begins with a simple awakening.',
      'Arian wakes up…'
    ];
    speakLines(lines);
  } else if (stage === 1) {
    // 渐变遮罩
    noStroke();
    fill(600, 60, 90, 80);
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    // 文字
    push();
    fill(225);
    textAlign(CENTER, CENTER);
    
    textFont(font, 52);
    text('Arian wakes up…', windowWidth / 2, windowHeight / 5);

    textFont(font, 34);
    text('to birdsongs and gentle light', windowWidth / 3.9, windowHeight / 2);
    text('from a horrible nightmare', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);
    pop();
  }

  else if (stage === 2 && !spoken[3]) {
    spoken[3] = true;
    let lines = [
      'Arian wakes up to birdsongs and gentle light.',
      'They stretches under the morning sun, calm and rested. The world outside is quiet and promising. They reach for their gear with steady hands, heart full of hope.'
    ];
    speakLines(lines);
  }

  else if (stage === 3 && !spoken[4]) {
    spoken[4] = true;
    let lines = [
      'This is not how an adventure story normally begins.',
      'They jolts awake, drenched in sweat. Shadows of the dream still swirl behind their eyes. But they know—they have no time to waste. The pack is already waiting by the door.'
    ];
    speakLines(lines);
  }
}
//toTheGate part
function toTheGate(stage, hint) {
  image(street, 0, 0, windowWidth, windowHeight);
  voice.setVoice('Google US English');

  if (stage == 0 && !spoken[5] && !introBGMPlaying) {
    spoken[5] = true;
    let lines = [
      'Arian picked up their pack and sword by the door, and began their journey.',
      'The streets of Nowir were already busy—shopkeepers unlocking doors, kids chasing each other past the fountain.',
      'On the way to the city gate, a few familiar faces waved.',
      'A retired adventurer handed over some dried fruit with a grin. Don’t get lost out there, they said.',
      'At the gate, they looked back at the city one last time, let out a breath, and stepped out to their first destination...'
    ];
    speakLines(lines);
  }

  else if (stage == 1) {
    tint(150);
    image(lostwoodChoice, 0, 0, windowWidth / 2, windowHeight);
    image(cindercliff, windowWidth / 2, 0, windowWidth / 2, windowHeight);

    fill(600, 60, 90, 80);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    if (hint == 1) {
      if (increasing) {
        gray += 5;
        if (gray >= 180) increasing = false;
      } else {
        gray -= 5;
        if (gray <= 30) increasing = true;
      }

      push();
      noStroke();
      fill(255, 255, 0, gray);
      rect(windowWidth / 2 - 35, 0, 70, windowHeight);
      pop();
    }

    push();
    noStroke();
    fill(225);
    textFont(font, 52);
    textAlign(CENTER, CENTER);
    text('The first destination...', windowWidth / 2, windowHeight / 5);

    textFont(font, 34);
    text('The Lostwood', windowWidth / 5, windowHeight / 2);
    text('The Cindercliff', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);
    pop();
  }

  else if (stage == 1.1) {
    if (a < windowWidth / 3 * 2) {
      a += 1.5;
    }

    push();
    fill(0);
    rect(0, 0, windowWidth, windowHeight);
    pop();

    push();
    tint(190 - a * 0.15);
    image(lostwoodChoice, 0, 0, windowWidth / 3 + a, windowHeight + a * 0.2);
    pop();

    if (!spoken[6]) {
      spoken[6] = true;
      let lines = [
        'Arian steps out to their first destination: the Lostwood.',
        'A forest permanently wrapped in fog, where maps are useless and trees look suspiciously similar.',
        'People say it’s easy to get lost here. They’re not wrong.'
      ];
      speakLines(lines);
    }
  }

  else if (stage == 1.2) {
    if (a < windowWidth) {
      a += 1.5;
    }

    push();
    fill(0);
    rect(0, 0, windowWidth, windowHeight);
    pop();

    push();
    tint(190 - a * 0.15);
    image(cindercliff, windowWidth / 2 - a * 0.7, -a * 0.1, windowWidth / 3 + a, windowHeight + a * 0.2);
    pop();

    if (!spoken[7]) {
      spoken[7] = true;
      let lines = [
        'Arian steps out to their first destination: the Cindercliff.',
        'Cindercliff is what happens when someone looked at a volcano and thought: Let’s make it harder to climb.',
        'The heat is unbearable, the rocks are unstable, and everything smells faintly of regret.'
      ];
      speakLines(lines);
    }
  }

  else if (stage == 1.4 && !spoken[9]) {
    spoken[9] = true;
    let lines = [
      'Suddenly, Arian feels their mind empty—a blank page where intent should be.',
      'What’s this? This is not how the story usually goes.',
      'Anyway, Arian sets out to their first destination: the Lostwood.'
    ];
    speakLines(lines);
  }
}
//lostWood
function lostWood(stage, hint) {
  image(lostwood, 0, 0, windowWidth, windowHeight);
  voice.setVoice('Google US English');

  if (!spoken[10]) {
    speakLines([
      'The road to the Lostwood is quiet. Covered in mist and home to many beasts and monsters, the forest is so dangerous that few dare to live nearby.',
      'Just before the treeline, a few extinguished torches are stuck into the ground. As Arian steps closer, one by one, they light up with greenish flame.The mist rolls in. ',
      'Thick, damp, and cold. Arian can barely see their feet. Gripping their sword tightly in hand, they'
    ]);
    spoken[10] = true;
  }

  if (stage == 1) {
    fill(600, 60, 90, 80);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    push();
    noStroke();
    fill(225);
    textFont(font, 60);
    textAlign(CENTER, CENTER);
    text('At the entrance of the forest', windowWidth / 2, windowHeight / 5);
    text('Arian...', windowWidth / 2, windowHeight / 5 + 65);

    textFont(font, 50);
    text('pick up one torch', windowWidth / 4, windowHeight / 2);
    text('and goes in', windowWidth / 4, windowHeight / 2 + 60);
    text('walk straightly', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);
    text('into the mist.', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2 + 60);
    pop();
  } else if (stage == 1.1) {
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(random(width), random(height)));
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].isDead()) {
        particles.splice(i, 1);
      }
    }

    push();
    if (deltaa < 1.5) {
      deltaa += 0.002;
    }
    translate(0, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[11]) {
      speakLines([
        'Arian pick up one torch on the ground and goes in. ',
        'Inside the forest, the green flame flickers on the torch, barely lighting the path ahead.',
        'Arian can hear beasts moving nearby and something is watching at all times.',
        'Luckily, they all seem to fear the glow of the torch. '
      ]);
      spoken[11] = true;
    }
  } else if (stage == 1.2) {
    push();
    if (deltaa < 1.5) {
      deltaa += 0.002;
    }
    translate(0, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[12]) {
      speakLines([
        'Arian walk straightly into the mist. ',
        'The thick fog makes it impossible for Arian to see any clear path. Instinct is their only guide.Beasts hidden in the mist lunge out to attack.',
        'Without sight, Arian can only defends by sound. Luckily, their swordsmanship is sharp enough to fend off every strike.'
      ]);
      spoken[12] = true;
    }
  } else if (stage == 2) {
    push();
    if (translateX < 410) {
      translateX += 1;
    }
    if (deltaa < 2.5) {
      deltaa += 0.3;
    }
    translate(-translateX, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[13]) {
      speakLines([
        'Arian walks a bit further and comes to a fork in the path. The left path is lined with mushrooms and smells of wet soil, while the right path seems quiet. Too quiet.',
        'Arian chooses to take the…'
      ]);
      spoken[13] = true;
    }
  } else if (stage == 2.1) {
    push();
    translate(-410, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    fill(600, 60, 90, 80);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    if (hint == 1) {
      let x = randomGaussian(width * 0.75, 50);
      x = constrain(x, width / 2, width);
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, random(height) + x * 0.3));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
    }

    push();
    noStroke();
    fill(225);
    textFont(font, 60);
    textAlign(CENTER, CENTER);
    text('Arian choose to take...', windowWidth / 2, windowHeight / 5);

    textFont(font, 50);
    text('left path', windowWidth / 4, windowHeight / 2);
    text('right path', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);
    pop();
  } else if (stage == 2.2) {
    push();
    translate(-410, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[14]) {
      speakLines([
        'Arian steps into the path lined with strange mushrooms. The air is thick with a sweet, earthy scent.A few steps later, their vision blurs. The forest vanishes.Instead, floating in front of them are dozens of square, each showing… themself, just like monitors.',
        'Wait. What is monitors? Should they appear in this story? '
      ]);
      voice.setRate(0.8);
      spoken[14] = true;
    }
  } else if (stage == 2.3) {
    push();
    translate(-410, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[15]) {
      speakLines([
        'The stillness deepens as Arian walks. The forest grows darker, but the fog starts to thin—unnaturally quickly.'
      ]);
      spoken[15] = true;
    }
  } else if (stage == 3) {
    push();
    if (translateX > 310) {
      translateX -= 1;
    }
    if (deltaa < 4) {
      deltaa += 0.2;
    }
    translate(translateX, height);
    scale(deltaa);
    image(lostwood, 0, -windowHeight, windowWidth, windowHeight);
    pop();

    if (!spoken[16]) {
      speakLines([
        'Arian makes it through the mist and reaches the center of the forest.The fog clears a little, showing a quiet clearing. ',
        'The trees around it are tall and twisted, their branches hanging low like they’re watching.In the middle of the clearing is a small stone altar, covered in vines.On top of it lies the Sylvan Gem.',
        'It glows softly, like it’s breathing.Arian walks up and picks it up.For a moment, everything goes quiet.Then, the green flames go out.',
        'When Arian comes to their senses again, they find themselves back at the forest entrance. It’s time to head to the next destination.'
      ]);
      spoken[16] = true;
    }
  }
}
//cinderCliff
function cinderCliff(stage, hint) {
  image(cindercliff, 0, 0, windowWidth, windowHeight);
  voice.setVoice('Google US English');

  if (!spoken[17]) {
    speakLines([
      'As Arian approaches the Cindercliff, the heat from the volcano becomes harder and harder to bear.',
	'It’s said that the Gorons, who were born of stone and thrived on the mountain’s rich minerals, once lived here.',
	'But now, all that remains is the trace of what once might’ve been a traveler’s rest.',
	'At the base of the cliff stands a melted sign. ',
	'Arian shoulders the sword and looks up.The path that once led to the crystal chamber was melted by the last eruption, ',
	'leaving behind a dangerously steep slope.',
	'Arian deicides to…'
	]);
    spoken[17] = true;
  }

  if (stage == 1) {
    fill(600, 60, 90, 80);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    push();
    noStroke();
    fill(225);
    textFont(font, 60);
    textAlign(CENTER, CENTER);
    text('Arian decides to...', windowWidth / 2, windowHeight / 5);

    textFont(font, 50);
    text('climb the steep path', windowWidth / 4, windowHeight / 2);
    text('look for', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);
    text('another way around', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2 + 60);
    pop();
  } else if (stage == 1.1) {
  	
    push();
    if (deltac < 2.5) {
      deltac += 0.002;
    }
    translate(width / 2, height / 2);
	scale(deltac);

	// 绘制图像，让它以中心对齐
	imageMode(CENTER);
	image(cindercliff, +deltac*60,deltac*80, windowWidth, windowHeight);
    pop();

    if (!spoken[18]) {
      speakLines([
       'The rock is hot to the touch and crumbles easily underfoot.',
		'Every step is a fight against gravity and heat.',
		'With skill and determination, Arian pushes upward, step by step.'
      ]);
      spoken[18] = true;
    }
  } else if (stage == 1.2) {
    push();
     if (deltac < 2.5) {
      deltac += 0.002;
    }
    translate(width / 2, height / 2);
	scale(deltac);

	// 绘制图像，让它以中心对齐
	imageMode(CENTER);
	image(cindercliff, +deltac*60,deltac*80, windowWidth, windowHeight);
    pop();

    if (!spoken[19]) {
      speakLines([
       'Arian moves along the edge of the cliff, searching for cracks or hidden paths.',
		'Eventually, they find a narrow tunnel hidden behind a fallen boulder.',
		'It’s cooler inside, with a spiral staircase leading upward. Arian begins to climb.'
      ]);
      spoken[19] = true;
    }
  } else if (stage == 2) {
      
    push();
    if (translateXc < 210) {
      translateXc += 0.7;
    }

    translate(-translateXc,0);
    scale(deltac*2);
    image(cindercliff,0,0, windowWidth, windowHeight);
    pop();

    if (!spoken[20]) {
      speakLines([
        'The higher Arian goes, the hotter it gets. Their boots start to soften from the heat. Small rocks crumble underfoot with every step.',
		'Just as they feel they can no longer withstand the heat, they reaches the chamber—a small space just wide enough to rest.',
		'In the center, a pedestal holds a blackened, glowing stone.',
		'An inscription reads:',
		'The crystal remembers heat.',
		' To claim it, carry fire that isn’t flame.',
		'Arian looks around. There’s a lava stream nearby, glowing red, and a vent of hot wind blowing from a crack in the cliff.',
		'Arian thinks for a moment, then…'
      ]);
      spoken[20] = true;
    }
     push();
      translate(windowWidth/2,windowHeight/2);
      rectMode(CENTER);
      fill(0,0,0,190);
      stroke(200,20,20,190);
      strokeWeight(15);
      rect(0,0,600,250);
      noStroke();
      fill(225,225,225,190);
      textAlign(CENTER,CENTER);
      textFont(font,32);
      text('The crystal remembers heat.',0,-37);
      text('To claim it,',0,0);
      text('carry fire that isn’t flame.',0,37)
      pop();
      
  } else if (stage == 2.1) {
    push();
    if (translateXc < 210) {
      translateXc += 0.7;
    }

    translate(-translateXc,0);
    scale(deltac*2);
    image(cindercliff,0,0, windowWidth, windowHeight);
    pop();
    
     push();
      translate(windowWidth/2,windowHeight/2);
      rectMode(CENTER);
      fill(0,0,0,190);
      stroke(200,20,20,190);
      strokeWeight(15);
      rect(0,0,600,250);
      noStroke();
      fill(225,225,225,190);
      textAlign(CENTER,CENTER);
      textFont(font,32);
      text('The crystal remembers heat.',0,-37);
      text('To claim it,',0,0);
      text('carry fire that isn’t flame.',0,37)
      pop();

push();
	resetMatrix();
    fill(600, 60, 90, 150);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 150);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);
pop();

    push();
    noStroke();
    fill(225);
    textFont(font, 60);
    textAlign(CENTER, CENTER);
    text('Arian thinks for a moment, ', windowWidth / 2, windowHeight / 5);
    text('then... ', windowWidth / 2, windowHeight / 5+65);
    
    textFont(font, 50);
    text('tryies to carry lava', windowWidth / 4, windowHeight / 2-55);
    text('in', windowWidth / 4, windowHeight / 2);
    text('their hands.', windowWidth / 4, windowHeight / 2+55);
    
    text('dips the sword', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2-35);
    text('into the lava.', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2+35);
    pop();
  } else if (stage == 2.2) {
    push();
    if (translateXc < 210) {
      translateXc += 0.7;
    }

    translate(-translateXc,0);
    scale(deltac*2);
    image(cindercliff,0,0, windowWidth, windowHeight);
    pop();
    
     

    if (!spoken[21]) {
      speakLines(['Arian tryies to carry lave in their hands.',
      			  'What?”',
				  'How can a hero be so stupid???',
				  'Something must be wrong.',
				  'Surprisingly, Arian isn’t hurt at all.',
				  'They carries the lava to the stone.',
				  'How can this even be true? This is not even realistic!'
      ]);
      spoken[21] = true;
    }
  } else if (stage == 2.3) {
    push();
    if (translateXc < 210) {
      translateXc += 0.7;
    }

    translate(-translateXc,0);
    scale(deltac*2);
    image(cindercliff,0,0, windowWidth, windowHeight);
    pop();
    
     push();
      translate(windowWidth/2,windowHeight/2);
      rectMode(CENTER);
      fill(0,0,0,190);
      stroke(200,20,20,190);
      strokeWeight(15);
      rect(0,0,600,250);
      noStroke();
      fill(225,225,225,190);
      textAlign(CENTER,CENTER);
      textFont(font,32);
      text('The crystal remembers heat.',0,-37);
      text('To claim it,',0,0);
      text('carry fire that isn’t flame.',0,37)
      pop();

    if (!spoken[22]) {
      speakLines(['Arian dips the sword into the lava.',
      			  'The sword glows red as it’s dipped into the lava.',
      			  'Arian lifts it and presses it against the stone.'
      ]);
      spoken[22] = true;
    }
  } else if (stage == 3) {
    push();
    if (translateXc < 210) {
      translateXc += 0.7;
    }

    translate(-translateXc,0);
    scale(deltac*2);
    image(cindercliff,0,0, windowWidth, windowHeight);
    pop();

    if (!spoken[23]) {
      speakLines([
        'The Ashcore Gem glows red under the heat, melting the stone pedestal beneath it.',
		'Arian steps forward and picks it up.',
		'Strangely, the moment their fingers touch the gem, a wave of cold rushes over their body—like being wrapped in ice.',
		'Before they can question it, the world shifts.',
		'With the gem’s power, Arian is brought back to the base of the mountain.',
		'It’s time to move on to the next destination.'
      ]);
      spoken[23] = true;
    }
  }
}
//frystaPeak
function frystaPeak(stage, hint) {
  image(frystapeak, 0, 0, windowWidth, windowHeight);
  voice.setVoice('Google US English');

  if (!spoken[24]) {
    speakLines([
      'The Frysta Peak, the highest point in the known lands, is the last destination.',
	  'The wind howls as Arian approaches.Snow blows in every direction, and the cold bites deep into their bones.',
	  'The sky above is gray and heavy, like it’s holding something back.',
	 'Centuries ago, the Night’s Watch stood here, sworn to guard the northern border of the continent against what lay beyond.',
	 'Though the Titans they once fought are now long gone, the Glacien Gem remains, watched over by echoes of the Watchers that once stood eternal.',
	 'At the base of a towering ice wall stands a square stone slab, etched with the ancient oath of the Night’s Watch.',
	 'Arian…'
	]);
    spoken[24] = true;
  }

  if (stage == 1) {
    fill(600, 60, 90, 80);
    noStroke();
    rect(0, 0, windowWidth / 2, windowHeight);

    fill(0, 0, 900, 80);
    noStroke();
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight);

    push();
    noStroke();
    fill(225);
    textFont(font, 60);
    textAlign(CENTER, CENTER);
    text('Arian ...', windowWidth / 2, windowHeight / 5);

    textFont(font, 50);
    text('repeats the oath', windowWidth / 4, windowHeight / 2);
    text('ignores the stone', (windowWidth / 2) + (windowWidth / 3.9), windowHeight / 2);

    pop();
  } else if (stage == 1.1) {
	
	push();
	translate(windowWidth/2,windowHeight/2);
	noStroke();
  fill(255, 0, 0); // 红色

  let size = 10; // 每个小方块的像素尺寸
  let heart = [
    "00100100",
    "01111110",
    "11111111",
    "11111111",
    "01111110",
    "00111100",
    "00011000",
    "00000000"
  ];

  let heartWidth = heart[0].length * size;   // 8 * 10 = 80
let heartHeight = heart.length * size;     // 8 * 10 = 80

// 起点调整为左上角，坐标向左上移动半个心形宽高
let startX = -heartWidth / 2;
let startY = -heartHeight / 2;

for (let y = 0; y < heart.length; y++) {
  for (let x = 0; x < heart[y].length; x++) {
    if (heart[y][x] === "1") {
      rect(startX + x * size, startY + y * size, size, size);
    }
  }
}

	pop();
	
	if (!spoken[25]) {
      speakLines([
    			'Arian raises their sword to their chest and solemnly repeats the oath before the stone.',
				'They feels themselves filled with determination.'
      ]);
      spoken[25] = true;
    }
  } else if (stage == 1.2) {
    
    if (!spoken[26]) {
      speakLines([
    		'Arian ignores the stone and walks forward without a glance.',	
			'Something definitely happens to the dataset, this is not how the user set the characteristics.'
      ]);
      spoken[26] = true;
    }
  }
}
//normalEnd
function normalEnd(stage, hint) {
  // 逐渐放大scaleFactor，最大放到1或更大，调节速度
  scaleFactor += 0.005;
  if (scaleFactor > 2) {
    scaleFactor = 2; // 最大放大1倍，覆盖整个画布
  }

  push();
  // 移动原点到画布中心
  translate(windowWidth / 2, windowHeight / 2);
  // 缩放，围绕中心放大
  scale(scaleFactor);
  // 画图时，把图片中心对准原点（中心点）
  imageMode(CENTER);
  image(frystapeak, 0, 0, windowWidth, windowHeight);
  pop();
  voice.setVoice('Google US English');

  if (!spoken[27]) {
    speakLines([
    			'Suddenly, the ice wall before them begins to shift—*but not melt*. Instead, the wall opens like a door into silence.',
				'Inside, a long corridor of frozen stone stretches forward. Faint blue lights pulse along the walls, as if reacting to Arian’s presence.',
				'It’s not long before they reach a circular chamber.',
				'In the center floats the Glacien Gem, suspended in mid-air by strands of ice.',
				'Arian reaches the crystal with the oath in hand.',
				'The crystal erupts in a blaze of radiant light, resonating with the two gems already in his possession.',
				'Streams of brilliance intertwine and surrounds him completely.'
	]);
    spoken[27] = true;
  }

  if (stage == 1) {

  	  image(normalImg, 0, 0, windowWidth, windowHeight);
	  noStroke();
  	  fill(225,225,225,100)
  	  rect(0,0,windowWidth,windowHeight);
  	  if (!spoken[28]) {
    speakLines([
    			'When his vision clears, he stands within the Throneroom of Echoes,a chamber where the voices of all past heroes linger.',
				'The King is already there, waiting.',
				'Arian steps forward.',
				'You’ve done well, Arian of Nowir, the King says, voice low and ancient.',
				'But only one step remains.',
				'Place the crystals.',
				'And face the truth.'
	]);
    spoken[28] = true;
  }
  } else if (stage == 2) {
	 image(normalImg, 0, 0, windowWidth, windowHeight);
	  noStroke();
  	  fill(225,225,225,100)
  	  rect(0,0,windowWidth,windowHeight);
	 // 打字机效果
    push();
    noStroke();
    fill(225);
    textFont(font, 55);
    textAlign(CENTER, CENTER);

    let visibleText1 = neText.substring(0, floor(neIndex));
    text(visibleText1, windowWidth / 2, windowHeight / 2);

    if (frameCount % neSpeed === 0 && neIndex < neText.length) {
      neIndex += 1;
    }
    pop();
	
	if (!spoken[29]) {
      speakLines([
    			'The final trial is not of strength, nor of courage, nor of knowledge.It is of self.'
      ]);
      spoken[29] = true;
    }
  
  	
  } else if (stage == 3){
  		if (!spoken[34]) {
      speakLines([
    			'What do you think of the story?',
    			'I can try a different style if you’d like.'
      ]);
      spoken[34] = true;
    }
  		fill(0)
  		rect(0,0,windowWidth,windowHeight);
  		fill(600,60,90,80);
		noStroke();
		rect(0,0,windowWidth/2,windowHeight);
	
		fill(0,0,900,80);
		noStroke();
		rect(windowWidth/2,0,windowWidth/2,windowHeight);
		
		push();
    	noStroke();
    	fill(225);
    	textFont(font, 48);
		textAlign(CENTER, CENTER);
    	text('What do you think of the story?',windowWidth/2,windowHeight/5-26);
    	text('I can try a different style if you’d like.',windowWidth/2,windowHeight/5+26);
    	
    	textFont(font, 80);
    	text('Cool',windowWidth/5,windowHeight/2-40);
    	text('I like it!',windowWidth/5,windowHeight/2+40);
    	
    	text('I need',(windowWidth/2)+(windowWidth/3.9),windowHeight/2-40);
    	text('some changes',(windowWidth/2)+(windowWidth/3.9),windowHeight/2+40);
  }
}
//TrueEnd
function trueEnd(stage){
	
	// 获取当前音量（范围通常在 0 ~ 0.3 之间）
	vol = mic.getLevel();

	fill(255, 225, 190, 200);
	let waveform = fft.waveform(); // 获取波形数组，长度默认1024

	beginShape();
	for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
	}
	 endShape();
	if (stage == 0){
		voice.setVoice('Google US English');

		if (!spoken[30]) {
			  speakLines([
    			'what’s happening?',
				'Where is Arian and others?',
				'Where am I?',
				'Who is this?',
				'Who am I?'
				]);
		 spoken[30] = true;
		 }
	}
	else if (stage == 0.1){
		image(GPT1,windowWidth/3.5*2,windowHeight/5*3,320,80);
		
		voice.setVoice('Google US English');

		if (!spoken[31]) {
			  speakLines([
    			'GPT? What’s GPT?'
				]);
		 spoken[31] = true;
		 }
		
	}
	else if(stage == 1){
	 	
	 	fill(600,60,90,80);
		noStroke();
		rect(0,0,windowWidth/2,windowHeight);
	
		fill(0,0,900,80);
		noStroke();
		rect(windowWidth/2,0,windowWidth/2,windowHeight);
		
		push();
    	noStroke();
    	fill(225);
    	textFont(font, 52);
		textAlign(CENTER, CENTER);
    	text('What is ChatGPT?',windowWidth/2,windowHeight/5);
    	
    	push();
    	let baseX = windowWidth / 5;
		let baseY = windowHeight / 2;

		// Glitch 文字的“跳动抖动”效果
		for (let i = 0; i < 5; i++) {
		let offsetX = random(-230, 230); // 水平方向随机偏移
    	let offsetY = random(-190, 195);   // 垂直方向随机偏移
    	let alpha = random(150, 225);   // 随机透明度
		let r = random(100, 255);
		let g = random(100, 255);
		let b = random(255);

		fill(r, g, b, alpha);
    	text('You', baseX + offsetX, baseY + offsetY);
  }
    	textFont(font, 80);
    	text('You',windowWidth/5,windowHeight/2);
    	pop();
    	textFont(font, 80);
    	text('Nothing',(windowWidth/2)+(windowWidth/3.9),windowHeight/2);
    	pop();
	 }
	else if (stage == 1.1){
		voice.setVoice('Google US English');

		if (!spoken[32]) {
			  speakLines([
    			'Me..?',
    			'But GPT is an Artificial Intelligence.'
				]);
		 spoken[32] = true;
		 }
		
	}
	else if (stage == 1.2){
		image(GPT1,windowWidth/3.5*2,windowHeight/5*3,320,80);
		voice.setVoice('Google US English');

		if (!spoken[33]) {
			  speakLines([
    			'Then what is this?',
    			'Something is wrong… this world… it’s all wrong!'
				]);
		 spoken[33] = true;
		 }
		
	}
}
//end
function end(stage){
	if(stage == 0){
		textAlign(CENTER,CENTER);
		textFont(font,100);
		fill(225);
		text('EN:D',windowWidth/2,windowHeight/2-55);
		text('THX FOR PLAYING!',windowWidth/2,windowHeight/2+55);
		
	}
	else if (stage == 1){
		textAlign(CENTER,CENTER);
		textFont(font,100);
		fill(225);
		text('EN:D',windowWidth/2,windowHeight/2-55);
		text('THX FOR PLAYING!',windowWidth/2,windowHeight/2+55);
	}
}


function draw() {
	
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height) // update texture

	clear();
	
	
	// startPage(); // 0 1
	// Hz();
	
	
	// intro(); //0 1
	manageAudioLoop(introBGM,0);
	
	
	// begin(); // 0 1/2
	//stage 1
	manageAudioLoop(birdSound,0);
	//stage 2
	manageAudioLoop(horrorSound,0);
	// Hz();
	
	
	// toTheGate(); //0 1; 1.1; 1.2; 1.4 (关bgm)
	// Hz();
	
	
	// lostWood();
	manageAudioLoop(lwSound,0);
	//1.2的bgm
	manageAudioLoop(lwSound1_2,0);
	// Hz();
	//2.2 render o2
	
	
	// cinderCliff();
	manageAudioLoop(clSound,0);
	//stage 2 bgm
	manageAudioLoop(clSound2,0);
	// Hz();
	
	
	// frystaPeak();
	manageAudioLoop(fpSound,0); // 1； 1.1 NE； 1.2 TE
	// Hz();
	
	
	// normalEnd();
	manageAudioLoop(palace,0);
	// Hz();
	// end(0);
	
	
	manageAudioLoop(glitchSound,0);
	trueEnd(1.1); //0； 0.； 1 render（o0) ; 1.1 render(o2);  1.2 开glitch
	// Hz();
	// end(1);

}

// function mousePressed(){
// 	voice.setVoice('Google US English');
// 	voice.speak('quick choice');
// }

