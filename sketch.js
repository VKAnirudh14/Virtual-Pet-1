var Dog;
var HappyDog;
var database;
var foods;
var foodStock;
var DogImg;
var HappyDogImg;
var db;

function preload()
{
  DogImg = loadImage("Dog.png");
  HappyDogImg = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  Dog=createSprite(250,250);
  Dog.scale=0.1;
  Dog.addImage(DogImg)

  foodStock=database.ref("Food")
    foodStock.on("value",readStock)


}


function draw() {  

  background("green");

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
     Dog.addImage(HappyDogImg)
  }

  drawSprites();
  textSize(25);
  text("Note:Press Up_Arrowto feed Doggo Milk",100,100);

}

  function readStock(data){
    foods=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    });
  }