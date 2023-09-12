function setup() {
createCanvas (800, 475);
background(240,235,216);
}


function draw() {
fill (221,223,222);
noStroke ();
  quad( 0,0,800,23,800,302,0,302);

stroke(154,143,147);
strokeWeight(9);
line(0,64,154,3);

stroke(154,143,147);
strokeWeight(11);
line(0,192,312,0);

stroke(154,143,147);
strokeWeight(20);
line (439,0,0,470);

stroke(154,143,147);
strokeWeight(25);
line (561,0,385,474);

stroke(154,143,147);
strokeWeight(20);
line(682,0,800,379);

stroke(154,143,147);
strokeWeight(15);
line(779,0,797,21);


stroke(190,192,183);

fill(255,202,12);
noStroke();
ellipse(652,43,150, 40); 

fill(255,202,12);
noStroke();
ellipse(654,171,250, 90);


stroke(0);
strokeWeight(2);
line(340,0, 356,6);

fill(23,73,127);
noStroke();
triangle(0,111,0,117,273,119);


stroke(0,0,0);
strokeWeight(6);
line(139,257,800,243);

stroke(0);
strokeWeight(2);
line(180,130,356,5);

stroke(0);
strokeWeight(2);
line(0,286,572,451);

stroke(0);
strokeWeight(2);
line(572,451,303,456);

stroke(0);
strokeWeight(2);
line(303,456,0,343);

stroke(0);
strokeWeight(2);
line(549,431,800,366);

fill(0);
noStroke();
quad(0,115,46,119,20,187,0,180);

fill(255,202,12);
noStroke();
quad(65,123,225,139,189,219,81,202);

stroke(0);
strokeWeight(2);
line(669,0,719,226);
}
