class GameScene extends Phaser.Scene {

    constructor() {
		super({ key: 'GameScene' });
    }

    /* Variabler */

    ballSize = 30;

    preload(){
        
            this.load.image("ball", ball); 
            this.load.image("platform", plat)
         
     }

    create ()
{
    gameState.speed =300;
    
    gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
    //const StartX = (Math.random()*0.85 + 0.15)*ScreenHeight;
    //const StartY = (Math.random()*0.5 + 0.15)*ScreenWidth;
    gameState.ball = this.physics.add.sprite(ScreenWidth*0.45, ScreenHeight*0.5, "ball").setScale(0.10);
    gameState.ball.setVelocityY(gameState.speed);
    gameState.ballSize = 30;
    //gameState.test = this.add.sprite(29, 29, "ball").setScale(0.10);
    this.tweens.add({  //Ønsker å få ballen til å rotere og ikke bare "vugge"

        targets: gameState.ball,
        angle: 90,
        yoyo: true,
        repeat: -1,
        //ease: 'Sine.easeInOut' //ender her

    });

    gameState.ball.angle = 0;

    gameState.platform = this.physics.add.sprite(ScreenHeight*0.75, ScreenHeight*0.75, "platform").setScale(0.33);
    gameState.platform.body.allowGravity = false;
    gameState.platform.body.immovable = true;
    
    
    
    gameState.ball.setCollideWorldBounds(true);
    gameState.platform.setCollideWorldBounds(true);
    
    

    
    this.physics.add.collider(gameState.ball, gameState.platform, () =>{
        gameState.speed += 25;
        console.log(gameState.speed);
        gameState.score +=1;
        gameState.scoreText.setText(`Score: ${gameState.score}`);
        
        gameState.ball.setVelocityY(-300);
        
        if (gameState.ball.body.velocity.x > 0){ //det vil si at den beveger seg mot høyre
            gameState.ball.setVelocityX(300);
        } else if (gameState.ball.body.velocity.x < 100){
            gameState.ball.setVelocityX(-300);
        } else if (Math.random() > 0.5){
            gameState.ball.setVelocityX(300);
        } else if (!(Math.random() > 0.5)){
            gameState.ball.setVelocityX(-300);
        }
    
    });
    
    
    gameState.cursors = this.input.keyboard.createCursorKeys();

}

    update() {
        if (gameState.cursors.left.isDown && !gameState.cursors.right.isDown){
            gameState.platform.x -= 10;
        } else if (gameState.cursors.right.isDown && !gameState.cursors.left.isDown) {
            gameState.platform.x += 10;
        } else if (gameState.cursors.space.isDown) {
            console.log("begge er nede");
            gameState.platform.x += 0;
        }
        
    
        if (gameState.ball.y > gameState.platform.y){ //må sjekke om det er høyere siden den starter på 0
            //gameState.scoreText = this.add.text(ScreenWidth/2, ScreenHeight/2, "GAME OVER", { fontSize: '30px', fill: '#000000' });
            gameState.ball.setCollideWorldBounds(false);
            //const textStyle = {fill: '#000000', fontSize: '25px'};
            //this.add.text(100, 100, 'GAME OVER! ', { fill: '#000000', fontSize: '35px' });
            //this.add.text(100, 150, "Don't let the ball fall. \nMove by using the left (<-) and right (->) keys.", textStyle);
            if (gameState.ball.y > ScreenHeight){
                this.scene.stop('GameScene');
                this.scene.start('EndScene');
            }
            
            //console.log(playername + " your score is " + gamestate.score);
            //sendData("juggle", playername, gamestate.score)
            
            
        }
        if (gameState.ball.x < ballSize){ //helt til venstre
            gameState.ball.setVelocityX(gameState.speed);
        }
        if (gameState.ball.x > ScreenWidth - ballSize){ //helt til venstre
            gameState.ball.setVelocityX(-gameState.speed);
        }
        if (gameState.ball.y < ballSize){
            gameState.ball.setVelocityY(gameState.speed);
        }

        //gameState.ball.angle +=1;
    }

}
