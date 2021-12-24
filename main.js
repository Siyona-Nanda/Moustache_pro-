nose_x = 0;
nose_y = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/25M0m7M2/pngwing-com-1.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded() {
    console.log("posenet is working");

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 130, 130);

}

function takesnapshot() {
    save("my_selfie😲.png");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 70;
        nose_y = results[0].pose.nose.y - 70;
    }
}