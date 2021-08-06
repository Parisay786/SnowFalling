const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var sflake1,sflake2;
var backgroundImg,platform;

var bg="sprites/snow3.jpg";


function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas=createCanvas(800,400);
  engine= Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);


}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  drawSprites();
}

function spwanSflake () {
  if (frameCount%60===0) {
    sflake1=createSprite(550,10,15,15);
    sflake1.addImage("sprites/snow4.webp");
    sflake1.x=Math.round (random(5,400));
    sflake1.velocityY=5;
    sflake1.scale=0.05
  }
}

function spwanSflake () {
  if (frameCount%40===0) {
    sflake2=createSprite(550,10,15,15);
    sflake2.addImage("sprites/snow5.webp");
    sflake2.x=Math.round (random(5,400));
    sflake2.velocityY=5;
    sflake2.scale=0.05
  }
}

async function getBackgroundImg () {
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hour>=06 && hour<=19) {
  bg="sprites/snow1.jpg";
}
else{
  bg="sprites/snow2.jpg"

}



}