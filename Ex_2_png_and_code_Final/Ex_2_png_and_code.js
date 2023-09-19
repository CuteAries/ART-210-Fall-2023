
let img;

function preload (){
 img = loadImage('data/cat2.png');
 img1 = loadImage ('data/cat1.png');
 img2 = loadImage ('data/heart.png');
}
function setup() {
createCanvas(800,600);
//background(255,182,193);
//image(img, 0, 0);

}

function draw() {
  background(255,182,193);

 if (mouseIsPressed == true)
 {background(img2);
   image(img1,0,0,);
 }
 else {
  image(img,0,0);
}
}
