var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
box1=createSprite(30,590,70,30);
box1.shapeColor="blue";

box2=createSprite(180,590,70,30);
box2.shapeColor="pink";

box3=createSprite(350,590,70,30);
box3.shapeColor="green";

box4=createSprite(560,590,70,30);
box4.shapeColor="orange";

ball=createSprite(300,80,50,50);
ball.shapeColor="white";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.x=World.mouseX;
ball.y=World.mouseY;

if(ball.isTouching(box1)){
    ball.shapeColor="blue";
    music.play();
}
if(ball.isTouching(box2)){
    ball.shapeColor="pink";
    music.stop();
}
if(ball.isTouching(box3)){
    ball.shapeColor="green";
    music.play();
}
if(ball.isTouching(box4)){
    ball.shapeColor="orange";
    music.stop();
}


    //add condition to check if box touching surface and make it box
drawSprites();
}
