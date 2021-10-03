var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg3 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg3 = loadImage("mouse4.png");
    cat_img2 = loadAnimation("cat2.png","cat3.png");
    mouse_img2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseGifting",mouseImg1);
    mouse.scale = 0.2;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImg3);
         cat.changeAnimation("catLastImage");
         cat.x = 300;
         cat.scale = 0.2;
         cat.velocityX = 0;

         mouse.addAnimation("mouseLastImage",mouseImg3);
         mouse.changeAnimation("mouseLastImage");
         mouse.scale = 0.2;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW) {
    mouse.addAnimation("mouseTeasing",mouse_img2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
   }
   
    

  if (keyCode === LEFT_ARROW) {
        cat.velocityX =-5;
        cat.addAnimation("CatRunning",cat_img2);
        cat.changeAnimation("CatRunning");
     }

       
    }

