var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
score=0
  fruit = createGroup();
  obstacles = createGroup();
  ground = createSprite(80,350,1100,20)
}


function draw() {
  background (220)    
text ("Score:  "+score,300,50)
      if(keyDown("space")&& monkey.y >=300) {
        monkey.velocityY = -14;
    }
if (fruit.isTouching(monkey)){
  score=score+1
  monkey.scale=monkey.scale+0.1
  fruit.destroyEach();
}
  if (obstacles.isTouching(monkey)){
text("Game Over",300,300)
    obstacles.velocityX=0
    fruit.velocityY=0
    background.depth=monkey.depth+1
    background.depth=banana.depth+1
    background.depth=obstacle.depth+1
    monkey.destroy()
    obstacles.destroyEach()
    fruit.destroyEach()
    fruit.destroy()
    fruit.destroy()
}
  console.log(monkey.y)
  
monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground)
  spawnObstacles()
  spawnfruit();
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 80 === 0){
   obstacle = createSprite(600,310,10,40);
  
  noLoop( obstacle.velocityX = -6);
   obstacle.addImage("obstacle.png", obstacleImage)

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   obstacles.add(obstacle)
   
   //add each obstacle to the group
 }
  
}

function spawnfruit(){
 if (frameCount % 60 === 0){
  banana = createSprite(600,200,10,40);
  
  noLoop( banana.velocityX = -6);
   banana.addImage("obstacle.png", bananaImage)

   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.2;
    banana.lifetime = 300;
   fruit.add(banana)
   //add each obstacle to the group
 }
  
}

  
  drawSprites();


