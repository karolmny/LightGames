class GameScene extends Phaser.Scene {

    constructor() {
		super({ key: 'GameScene' });
    }

    /* Variabler */

    
    preload(){
        
        this.load.image('plane', plane);
        this.load.image("energy", energy);
        this.load.image("wall", wall);
     }

     create() {
         gameState.speed = 3;
         gameState.time = 800;
         //gameState.scoreText = this.add.text(ScreenWidth/2 - 110,ScreenHeight/2-150, score, { fill: '#FFFFFF', fontSize: '300px', setFontStyle: "Bernard MT" });

        gameState.state = false;

        
        const textStyle = {fill: '#000000', fontSize: '25px'};
        let textWel = this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        let textint = this.add.text(100, 150, "Try to catch all the energybars before they move outside the screen. \n", textStyle);
        let textkey = this.add.text(100, 175, "Move the plane by using the ↑, ↓, ← and → keys.", textStyle);
        let starttext = this.add.text(100, 230, 'Click to start the game.', textStyle).setFontStyle('bold');

        this.physics.pause();
        

        this.input.on('pointerup', () => {
            this.physics.resume();
            textWel.destroy();
            textint.destroy();
            textkey.destroy();
            starttext.destroy();
            gameState.state = true;

        });

        gameState.wall = this.physics.add.sprite(-60,screen.height*0.35, "wall");
        gameState.plane = this.physics.add.sprite(screen.width*0.125,screen.height*0.35, "plane").setScale(.10);
        
        gameState.wall.body.immovable = true;
        gameState.wall.body.moves = false;
        
         
        gameState.power = this.physics.add.group();

        function powerGen () {
            if (gameState.state){
            const xCoord = Math.random() * ScreenWidth*0.7;
            const yCoord = Math.random() * ScreenHeight;
            gameState.power.create(ScreenWidth -xCoord, yCoord, 'energy').setScale(0.07);
            console.log("gameState.power.body.x")
            gameState.power.setVelocityX(-200);
        }}
        
        const powerGenLoop = this.time.addEvent({
            delay: gameState.time,
            callback: powerGen,
            callbackScope: this,
            loop: true,
          });
        

         
        
        this.physics.add.collider(gameState.plane, gameState.power, function(pow, eng) {
            eng.destroy();
            gameState.speed++;
            gameState.time -= 50;
        });

        
          this.physics.add.collider(gameState.wall, gameState.power, () => {
              powerGenLoop.destroy();
              gameState.power.setVelocityX(0);
              gameState.plane.y += 0;  
              gameState.plane.x += 0; 
              gameState.state = false; 
              console.log("game over")
              let score = gameState.speed - 3;
            
              
              const textStyle = {fill: '#000000', fontSize: '25px'};
              this.add.text(100, 100, 'GAME OVER! ', { fill: '#000000', fontSize: '35px' });
              this.add.text(100, 150, "Nice try! Your score was " + score + "\n Move the plane by using the ↑, ↓, ← and → keys.", textStyle);
              let blinkingText = this.add.text(100, 230, 'Click to restart the game.', {fill: '#000000', fontSize: '25px'}).setFontStyle('bold');
              

            this.input.on('pointerup', () => {
                this.scene.stop('GameScene');
                this.scene.start('GameScene');
        
                    
            });

              //pow.destroy();
            //eng.destroy();
            //console.log("hello")
          });
        

          
        
       
        
      
        
        
        
        gameState.plane.setCollideWorldBounds(true);
        
      
      
        gameState.cursors = this.input.keyboard.createCursorKeys();

        
      }


     update() {
        if (gameState.state){

        
        if (gameState.cursors.right.isDown && gameState.cursors.down.isDown){
            this.setMovemnetX(gameState.speed );
            this.setMovemnetY(gameState.speed );
            gameState.plane.angle = 45;
        } else if (gameState.cursors.right.isDown && gameState.cursors.up.isDown){
            this.setMovemnetX(gameState.speed );
            this.setMovemnetY(-gameState.speed );
            gameState.plane.angle = -45;
        } else if ( gameState.cursors.left.isDown && gameState.cursors.down.isDown){
            this.setMovemnetX(-gameState.speed );
            this.setMovemnetY(gameState.speed );
            gameState.plane.angle = 135;
        } else if (gameState.cursors.left.isDown && gameState.cursors.up.isDown){
            this.setMovemnetX(-gameState.speed );
            this.setMovemnetY(-gameState.speed );
            gameState.plane.angle = -135;
        } else if (gameState.cursors.up.isDown){
            gameState.plane.angle = -90;
            this.setMovemnetY(-gameState.speed );
        } else if (gameState.cursors.down.isDown){
            gameState.plane.angle = 90;
            this.setMovemnetY(gameState.speed );
        } else if (gameState.cursors.left.isDown){
            gameState.plane.angle = -180;
            this.setMovemnetX(-gameState.speed );
        } else if (gameState.cursors.right.isDown){
            gameState.plane.angle = 0;
            this.setMovemnetX(gameState.speed );
        } 
    }
      
          
      }

      fadeText(){
        let blinkingText = this.add.text(100, 230, 'Click to restart the game.', {fill: '#000000', fontSize: '25px'}).setFontStyle('bold');
        this.tweens.add({
            targets: blinkingText,
            alpha: 0,
            duration: 2500,
            ease: 'Linear'
        }, this);
     
      }

      setMovemnetX(x){
        gameState.plane.x += x;
      }
      setMovemnetY(y){
        gameState.plane.y += y;  
      }

      

      

      

}

