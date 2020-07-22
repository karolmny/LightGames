const gameState = { score: 0 }


const ScreenHeight = screen.height*0.7;
const ScreenWidth = screen.width*0.8;

const config = {
	type: Phaser.AUTO,
	width: ScreenWidth,
	height: ScreenHeight,
  backgroundColor: "#0A99ff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300},
      enableBody: true,
    }
  },
	scene: {
    preload,
    create,
    update,
	}
}

function preload() {
  
  this.load.image('fishy', "assets/fish.png");
  this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
  this.load.image("pipet", "assets/pipey.png");
  this.load.image("pipeb", "assets/pipeyb.png");
  this.load.image("bug1", "assets/bird.png");

}


function create() {
  
  gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
  gameState.fish = this.physics.add.sprite(screen.width*0.125,screen.height*0.25, "fishy").setScale(.10);

   
  const platforms = this.physics.add.staticGroup();

  const platPosition = [ {x: 226, y: 630}, {x: 676, y: 630}, {x: 1126, y: 630} ];
  platPosition.forEach(plat => {
    platforms.create(plat.x, plat.y, "platform");
  })
  

   //gameState.fishTest = this.physics.add.sprite(0,200, "pipet")
   //gameState.fishTest.setGravity(0);
   
  

  gameState.pipes= this.physics.add.group({
    //immovable: true,
    allowGravity: false
  });
  
  const generatePipes = () =>{
   
    const space = 125;
    const top = Math.random()* (375) -175;
    const StartX = ScreenWidth;
    //const StartX = Math.random()*ScreenWidth*0.7 + ScreenWidth*0.25;
    //console.log(StartX)

    let bottom; 
  
    if (top > 0){
      bottom = top + 255 + space + 255;
      //console.log(bottom);
    } else {
      bottom = 255 - top + space + 255;
    } 

  
 
    gameState.pipes.create(StartX, top, 'pipet');
    gameState.pipes.create(StartX, bottom, 'pipeb');

    gameState.pipes.setVelocityX(-200);

  }


  const pipeGenLoop = this.time.addEvent({
    delay: 1500,
    callback: generatePipes,
    callbackScope: this,
    loop: true
  })  

  //gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' });

  this.physics.add.collider(gameState.pipes, gameState.fish, () =>{
    pipeGenLoop.destroy();
    this.physics.pause();
    this.add.text(ScreenWidth/2, ScreenHeight/2, 'Game Over', { fontSize: '15px', fill: '#000000' });

    
  });
  
  gameState.fish.setCollideWorldBounds(true);
  
  this.physics.add.collider(gameState.fish, platforms);



  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  gameState.fish.setVelocityX(0);

  
  if(gameState.cursors.space.isDown) {
      //gameState.fish.y += 5;
      gameState.fish.setVelocityY(-150);
    
	}/*else if (gameState.cursors.up.isDown) {
    gameState.fishTest.y -= 5;
	} else if (gameState.cursors.down.isDown) {
    gameState.fishTest.y += 5; 
  } */
  //pipes.x += 1;
  //pipes.setVelocityY(100);
  //gameState.pipes.setVelocityY(100);
  //gameState.fishTest.setVelocityY(110);
  
}

const game = new Phaser.Game(config)

