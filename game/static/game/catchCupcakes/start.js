
class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}
  
    create() {
        this.add.text(100, 200, 'Trykk på skjermen for å starte!', { fontSize: '20px', fill: '#000000' });
        this.add.text(200,250, 'HOW TO SPILLE');
        this.add.text(100, 270, 'Prøv å få tak i så mye mat som mulig \nNoen av dem er falske og ikke spisbare \nUnngå kantene for da avsluttes spillet \nOm å gjøre å samle mest poeng før tiden går ut');
        this.add.text(150, 350, 'spiller 1 bruker piltastene \nspiller 2 bruker WASD');
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
    
        })
    }
}