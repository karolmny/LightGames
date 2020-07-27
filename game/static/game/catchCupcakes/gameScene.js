
class GameScene extends Phaser.Scene {
	constructor(){
		super({ key: 'GameScene' })
	}
    
    //Variabler
    score1 = 0;
    score2 = 0;
    timer = 3*1000;

    scoreText1;
    scoreText2;

    timerText;
    gameoverText;
    restartText;
    

    preload() {
        this.load.image('player1', one);
        this.load.image('player2', two);
        this.load.image('food', food);
    }


    create() {
        //Spiller 1
        gameState.player1 = this.physics.add.sprite(Phaser.Math.RND.between(50, 550), Phaser.Math.RND.between(50, 550), 'player1').setScale(0.05);
        gameState.player1.angle = 0;
        gameState.player1.setCollideWorldBounds(true);
        
        //Spiller 2
        gameState.player2 = this.physics.add.sprite(Phaser.Math.RND.between(50, 550), Phaser.Math.RND.between(50, 550), 'player2').setScale(0.05);
        gameState.player2.angle = 0;
        gameState.player2.setCollideWorldBounds(true);
        this.physics.add.collider(gameState.player1, gameState.player2);

        //Food
        gameState.food = this.physics.add.sprite(Phaser.Math.RND.between(0, 600), Phaser.Math.RND.between(20, 600), 'food').setScale(0.2);
        gameState.food.setCollideWorldBounds(true);
        
        //Tastatur
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('A,W,S,D');

        //Tekst
        this.scoreText1 = this.add.text(16, 16, 'SPILLER 1: ', {color: 'black'});
        this.scoreText2 = this.add.text(460, 16, 'SPILLER 2: ', {color: 'black'});

        this.timerText = this.add.text(240, 16, 'TID IGJEN: ');
    }


    update() {
        //Spiller 1
        gameState.player1.angle += 5;
        if(gameState.cursors.down.isDown) {
            gameState.player1.setVelocity(0, 120);
        }
        else if(gameState.cursors.up.isDown) {
            gameState.player1.setVelocity(0, -120);
        }  
        else if(gameState.cursors.right.isDown) {
            gameState.player1.setVelocity(120, 0);   
        } 
        else if(gameState.cursors.left.isDown) {
            gameState.player1.setVelocity(-120, 0);
        }
        


        //Spiller 2
        gameState.player2.angle +=5;
        if(gameState.keys.S.isDown) {
            gameState.player2.setVelocity(0, 120);
        }
        else if(gameState.keys.W.isDown) {
            gameState.player2.setVelocity(0, -120);
        }  
        else if(gameState.keys.D.isDown) {
            gameState.player2.setVelocity(120, 0);   
        } 
        else if(gameState.keys.A.isDown) {
            gameState.player2.setVelocity(-120, 0);
        }
        

        //Timer & diverse greier
        this.timer--;
        let seconds = this.timer/100;
        this.timerText.setText('TID IGJEN: ' + seconds + 's');
        if(this.timer < 0) {
                this.physics.pause();
                this.timerText.setText('TID IGJEN: 0s')
                this.gameoverText = this.add.text(180, 200, 'Game Over', { fontSize: '40px', fill: '#000000' });
                if(this.score1>this.score2) {
                    this.add.text(175, 270, 'Gratulerer spiller 1', { fontSize: '20px', fill: '#000000' });
                }
                else if(this.score1<this.score2) {
                    this.add.text(175, 270, 'Gratulerer spiller 2', { fontSize: '20px', fill: '#000000' });

                }
                else if(this.score1 === this.score2){
                    this.add.text(175, 270, 'Det ble uavgjort', { fontSize: '20px', fill: '#000000' });
                }
                this.restartText = this.add.text(75, 300, 'Trykk på skjermen for å prøve på nytt', { fontSize: '20px', fill: '#636363' });
                this.input.on('pointerup', () => {
                    this.score1=0;
                    this.score2=0;
                    this.timer=3*1000;
                    this.scene.restart();
                    });

            }

        else if (this.physics.overlap(gameState.player1, gameState.food) || this.physics.overlap(gameState.player2, gameState.food)) {
            if(this.physics.overlap(gameState.player1, gameState.food)) {this.score1+=10;}
            if(this.physics.overlap(gameState.player2, gameState.food)) {this.score2+=10;}
            gameState.food.visible = false;
            gameState.food = this.physics.add.sprite(Phaser.Math.RND.between(10, 590), Phaser.Math.RND.between(30, 590), 'food').setScale(0.2);
            gameState.food = this.physics.add.sprite(Phaser.Math.RND.between(10, 590), Phaser.Math.RND.between(30, 590), 'food').setScale(0.2);            
        }
        else {
            this.scoreText1.setText('SPILLER 1: ' + this.score1);
            this.scoreText2.setText('SPILLER 2: ' + this.score2);
        }    
    }
}
