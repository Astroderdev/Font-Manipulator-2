function setup(){
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.position(190, 175)
    canvas = createCanvas(400, 400);
    canvas.position(650, 175);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    background("white");
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }

}