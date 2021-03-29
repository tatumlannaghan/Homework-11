// character x and y
    var characterX = 100;
    var characterY = 100;
// letter codes
    var w = 87;
    var s = 83;
    var a = 65;
    var d = 68;
// create x and y for shape 1
    var shapeX = 30;
    var shapeY = 50;
    var shapeXSpeed;
    var shapeYSpeed;
// mouseclick shape
    var mouseShapeX;
    var mouseShapeY;
    function setup()
    {
        createCanvas(500,600);
// random speed
        shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5)) +1;
        shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5)) +1;
    }
//border
function draw()
{
    background(0,100,56);
    stroke(0);
    fill(0);
//left
    rect(0,0,5,height);
//top
    rect (0,0,width,5);
//right
    rect(width-5,0,5,height-50);
//bottom
    rect(0,height-5,width,5);
//exit
textsize(15);
text("Exit", width-25,height-25)
//character
fill(24,200,29);
circle(characterX,characterY,20);
//keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
//enemy shape 1
    fill(255,0,0);
    circle(shapeX,shapeY,10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//enemy 1 movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
//out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX <0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    { 
        shapeY = height;
    }
//enemy shape 2
    fill(175,0,0);
    circle(shapeX,shapeY,10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//enemy 2 movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
//out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX <0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    { 
        shapeY = height;
    }
// character exits
    if(characterX > width && characterY > width-25)
    {
        fill(255);
        stroke(5);
        textsize(30);
        text("You Win!!!", width/2-25, height/2-25)
    }
//mouse click shape
    fill(30,78,124);
    circle(mouseShapeX, mouseShapeY, 25);
    }
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
