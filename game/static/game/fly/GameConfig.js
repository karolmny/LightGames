const gameState = { score: 0};

const ScreenWidth = screen.width*0.8;
const ScreenHeight = screen.height*0.7;
let score = 0;


const config = {
    type: Phaser.AUTO,
    width: ScreenWidth, 
    height: ScreenHeight,
    parent: 'gameDisplay',
    backgroundColor: "#b9eaff", 
    physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0},
                enableBody: true,
            }
        },
    scene: [ GameScene]
};

const game = new Phaser.Game(config);