class StartScene extends Phaser.Scene {
    constructor() {
        super ({ key: "StartScene" });
    }

    preload(){
        this.load.image('fishy', fish);
        this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
        this.load.image("pipet", pipet);
        this.load.image("pipeb", pipeb);
        this.load.image("bug1", bird);
    }

    create(){

        //gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
        gameState.fish = this.physics.add.sprite(screen.width*0.125,screen.height*0.35, "fishy").setScale(.10);

        
        const platforms = this.physics.add.staticGroup();

        const platPosition = [ {x: 226, y: 630}, {x: 676, y: 630}, {x: 1126, y: 630} ];
        platPosition.forEach(plat => {
            platforms.create(plat.x, plat.y, "platform");
        })

        gameState.pipes= this.physics.add.group({
            //immovable: true,
            allowGravity: false
          });

          this.physics.pause();


          

          gameState.fish.setCollideWorldBounds(true);
  
          this.physics.add.collider(gameState.fish, platforms);
        


        /* Spillinstruksjoner */
        const textStyle = {fill: '#000000', fontSize: '25px'};
        this.add.text(100, 100, 'Welcome!', { fill: '#000000', fontSize: '35px' });
        this.add.text(100, 150, "Don't let the fish touch the tubes. \nMake the fish swim by pressing space.", textStyle);
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
