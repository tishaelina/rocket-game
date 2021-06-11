var star1,star1Img,star1Group;
var star2,star2Img,star2Group;
var space,spaceImg;
var enemy,enemyImg,enemyGroup;
var rocket,rocketImg;
var gameState = "play";
var score =0;


function preload(){
 spaceImg = loadImage("space.png");
 rocketImg = loadImage("rocket3.png");
 enemyImg = loadImage("enemy.png");
 star1Img = loadImage("star1.png");
 star2Img = loadImage("star2.png")
 
}

function setup() {
  createCanvas(600,400);
  
 space = createSprite(300,400,10,10);
 space.addImage(spaceImg);
 space.scale = 1.5;
 space.velocityY = 2;
 space.y = space.height/2;
 
 
  
 
  
 rocket = createSprite(200,350,10,10);
 rocket.addImage(rocketImg);
 rocket.scale = 0.3;
 rocket.velocityY = -1;
 
 star1Group = new Group();
 star2Group = new Group();
 enemyGroup = new Group();
  
}

function draw() {
 background("red");
  
  if(gameState ==="play"){
    
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x +3
    }
    
    if(keyDown("left_arrow")){
      rocket.x = rocket.x -3;
    }
    
    if(keyDown("up_arrow")){
      rocket.y = rocket.y -3;
    }
    
    if(keyDown("down_arrow")){
      rocket.y = rocket.y +3;
    }
    
    if(rocket.isTouching(star1Group)){
      star1Group.destroyEach();
      score = score+5;
    }
    
     if(rocket.isTouching(star2Group)){
      star2Group.destroyEach();
      score = score+5;
    }
    
     if(rocket.isTouching(enemyGroup)){
        gameState = "END";
        enemyGroup.destroyEach();
      
      
       star1Group.destroyEach();
      star2Group.destroyEach();
      enemyGroup.destroyEach();
       
      star1Group.setVelocityEach(0);
      star2Group.setVelocityEach(0);
      enemyGroup.setVelocityEach(0);
     }
    

    
    
    
     if(space.y >300){
      space.y = height/2;
    }
  
  
  
  
  spawnEnemy();
  spawnStars();
  
  drawSprites();
  
  fill("white");
  textSize(15);
  text("score:" + score ,500,20);
}

 if(gameState === "END"){
   fill("yellow");
   textSize(30);
   text("GAME OVER",220,200);
 }
}

 function spawnEnemy(){
   if(frameCount % 200 === 0){
      enemy = createSprite(random(120,40),50,10,10);
      enemy.addImage(enemyImg);
      enemy.velocityY = 1;
      enemy.lifetime = 600;
      enemyGroup.add(enemy);
      enemy.scale = 0.1;
     
   }
 }
 function spawnStars(){
   if(frameCount % 200 === 0){
     star1 = createSprite(random(120,450),200,10,10);
     star1.addImage(star1Img);
     star1.scale = 0.1;
     star1Group.add(star1);
     
     star2 = createSprite(random(120,450),200,100,10,10);
     star2.addImage(star2Img);
     star2.scale = 0.1;
     star2Group.add(star2);
   }
 }


 
 