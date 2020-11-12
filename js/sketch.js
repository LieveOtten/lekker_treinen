let windowSwitch;
let windowColor;
let dark;
let trainX;
let trainS;
let cloudX;
let cloudX1;

function setup() {
  createCanvas(600, 600);
  noStroke();
    windowColor = color("#FFF4D1");
    windowSwitch = color("#FFF4D1");
    cloudX = 60;
    cloudX1 = 120;
    trainX = 50;
    trainS = 4;
}

function draw() {

  let x = map(mouseX, 0, width, 217, 100);    
  background(x, 73, 100);

  //ZON
  fill(255, 180);
  ellipse(450, 100, 100, 100);
  fill(255, 10);
  ellipse(450, 100, 120, 120);
  ellipse(450, 100, 140, 140);
  ellipse(450, 100, 160, 160);

  //WOLK
    fill(230);
    ellipse(cloudX1, 130, 20);
    ellipse(cloudX1 + 25, 120, 40);
    ellipse(cloudX1 + 65, 112, 55);
    ellipse(cloudX1 + 95, 125, 30);
    rect(cloudX1, 125, 95, 15);
    fill(240);
    ellipse(cloudX, 155, 30);
    ellipse(cloudX + 35, 145, 50);
    ellipse(cloudX + 75, 150, 40);
    rect(cloudX, 150, 80, 20);    
    
    cloudX = cloudX + 1; 
    cloudX1 = cloudX1 + 1.3;
    
    if (cloudX > 620) {
        cloudX = -75;
    }
    
    if (cloudX1 > 680) {
        cloudX1 = -125;
    }
    
    
  //GEBOUWEN
  fill(0, 100);
  rect(0, 290, 100, 200);
  rect(120, 200, 100, 300);
  rect(160, 150, 3, 50);
  rect(410, 350, 200, 300);
  rect(520, 300, 100, 50);

  //RAMEN EERSTE GEBOUW
  fill(windowColor);
  rect(10, 310, 10, 10);
  rect(30, 330, 10, 10);
  rect(10, 330, 10, 10);
  rect(70, 330, 10, 10);
    fill(windowSwitch, 70);
  rect(70, 350, 10, 10);
  rect(10, 410, 10, 10);
  rect(10, 390, 10, 10);
  rect(50, 390, 10, 10);

  //RAMEN TWEEDE GEBOUW 
    fill(windowColor);
  rect(130, 220, 10, 10);
  rect(170, 220, 10, 10);
  rect(190, 220, 10, 10);
  rect(190, 240, 10, 10);
  rect(190, 260, 10, 10);
  rect(170, 260, 10, 10);
    fill(windowSwitch, 70);
  rect(130, 260, 10, 10);
  rect(170, 280, 10, 10);
  rect(150, 280, 10, 10);
  rect(190, 300, 10, 10);
  rect(150, 340, 10, 10);
  rect(130, 340, 10, 10);
  rect(130, 360, 10, 10);
  rect(170, 360, 10, 10);
  rect(190, 420, 10, 10);
  rect(150, 420, 10, 10);
    fill(windowSwitch, 70);
  rect(190, 400, 10, 10);
  rect(170, 440, 10, 10);
  rect(130, 470, 10, 10);
  rect(150, 470, 10, 10);
  rect(190, 470, 10, 10);

  //RAMEN DERDE GEBOUW
    fill(windowSwitch);
  rect(420, 370, 10, 10);
  rect(440, 370, 10, 10);
  rect(480, 370, 10, 10);
  rect(500, 370, 10, 10);
  rect(500, 390, 10, 10);
  rect(460, 390, 10, 10);
  rect(460, 410, 10, 10);
  rect(480, 410, 10, 10);
  rect(420, 410, 10, 10);
    fill(windowColor, 70);
  rect(500, 430, 10, 10);
  rect(480, 430, 10, 10);
  rect(420, 430, 10, 10);
  rect(440, 470, 10, 10);
  rect(420, 470, 10, 10);

  //RAMEN VIERDE GEBOUW
  rect(530, 360, 10, 10);
  rect(550, 340, 10, 10);
    fill(windowSwitch, 70);
  rect(530, 320, 10, 10);
  rect(570, 320, 10, 10);
  rect(550, 320, 10, 10);
  rect(590, 380, 10, 10);
  rect(590, 400, 10, 10);
  rect(550, 380, 10, 10);
    fill(windowColor, 70);
  rect(530, 380, 10, 10);
  rect(530, 420, 10, 10);
  rect(550, 420, 10, 10);

  //GEVULD VLOER
  fill(200, 250, 250);
  rect(0, 500, 600, 200);

  //VLOER
  fill(0);
  ellipse(0, 500, 200, 100);
  ellipse(0, 500, 300, 50);
  ellipse(300, 500, 70, 20);
  ellipse(500, 500, 100, 40);
  ellipse(450, 500, 100, 20);
  ellipse(300, 500, 70, 20);
  ellipse(580, 490, 170, 100);

  //TREIN 
  fill("#FAC63F");
    rect(trainX, 440, 80, 10);
    ellipse(trainX + 80, 455, 30, 30);
    ellipse(trainX, 455, 30, 30);
    fill('#222E5C');
    rect(trainX, 445, 80, 2);

    trainX = trainS + trainX;
    
    if (trainX > 680) {
        trainS = -5;
    }
    
    if (trainX <-180) {
        trainS = 5;
    }
    
  //BRUG
  fill(255, 150);
  rect(0, 428, 600, 2);
  fill(0);
  quad(width / 2 + 500, height / 2 + 150, width / 2 + 576, height / 2 + 170, width / 2 - 586, height / 2 + 170, width / 2 - 560, height / 2 + 150);
  rect(0, 430, 600, 5);
  rect(20, 430, 5, 20);
  rect(40, 430, 5, 20);
  rect(60, 430, 5, 20);
  rect(80, 430, 5, 20);
  rect(100, 430, 5, 20);
  rect(120, 430, 5, 20);
  rect(140, 430, 5, 20);
  rect(160, 430, 5, 20);
  rect(180, 430, 5, 20);
  rect(200, 430, 5, 20);
  rect(220, 430, 5, 20);
  rect(240, 430, 5, 20);
  rect(260, 430, 5, 20);
  rect(280, 430, 5, 20);
  rect(300, 430, 5, 20);
  rect(320, 430, 5, 20);
  rect(340, 430, 5, 20);
  rect(360, 430, 5, 20);
  rect(380, 430, 5, 20);
  rect(400, 430, 5, 20);
  rect(420, 430, 5, 20);
  rect(440, 430, 5, 20);
  rect(460, 430, 5, 20);
  rect(480, 430, 5, 20);
  rect(500, 430, 5, 20);
  rect(520, 430, 5, 20);
  rect(540, 430, 5, 20);
  rect(560, 430, 5, 20);
  rect(580, 430, 5, 20);

  //REFLECCTIE
  fill(100, 150);
  rect(0, 500, 600, 200);

}

function mousePressed() {
    print("windowSwitch");
    windowSwitch = color("rgba(33,32,30,0.8)");
}