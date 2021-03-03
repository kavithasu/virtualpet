//Create variables here
var dog,dogimage,doghappy;
var database;
var foods,foodstock;

function preload()
{dogimage=loadImage("images/dogImg.png");
doghappy=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,30,30);
  dog.addImage(dogimage)
  dog.scale=0.3
database=firebase.database();

foodstock=database.ref('food')
foodstock.on ("value",readstock)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writestock(foods)
  dog.addImage(doghappy)
}
  drawSprites();
  //add styles here

}

function readstock(data){
  foods=data.val()
}

function writestock(x){
  if(x<=0)
  {
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({food:x})

}
