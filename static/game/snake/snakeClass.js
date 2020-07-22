function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.update = function(){
        
        for (var i = 0; i < this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = createVector(this.x, this.y);
        
        
        this.x = this.x + this.xSpeed*scl;
        this.y = this.y + this.ySpeed*scl;
        
        //this.x = constrain(this.x, 0, width-scl);
        //this.y = constrain(this.y, 0 ,height -scl); //dette lager vegger
        
        if (this.x === xCanvas){ 
            this.x = 0;
        } else if (this.x === -scl){
            this.x = xCanvas -scl;
        } else if (this.y === -scl){
            this.y = yCanvas -scl
        } else if (this.y === yCanvas){
            this.y = 0;
        }
        

    }
    
    this.show = function(){
        fill("#a1f0ec");
        for (var i = 0; i < this.total; i++){
            stroke(0);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill("#c4fffc")
        rect(this.x, this.y, scl, scl);
        
    }
    
    this.movement = function(x, y){
        this.xSpeed = x;
        this.ySpeed = y;
    }
    
    this.eat = function(pos){
        var dis = dist(this.x, this.y, pos.x, pos.y);
        if (dis < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    }
    
    this.endgame = function () {
        for (var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var dis = dist(this.x, this.y, pos.x, pos.y);
            if (dis < 1){
                this.total = 0;
                this.tail = [];
                
            }
         
        }
    }
}
