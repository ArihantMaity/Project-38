var canvas;
var Play = 1;
var End = 0;
var gameState = Play;
var helicopter,city,heli;


function preload(){
  heli = loadImage("helicopter.png");
  city = loadImage("Hot Air Ballon-01.png");
}

function setup(){
  canvas = createCanvas(1000,500);
  helicopter = createSprite(100,200,10,30);
  helicopter.addImage(heli);
  helicopter.scale = 0.5

  city.x = city.width/2;

 createEdgeSprites();
 createEdgeSprites.visible = false;
}



function draw(){

  background(city); 
  if(gameState === 1){

    camera.position.x = helicopter.x;
    camera.position.y = helicopter.y;
  
  if(keyDown("RIGHT_ARROW")){
    helicopter.x += 5;
  }
  if(keyDown('DOWN_ARROW')){
    helicopter.y += 5;
  }
  if(keyDown('UP_ARROW')){
    helicopter.y -= 5;
  }
  if (city.x < 1000){
    city.x = 500
  }
  

}
  if(helicopter.y >= 460 || helicopter.y <= 35){
    fill("black")
    textSize(30);
    text("GAME OVER",400,250);
    gameState = 0;
  }

  //console.log(helicopter.y)
drawSprites();

}





