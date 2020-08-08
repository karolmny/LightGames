const gameState = { score: 0};

const ScreenWidth = screen.width*0.75;
const ScreenHeight = screen.height*0.75;
const ballSize = 30;
//let  playername = document.getElementById("name").value; 

const config = {
    type: Phaser.AUTO,
    width: ScreenWidth, 
    height: ScreenHeight,
    parent: 'gameDisplay',
    backgroundColor: "#f0f3BD",
    physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0},
                enableBody: true,
            }
        },
    scene: [ StartScene, GameScene, EndScene]
};

const game = new Phaser.Game(config);