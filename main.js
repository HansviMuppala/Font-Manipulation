leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){

video = createCapture("VIDEO");
video.size(500, 500);

canvas = createCanvas(530, 450);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    textSize(difference);
    text('Hansvi', 250, 250);
    fill("#0f52ba");
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        rightwristX = results[0].pose.rightwrist.y;
        difference = floor(leftwristX - rightwristX);
        
    }
}

