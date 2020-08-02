const gameState = { score: 0};

const ScreenWidth = screen.width*0.8;
const ScreenHeight = screen.height*0.7;
let score = -4;


const config = {
    type: Phaser.AUTO,
    width: ScreenWidth, 
    height: ScreenHeight,
    parent: 'gameDisplay',
    backgroundColor: "#0A99ff",
    physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300},
                enableBody: true,
            }
        },
    scene: [ GameScene]
};

const game = new Phaser.Game(config);