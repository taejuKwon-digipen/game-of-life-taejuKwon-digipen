//권태주
//Game of Life
//CS099
//Spring 2020

var G_L;


function setup() {
  createCanvas(600, 600);
  G_L = new GL()
  G_L.setup_grid()
}

function draw() {
  background(0)
  G_L.draw()
  G_L.update()
}

function keyPressed() {
  if (keyCode === 82) {
    setup()
  }
  if (keyCode === 67) {
    G_L.clear_grid()
  }
  if (keyCode === 32) {
    G_L.showPattern1()
  }
}

function mousePressed(){
  if ( mouseButton === LEFT) {
    G_L.showPattern2()
  }
  if (mouseButton === CENTER){
    G_L.showPattern3()
  }
}