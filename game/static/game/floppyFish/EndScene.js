class EndScene extends Phaser.Scene {

    constructor() {
		super({ key: 'EndScene' });
    }

    /* Variabler */

    
    preload(){
        
        this.load.image('fishy', fish);
        this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
        this.load.image("pipet", pipet);
        this.load.image("pipeb", pipeb);
        this.load.image("bug1", bird);
     }

     create() {
         score = -1;

        gameState.state = false;

        gameState.pipes= this.physics.add.group({
            //immovable: true,
            allowGravity: false
          });
         
        const textStyle = {fill: '#000000', fontSize: '25px'};
        let textWel = this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        let textint = this.add.text(100, 150, "Don't let the fish touch the tubes. \nMake the fish swim by pressing space.", textStyle);
        let starttext = this.add.text(100, 230, 'Click to start the game.', textStyle).setFontStyle('bold');

        this.physics.pause();
        const platforms = this.physics.add.staticGroup();
      
        const platPosition = [ {x: 226, y: 630}, {x: 676, y: 630}, {x: 1126, y: 630} ];
        platPosition.forEach(plat => {
          platforms.create(plat.x, plat.y, "platform");
        }) 

        

          const genPipe = (ypos, xpos) => {
                console.log("generatin pipe");
                 const space = 125;
                const top = xpos;
                const StartX = ypos;
                //const StartX = Math.random()*ScreenWidth*0.7 + ScreenWidth*0.25;
                //console.log(StartX)
                let bottom; 
                if (top > 0){
                    bottom = top + 255 + space + 255;
                    //console.log(bottom);
                } else {
                    bottom = 255 - top + space + 255;
                } 
                gameState.pipes.create(StartX, top, 'pipet');
                gameState.pipes.create(StartX, bottom, 'pipeb');
                gameState.pipes.setVelocityX(-200);

        }
        genPipe(ScreenWidth-300, Math.random()* (375) -175);
        genPipe(ScreenWidth-600, -120);
        

        this.input.on('pointerup', () => {
            this.physics.resume();
            textWel.destroy();
            textint.destroy();
            starttext.destroy();
            gameState.state = true;
            
            
            

        });

        

        

        console.log("score: " + score)
        gameState.scoreText = this.add.text(16, 16, 'Score: ' + gameState.score, { fontSize: '15px', fill: '#000000' })
        gameState.fish = this.physics.add.sprite(screen.width*0.125,screen.height*0.35, "fishy").setScale(.10);
      
         
        


        
        
      
         //gameState.fishTest = this.physics.add.sprite(0,200, "pipet")
         //gameState.fishTest.setGravity(0);
         
        
      
        
        const generatePipes = () =>{
            if (gameState.state){
                score++;
                const space = 125;
                const top = Math.random()* (375) -175;
                const StartX = ScreenWidth;
                //const StartX = Math.random()*ScreenWidth*0.7 + ScreenWidth*0.25;
                //console.log(StartX)
                let bottom; 
                if (top > 0){
                    bottom = top + 255 + space + 255;
                    //console.log(bottom);
                } else {
                    bottom = 255 - top + space + 255;
                } 
                gameState.pipes.create(StartX, top, 'pipet');
                gameState.pipes.create(StartX, bottom, 'pipeb');
                gameState.pipes.setVelocityX(-200);
            
        }}
      
      
        const pipeGenLoop = this.time.addEvent({
          delay: 1500,
          callback: generatePipes,
          callbackScope: this,
          loop: true
          
        })  
      
        //gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' });
      
        this.physics.add.collider(gameState.pipes, gameState.fish, () =>{
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

        /* Hopp til neste scene */ 
        this.input.on('pointerup', () => {
            console.log("Clicked");
            
        });

          
        });
        
        gameState.fish.setCollideWorldBounds(true);
        
        this.physics.add.collider(gameState.fish, platforms);
      
      
      
        gameState.cursors = this.input.keyboard.createCursorKeys();
      }


     update() {
        gameState.fish.setVelocityX(0);
      
        
        if(gameState.cursors.space.isDown) {
            //gameState.fish.y += 5;
            gameState.fish.setVelocityY(-150);
          
          }/*else if (gameState.cursors.up.isDown) {
          gameState.fishTest.y -= 5;
          } else if (gameState.cursors.down.isDown) {
          gameState.fishTest.y += 5; 
        } */
        //pipes.x += 1;
        //pipes.setVelocityY(100);
        //gameState.pipes.setVelocityY(100);
        //gameState.fishTest.setVelocityY(110);

    
      
          
      }

      fadeText(){
        let blinkingText = this.add.text(100, 230, 'Click to start the game.', {fill: '#000000', fontSize: '25px'}).setFontStyle('bold');
        this.tweens.add({
            targets: blinkingText,
            alpha: 0,
            duration: 2500,
            ease: 'Linear'
        }, this);
     
      }

      

}