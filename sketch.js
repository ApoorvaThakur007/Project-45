var boundry1,boundry2,boundry3,boundry4;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
    //foodImg = loadImage("food.png")
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50)


    boundry1 = createSprite(width/2,height-5,width,10)
    boundry1.shapeColor = "black"
    boundry2 = createSprite(width/2,5,width,10)
    boundry2.shapeColor = "black"
    boundry3 = createSprite(width-5,height/2,10,height)
    boundry3.shapeColor = "black"
    boundry4 = createSprite(5,height/2,10,height)
    boundry4.shapeColor = "black"
    
    
    innerBoundry1 = createSprite(width/2,height-200,width/2,10)
    innerBoundry1.shapeColor = "black"
    innerBoundry2 = createSprite(width/2,200,width/2,10)
    innerBoundry2.shapeColor = "black"
    innerBoundry3 = createSprite(width-200,height/2,10,height/2)
    innerBoundry3.shapeColor = "black"
    innerBoundry4 = createSprite(200,height/2,10,height/2)
    innerBoundry4.shapeColor = "black"


    snake = createSprite(width/2,height/2,25,25)
    snake.shapeColor = rgb(50,80,66)


    foodG = new Group()
    BfoodG = new Group()
}

function draw(){
    background("lightGreen")

    textSize(30)
    fill("pink")
    text("SCORE:"+score,30,50)
    if(gameState === PLAY){
    spawnFood();
    spawnBFood();
    if(keyDown(LEFT_ARROW)){
        snake.velocityX = -(5+Math.round(score/5))
        snake.velocityY = 0
    }
    if(keyDown(RIGHT_ARROW)){
        snake.velocityX = (5+Math.round(score/5))
        snake.velocityY = 0
    }
    if(keyDown(UP_ARROW)){
        snake.velocityX = 0
        snake.velocityY = -(5+Math.round(score/5))
        
    }
    if(keyDown(DOWN_ARROW)){
        snake.velocityX = 0
        snake.velocityY = (5+Math.round(score/5))
        
    }

    if(foodG.isTouching(snake)){
        foodG.destroyEach()
        score = score+1;
    }
    if(BfoodG.isTouching(snake)){
        BfoodG.destroyEach()
        score = score-2;
    }

    }
    if(boundry1.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(boundry2.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(boundry3.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(boundry4.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(innerBoundry1.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(innerBoundry2.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(innerBoundry3.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(innerBoundry4.isTouching(snake)){
        snake.setVelocity(0,0)
        snake.x = width/2
        snake.y = height/2
        gameState = END;
    }
    if(gameState === END){
        foodG.destroyEach();
        BfoodG.destroyEach();
        snake.visible = false
        textSize(50)
        fill("white")
        text("GAME OVER!",width/2-150,height/2)
        textSize(40)
        text("Press 'R' to reset..",width/2-150,height/2+50)
    }
    if(keyDown("R")){
        gameState = PLAY;
        snake.visible = true;
        score = 0;
    }

    drawSprites();
}

function spawnFood(){
    if(frameCount%120===0){
        var food = createSprite(Math.round(random(30,width-30)),Math.round(random(30,height-30)),20,20) 
        //food.addImage("food",foodImg)
        //food.scale = 0.35
        food.shapeColor = "white"
        //food.lifetime = 150
        if(food.isTouching(innerBoundry1)){
            food.y = food.y-40
        }
        if(food.isTouching(innerBoundry2)){
            food.y = food.y-40
        }
        if(food.isTouching(innerBoundry3)){
            food.x = food.x-40
        }
        if(food.isTouching(innerBoundry4)){
            food.x = food.x-40
        }
        foodG.add(food)
    }
}

function spawnBFood(){
    if(frameCount%350===0){
        var Bfood = createSprite(Math.round(random(30,width-30)),Math.round(random(30,height-30)),15,15) 
        //food.addImage("food",foodImg)
        //food.scale = 0.35
        Bfood.shapeColor = "purple"
        Bfood.lifetime = 250
        if(Bfood.isTouching(innerBoundry1)){
            Bfood.y = food.y-40
        }
        if(Bfood.isTouching(innerBoundry2)){
            Bfood.y = food.y-40
        }
        if(Bfood.isTouching(innerBoundry3)){
            Bfood.x = food.x-40
        }
        if(Bfood.isTouching(innerBoundry4)){
            Bfood.x = food.x-40
        }
        BfoodG.add(Bfood)
    }
}

