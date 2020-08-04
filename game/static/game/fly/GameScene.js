class GameScene extends Phaser.Scene {

    constructor() {
		super({ key: 'GameScene' });
    }

    /* Variabler */

    
    preload(){
        
        this.load.image('plane', plane);
        this.load.image("energy", energy);
     }

     create() {
         score = 0;
         //gameState.scoreText = this.add.text(ScreenWidth/2 - 110,ScreenHeight/2-150, score, { fill: '#FFFFFF', fontSize: '300px', setFontStyle: "Bernard MT" });

        gameState.state = false;

        
        const textStyle = {fill: '#000000', fontSize: '25px'};
        let textWel = this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        let textint = this.add.text(100, 150, "Don't let the fish touch the tubes. \nMake the fish swim by pressing space.", textStyle);
        let starttext = this.add.text(100, 230, 'Click to start the game.', textStyle).setFontStyle('bold');

        this.physics.pause();
        

        this.input.on('pointerup', () => {
            this.physics.resume();
            textWel.destroy();
            textint.destroy();
            starttext.destroy();
            gameState.state = true;

        });

        gameState.plane = this.physics.add.sprite(screen.width*0.125,screen.height*0.35, "plane").setScale(.10);
        
         
        const power = this.physics.add.group();

        function powerGen () {
            const xCoord = Math.random() * ScreenWidth;
            const yCoord = Math.random() * ScreenHeight;
            power.create(xCoord, yCoord, 'energy').setScale(0.07);
        }
        
        const powerGenLoop = this.time.addEvent({
            delay: 1000,
            callback: powerGen,
            callbackScope: this,
            loop: true,
          });
        
        
      
       
      
        

        /*this.physics.add.collider(gameState.pipes, gameState.fish, () =>{
          pipeGenLoop.destroy();
          this.physics.pause();
           const textStyle = {fill: '#000000', fontSize: '25px'};
           this.add.text(100, 100, 'GAME OVER! ', { fill: '#000000', fontSize: '35px' });
           this.add.text(100, 150, "Nice try! Your score was " + score + "\nMake the fish swim by pressing space.", textStyle);

          //this.add.text(ScreenWidth/2, ScreenHeight/2, 'Game Over', { fontSize: '15px', fill: '#000000' });
          this.time.addEvent({
            delay: 1000,
            callback: () => { this.fadeText(); },
            loop: true
        });

        /* Hopp til neste scene */ /*
        this.input.on('pointerup', () => {
            this.scene.stop('GameScene');
            this.scene.start('GameScene');

            
        });
          
        });*/
        
        
        

       
        
      
        
        
        
        gameState.plane.setCollideWorldBounds(true);
        
        
      
      
      
        gameState.cursors = this.input.keyboard.createCursorKeys();
        
      }


     update() {
        
      
        
        if (gameState.cursors.up.isDown){
            gameState.plane.setScale(-0.1)
            this.setMovemnetY(-5);
        } else if (gameState.cursors.down.isDown){
            this.setMovemnetY(5);
        } else if (gameState.cursors.left.isDown){
            this.setMovemnetX(-5);
        } else if (gameState.cursors.right.isDown){
            this.setMovemnetX(5);
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

