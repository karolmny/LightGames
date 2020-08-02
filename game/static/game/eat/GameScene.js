class GameScene extends Phaser.Scene {
    
    constructor() {
		super({ key: 'GameScene' });
    }

    /* Variabler */
    screenWidth = game.width;
    screenHeight = game.height;
    timer = gameState.secs*100;
    score = gameState.score;
    monsters;


    preload() {
        this.load.image('star', star);
        this.load.image('flower', flower);
        this.load.image('blood', blood);
    }


    create() {
        /* Spiller */
        gameState.player = this.physics.add.sprite(screenWidth/2, screenHeight, 'flower').setScale(0.20);
        gameState.player.setCollideWorldBounds(true);
    
        /* Monster */
        gameState.monster = this.physics.add.group({
            key: 'star',
            repeat: 4,
            setXY: { x: 50, y: 0, stepX: 200 }
        });
        this.monsters = gameState.monster.getChildren();
    
        Phaser.Actions.ScaleXY(this.monsters, -0.8, -0.8);
    
        this.time.addEvent({
            delay: 100,
            callback: () => { this.moveMonster(); },
            loop: true
        });
        
    
        /* Tastatur */
        gameState.cursors = this.input.keyboard.createCursorKeys();
    
        /* Spilltekst */
        gameState.text = this.add.text(0, screenHeight-50, '', { fontSize: '32px', fill: '#000000', backgroundColor: 'white' });
        gameState.timerText = this.add.text(screenWidth-150, screenHeight-50, 'Time: 0', { fontSize: '32px', fill: '#000000', backgroundColor: 'white', fontStyle: 'bold' });
        gameState.endText = this.add.text(screenWidth/2-150, screenHeight/2-50, '', { fontSize: '60px', fill: '#000000', backgroundColor: 'white', align: 'center' });
    }

    update() {
        this.movePlayer();
        //console.log(this.monsters.length);
    
        for (let i=0; i<this.monsters.length; i++) {
            if (this.physics.overlap(gameState.player, this.monsters[i])) {
                //console.log(this.monsters[i].x);
                //console.log(this.monsters[i].y);

                gameState.blood = this.physics.add.image(this.monsters[i].x, this.monsters[i].y, 'blood').setScale(0.35);
                
                this.tweens.add({
                    targets: gameState.blood,
                    alpha: 0,
                    duration: 300,
                    ease: 'Linear'
                }, this);

                //this.monsters[i].destroy(true);
                //this.monsters[i].setActive(false).setVisible(false);
                this.monsters[i].y -= 50;

                this.score++;
            }
            //this.monsters[i].setActive(true).setVisible(true);
        }
        this.setGameText();
        this.timer--;
        

        /* Reset the scene during the game */
        /*
        this.input.on('pointerup', () => {
            console.log('reset');
            this.scene.restart();
        });
        */

        //console.log('testing');
    }
    

    movePlayer() {;
        if (gameState.cursors.left.isDown) {
            gameState.player.x -= 3;
        }
        else if (gameState.cursors.right.isDown) {
            gameState.player.x += 3;
        }
    }
    

    moveMonster() {
        const upOrDown = () => {if (Math.random() < 0.5) {return -1} return 1};
        
        const randPos = Math.floor(Math.random()*this.monsters.length);
        const randY =  Math.floor(Math.random()*(screenHeight-100));
    
        this.monsters[randPos].y = randY*upOrDown();
        this.monstersOffScreen(this.monsters);
    
        //console.log(upOrDown());
        //console.log(randPos);
    }
    
    
    monstersOffScreen(object) {
        for (let i=0; i<object.length; i++) {
            if (object[i].y < 0) {
                object[i].y = 0;
            }
        }
    }
    

    setGameText() {
        if (this.timer <= 0) {
            gameState.endText.setShadow(5, 5, 'black', 10);
            gameState.endText.setText("TIME'S UP!");
            this.stopGame();
        }
        gameState.text.setText('Stars eaten: '+ this.score);
        gameState.timerText.setText('Time: ' + Math.floor(this.timer/100));
    }


    stopGame() {
        console.log('stop');
        this.scene.pause();

        /* High score-data */
        const name = document.getElementById('name');
        const gameName = document.getElementById('gameName');
        getScore(gameName.innerHTML, name.value, this.score);
    }
}