class StartScene extends Phaser.Scene {
    
    constructor() {
        super({ key: 'StartScene' });
    }


    preload() {
        this.load.image('star', star);
        this.load.image('flower', flower);
    }

    create() {
        this.physics.add.sprite(screenWidth/2+200, screenHeight, 'flower').setScale(0.20).setCollideWorldBounds(true);

        Phaser.Actions.ScaleXY(this.physics.add.group({
            key: 'star',
            repeat: 4,
            setXY: { x: 50, y: 0, stepX: 200 }
        }).getChildren(), -0.8, -0.8);

        /* Spillinstruksjoner */
        const textStyle = {fill: '#000000', fontSize: '25px'};
        this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        this.add.text(100, 150, 'Try to eat as many stars as fast as possible. \nMove by using the left (<-) and right (->) keys.', textStyle);
        this.add.text(100, 200, 'Please add name, if you want to join the scoreboard.', textStyle);
        
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

    fadeText() {
        let blinkingText = this.add.text(100, 280, 'Click to start the game.', {fill: '#000000', fontSize: '25px'}).setFontStyle('bold');
        this.tweens.add({
            targets: blinkingText,
            alpha: 0,
            duration: 2500,
            ease: 'Linear'
        }, this);
    }        
}