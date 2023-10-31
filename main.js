
function setup(){

video = createCapture("VIDEO");
video.size(500, 500);

canvas = createCanvas(530, 450);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
    }
}