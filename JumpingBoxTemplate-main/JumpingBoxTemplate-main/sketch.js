

var movingRect,fixedRect1,fixedRect2,fixedRect3,fixedRect4


function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
fixedRect1 = createSprite(700,550,150,60)
fixedRect1.shapeColor="red"

fixedRect2 = createSprite(490,550,150,60)
fixedRect2.shapeColor="black"
fixedRect3 = createSprite(290,550,150,60)
fixedRect3.shapeColor="pink"
fixedRect4 = createSprite(90,550,150,60)
fixedRect4.shapeColor="white"

movingRect= createSprite(700,200,50,50)
movingRect.shapeColor="green"
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    movingRect.x=World.mouseX
    movingRect.y=World.mouseY
  //  MediaStreamErrorEver
    //create edgeSprite


drawSprites()
    //add condition to check if box touching surface and make it box
}
