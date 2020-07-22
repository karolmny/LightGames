
var snakey; 
var food; 

const xCanvas = 600;
const yCanvas = 600;
const snakeSize = 10;
var scl = 20;


const xStart = Math.round((Math.random()*Math.round(xCanvas/scl)));
const yStart = Math.round((Math.random()*yCanvas));

function setup() {
    
    createCanvas(xCanvas, yCanvas);
    snakey = new Snake();
    pickLocation();
    frameRate(8);
    
}

function CreateBackground() {
    let i = 0;
    for (var x = 0; x < xCanvas; x += scl){
        for (var y = 0; y < yCanvas; y += scl){
            strokeWeight(0)
            if (i%2 > 0){
                fill("#b0d466");  
                rect(x, y, scl, scl);
            } else {
                fill("#9bba5a");
                rect(x, y, scl, scl);
            }
        i++;    
        }
    i++    
    }

}



function draw(){
    background("#9bba5a");
    CreateBackground();
    snakey.endgame();
    snakey.update();
    snakey.show();
    
    if (snakey.eat(food)){
        pickLocation();
    }
    fill("#ff0800");
    rect(food.x, food.y,scl, scl, 17, 17, 8, 8);  
    
    
    // Draw a rectangle with rounded corners having the following radii:
// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
//rect(30, 20, 55, 55, 20, 15, 10, 5);
}


function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

//trenger å fikse slik at når man bare har hodet så kan den gå bakover
function keyPressed(){ 
   if (keyCode === UP_ARROW && snakey.ySpeed === 1){ //tidliger retning ned
        snakey.movement(0, 1);
    } else if (keyCode === UP_ARROW && snakey.ySpeed != 1){ //tidligere retning ikke ned
        snakey.movement(0, -1);
    } else if (keyCode === DOWN_ARROW && snakey.ySpeed === -1){ //tidligere retning opp
        snakey.movement(0, -1);
    } else if (keyCode === DOWN_ARROW && snakey.ySpeed != -1){ //tidligere retning ikke opp
        snakey.movement(0, 1);
    } else if (keyCode === RIGHT_ARROW && snakey.xSpeed === -1){ //tidligere retning til venstre
        snakey.movement(-1, 0);
    } else if (keyCode === RIGHT_ARROW && snakey.xSpeed != -1 ){ //tidlgiere retning ikke til venstre
        snakey.movement(1, 0);
    } else if (keyCode === LEFT_ARROW && snakey.xSpeed === 1){ // tidgliere retning til høyre
        snakey.movement(1, 0);     
    } else if (keyCode === LEFT_ARROW && snakey.xSpeed != 1){
        //tidligere retning ikke til høyre
        snakey.movement(-1, 0);     
    }
}














