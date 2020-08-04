class StartScene extends Phaser.Scene {
    constructor() {
        super ({ key: "StartScene" });
    }

    preload(){
        this.load.image("ball", ball); 
        this.load.image("platform", plat)
    }

    create(){
        gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
        const StartX = (Math.random()*0.85 + 0.15)*ScreenHeight;
        const StartY = (Math.random()*0.5 + 0.15)*ScreenWidth;
        gameState.ball = this.add.sprite(ScreenWidth*0.45, ScreenHeight*0.5, "ball").setScale(0.10);
            
        gameState.platform = this.physics.add.sprite(ScreenHeight*0.75, ScreenHeight*0.75, "platform").setScale(0.33);
        gameState.platform.body.allowGravity = false;
        gameState.platform.body.immovable = true;
        

        //gameState.ball.setCollideWorldBounds(true);
        gameState.platform.setCollideWorldBounds(true);

        /* Spillinstruksjoner */
        const textStyle = {fill: '#000000', fontSize: '25px'};
        this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        this.add.text(100, 150, "Don't let the ball fall. \nMove by using the left (<-) and right (->) keys.", textStyle);
        //this.add.text(100, 230, 'Click to start the game.', textStyle).setFontStyle('bold');

        this.time.addEvent({
            delay: 1000,
            callback: () => { this.fadeText(); },
            loop: true
        });

        /* Hopp til neste scene */
        this.input.on('pointerup', () => {
            console.log("Clicked");
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });

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



