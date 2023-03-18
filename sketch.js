// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

// Variables for Cloud
var cloudLeftX = 150;
var cloudRightX = 300;
var cloudLeftY = 120;
var cloudRightY = 80;
var cloudSpeed = 0.5;

//variables for Car
var carLeftX = 150;
var carRightX = 300;
var carLeftY = 430;
var carRightY = 470;
var carSpeed = 2;

// variables for UFO
ufoX = 10;
ufoY = 50;
ufoSpeed = 2;

var robotWidth = 32;
var robotHeight = 20;

var cityRectX = 300;
var cityRectY = 150;

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(550, 500);
}

function draw() {
  background(29, 40, 115);
  city();
  cloud();
  road();
  ufo();
  robot();
}
//call your functions and do your drawing here.
// please erase code below once you are working.

// function for city
var city = function () {
  //draw Moon
  fill(255, 255, 255);
  ellipse(480, 50, 70, 70);
  fill(29, 40, 115);
  noStroke();
  ellipse(460, 30, 70, 70);

  // Draw City

  fill(0, 0, 0);
  stroke(255, 255, 255);
  rect(cityRectX, cityRectY + 20, 100, 240); // 6th building
  // winrow for 6th building
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 9; j++) {
      fill(227, 230, 163);
      rect(15 * i + 310, 25 * j + 180, 5, 20);
    }
  }

  fill(0, 0, 0);
  stroke(255, 255, 255);
  rect(cityRectX - 70, cityRectY + 100, 100, 150); // 5st Building
  rect(cityRectX - 100, cityRectY - 20, 70, 270); // 4st Building
  rect(cityRectX - 200, cityRectY + 100, 100, 150); // 3rd Building
  rect(cityRectX - 250, cityRectY + 60, 50, 210); // 2th Building
  rect(cityRectX - 300, cityRectY - 30, 50, 290); // 1st Building

  // window for 1th building
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 18; j++) {
      fill(227, 230, 163);
      rect(15 * i + 5, 15 * j + 130, 8, 8);
    }
  }

  // window for 2th building

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 7; j++) {
      fill(227, 230, 163);
      rect(20 * i + 60, 25 * j + 220, 10, 20);
    }
  }

  // window for 3th building
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 9; j++) {
      fill(227, 230, 163);
      rect(45 * i + 110, 15 * j + 260, 40, 5);
    }
  }

  // window for 4th building
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 17; j++) {
      fill(227, 230, 163);
      rect(15 * i + 208, 15 * j + 140, 8, 8);
    }
  }

  // window for 5th building
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 9; j++) {
      fill(227, 230, 163);
      rect(45 * i + 280, 15 * j + 260, 40, 3);
    }
  }
};

// function for cloud
var cloud = function () {
  // left cloud
  fill(255, 255, 255);
  ellipse(cloudLeftX, cloudLeftY, 126, 97);
  ellipse(cloudLeftX + 62, cloudLeftY, 70, 60);
  ellipse(cloudLeftX - 62, cloudLeftY, 70, 60);

  // right cloud
  ellipse(cloudRightX, cloudRightY, 126, 97);
  ellipse(cloudRightX + 62, cloudRightY, 70, 60);
  ellipse(cloudRightX - 62, cloudRightY, 70, 60);

  cloudLeftX -= cloudSpeed;
  cloudRightX += cloudSpeed;

  if (cloudLeftX < -50) {
    cloudLeftX += 550;
  }

  if (cloudRightX > 550) {
    cloudRightX -= 550;
  }
};

//function for road and car

var road = function () {
  fill(0, 0, 0);
  stroke(255, 255, 255);
  rect(0, 400, 600, 200); // road
  rect(0, 400, 580, 10); // space between road and city

  fill(255, 255, 255);
  rect(carLeftX, carLeftY, 30, 10); // left moving car
  rect(carLeftX + 200, carLeftY, 30, 10);

  rect(carRightX, carRightY, 30, 10); // right moving car
  rect(carRightX + 200, carRightY, 30, 10);

  carLeftX -= carSpeed;
  carRightX += carSpeed;

  if (carLeftX < 10) {
    carLeftX += 550;
  }

  if (carRightX > 550) {
    carRightX -= 550;
  }
};

// write functions here that are called in your setup or draw function. please remove this one.

// function for UFO

var ufo = function () {
  fill(255, 255, 0);
  ellipse(ufoX, ufoY, 60, 80);
  fill(69, 66, 61);
  noStroke();
  ellipse(ufoX, ufoY + 20, 140, 50);

  if (ufoX > 450 && ufoY > 300) {
    ufoSpeed = -2;
  }

  if (ufoX < 0 && ufoY < 0) {
    ufoX = 10;
    ufoY = 50;
    ufoSpeed = 2;
  }
  ufoX += ufoSpeed + 0.7;
  ufoY += ufoSpeed;
};

var robot = function () {
  var rFaceX = 450;
  var rFaceY = 335;

  fill(255, 255, 255);
  // robotColor(255, 255, 255);
  rect(rFaceX, rFaceY, robotWidth, robotHeight);
  rect(rFaceX + 10, rFaceY + 15, robotWidth - 25, robotHeight);
  rect(rFaceX, rFaceY + 25, robotWidth, robotHeight);
  rect(rFaceX + 5, rFaceY + 45, robotWidth - 25, robotHeight);
  rect(rFaceX + 20, rFaceY + 45, robotWidth - 25, robotHeight);

  if (ufoX > 450 && ufoY > 300) {
    robotWidth = 0;
    robotHeight = 0;
  }

  if (ufoX < 0 && ufoY < 0) {
    robotWidth = 32;
    robotHeight = 20;
  }
};
