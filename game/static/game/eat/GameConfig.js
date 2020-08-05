const gameState = { score: 0, secs: 10 };

const screenWidth = 900;
const screenHeight = 500;

const config = {
    type: Phaser.AUTO,
    width: screenWidth,
    height: screenHeight,
    parent: 'gameDisplay',
    backgroundColor: "#DEDEDE",
    physics: { default: 'arcade' },
    scene: [ StartScene, GameScene ]
};

const game = new Phaser.Game(config);

/*
TODO Retarte spillet etter slutt, ved klikk
TODO Animere spiller-figur, slik at den spiser objektene
TODO Fikse slutt-scene
OK Blinkende tekst ved "start spillet"-tekst
OK Legge til effekt når monster blir spist
*/