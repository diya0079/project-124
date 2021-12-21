function setup() {
    video=createcapture(VIdeo);
    video.size(500,500);

    canvas= createcanvas(500,550);
    canvas.position(500,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw () {
    background('#000000');
}

function modelLoaded () {
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

