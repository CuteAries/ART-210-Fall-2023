let img;

function preload (){
 img = loadImage('data/cat2.png');
}
function setup() {
createCanvas(800,600);
//background(255,182,193);
//image(img, 0, 0);
}

function draw() {
background(255,182,193);
 let tintVal = map(mouseX, 0, width, 0,255);
 tint(255, tintVal);
  image(img,0,0);
  
  if (mouseX > 0 && mouseX < img.width && mouseY < img.height) {
  fill(255,0,0);
  textSize (24);
  text ('Im in the walls', img.width/2,img.height/2);
  }
}

function mousepressed() {
  
}
