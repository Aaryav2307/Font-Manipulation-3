leftWristX = 0;
rightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(430, 430);

    canvas = createCanvas(430, 430);
    canvas.position(560, 237);

    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded(){
    console.log('model loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#ee8289');
    textSize(difference);
    fill('#fc0352');
    text('I Play Minecraft', 50, 400)
}