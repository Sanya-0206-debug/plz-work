
function preload() {
	mario_kick = loadSound("kick.wav");
	mario_coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	mario_jump = loadSound("jump.wav");
	mario_gameover = loadSound("gameover.wav")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("console");	
	poseNet = ml5.poseNet(video,moadelLoaded);
	poseNet.on("poses",gotPoses);
}

function draw() {
	game();
}
function moadelLoaded(){
	console.log("Moadel Is Loaded");
}
function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX "+noseX,"noseY " + noseY);
	}
}







