const gameState = {};

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    backgroundColor: 0xbbb5a4,
    physics: {
        default: 'arcade',
        enableBody: true
    },
    scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);


/*
FORBEDRINGER SOM KAN GJØRES
 * bytte ut figurene og tydeliggjøre spiller 1 og 2
 * endre på tekstfarge
 * legge til et bilde på starten??
*/