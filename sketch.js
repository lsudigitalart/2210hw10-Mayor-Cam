// Cameron Moore

var canvasWidth = 750;
var canvasHeight = 750;
var midX = canvasWidth/2;       // midpoint X
var midY = canvasHeight/2;      // midpoint Y

// Object Array
var confetti = [];

// Initializer variable keeps confetti from being drawn before the first mouse click
var initializer = 0;

// Gravity value for the rate of confetti's fall
var grav;

function setup()
{
  createCanvas(canvasWidth, canvasHeight);

  background(75,75,75);

  for (var i = 0; i < 75; i++)
  {
      confetti[i] = new Confetti();
  }
}

function draw()
{
  if (initializer == 1)
  {
    for (var i = 0; i < confetti.length-1; i++)
    {
      if(confetti[i].y < canvasHeight)
      {
        confetti[i].move();
        confetti[i].display();
      }
    }
  }

}

function mouseClicked()
{
  background(75,75,75);
  initializer = 1;
  grav = random(0.1, 1);
  for (var i = 0; i < confetti.length-1; i++)
  {
    confetti[i].initialize(mouseX,mouseY);
  }
}

function Confetti()
{
  var velX;
  var velY;
  var diameter;
  var r;
  var g;
  var b;

  this.initialize = function(x,y)
  {
    this.x = x;
    this.y = y;
    velX = random(-8,8);
    velY = random(-15, 5);
    diameter = random(6, 25);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }

  this.move = function()
  {
    velY += grav; // gravity effect (for constant gravity, as opposed to random, a good value is 0.5)
    this.x += velX;
    this.y += velY;
  }

  this.display = function()
  {
    noStroke();
    fill(r,g,b);
    ellipse(this.x, this.y, diameter)
  }
}
