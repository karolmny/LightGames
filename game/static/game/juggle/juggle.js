//Juggle JS
const gameState = {
    score: 0 }

const ScreenWidth = screen.width*0.75;
const ScreenHeight = screen.height*0.75;


var config = {
        type: Phaser.AUTO,
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: "#f0f3BD",
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 100},
                enableBody: true,
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        },
    };



const ballSize = 30;

function preload ()
{
    this.load.image("ball", "assets/ball.png"); 
    this.load.image("platform", "assets/platform1.png")
 }

function create ()
{
    
    gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
    const StartX = (Math.random()*0.85 + 0.15)*ScreenHeight;
    const StartY = (Math.random()*0.5 + 0.15)*ScreenWidth;
    gameState.ball = this.physics.add.sprite(StartX, ScreenHeight*0.5, "ball").setScale(0.10);
    
    //gameState.test = this.add.sprite(29, 29, "ball").setScale(0.10);
    this.tweens.add({  //Ønsker å få ballen til å rotere og ikke bare "vugge"

        targets: gameState.ball,
        angle: 90,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut' //ender her

    });

    gameState.platform = this.physics.add.sprite(ScreenHeight*0.75, ScreenHeight*0.75, "platform").setScale(0.33);
    gameState.platform.body.allowGravity = false;
    gameState.platform.body.immovable = true;
    
    
    
    gameState.ball.setCollideWorldBounds(true);
    gameState.platform.setCollideWorldBounds(true);
    
    

    
    this.physics.add.collider(gameState.ball, gameState.platform, () =>{
        gameState.score += 1;
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

function update ()
{
    if (gameState.cursors.left.isDown && !gameState.cursors.right.isDown){
        gameState.platform.x -= 5;
    } else if (gameState.cursors.right.isDown && !gameState.cursors.left.isDown) {
        gameState.platform.x += 5;
    } else if (gameState.cursors.space.isDown) {
        console.log("begge er nede");
        gameState.platform.x += 0;
    }
    
    if (gameState.ball.y > gameState.platform.y){ //må sjekke om det er høyere siden den starter på 0
        gameState.scoreText = this.add.text(ScreenWidth/2, ScreenHeight/2, "GAME OVER", { fontSize: '30px', fill: '#000000' });
        gameState.ball.setCollideWorldBounds(false);
        
    }
    if (gameState.ball.x < ballSize){ //helt til venstre
        gameState.ball.setVelocityX(300);
    }
    if (gameState.ball.x > ScreenWidth - ballSize){ //helt til venstre
        gameState.ball.setVelocityX(-300);
    }
    if (gameState.ball.y < ballSize){
        gameState.ball.setVelocityY(90);
    }
     
}

var game = new Phaser.Game(config);