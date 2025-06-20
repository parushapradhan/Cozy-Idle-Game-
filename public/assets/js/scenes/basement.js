// Room2.js
import { loadPlayerAssets, loadAnimalAssets , playAnimalAnimation} from '../gameUtils.js';
import { Player } from '../objects/player.js';

let cursors, keys, keyE, player, interactiveObj, decoration;
let blue, cauldron, candle1, basement;
export class Basement extends Phaser.Scene {
    constructor() {
      super('Basement');
    }
  
      preload() {
          // --- Level JSON & Tileset Images ---
          this.load.image('basement', '/assets/images/levels/basement.png');
        
          loadPlayerAssets(this);
  
          //Animated Objects
          this.load.spritesheet('animated_water_pump','/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_BLUE WATER PUMP.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_candle1', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CANDLE 1.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_candle2', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CANDLE 2.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_candle3', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CANDLE 3.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_candle4', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CANDLE 4.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_cauldron1', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CAULDRON 1.png', { frameWidth: 64, frameHeight: 64 });
          this.load.spritesheet('animated_cauldron2', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CAULDRON 2.png', { frameWidth: 64, frameHeight: 64 });
          this.load.spritesheet('animated_cauldron3', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CAULDRON 3.png', { frameWidth: 64, frameHeight: 64 });
          this.load.spritesheet('animated_chest2', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CHEST 2.png', { frameWidth: 32, frameHeight: 32 }); 
          this.load.spritesheet('animated_chest3', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CHEST 3.png', { frameWidth: 32, frameHeight: 32 });  
          
  
          // DOZY
          loadAnimalAssets(this)
  
      }
    
      create() {
              // CREATE COLLISIONS 
    
              const obstacles = this.physics.add.staticGroup();
              // Bed (top-left)
              obstacles.create(45, 60).setSize(40, 60).setOffset(-20, -30).refreshBody();
              obstacles.create(115, 150).setSize(80, 40).setOffset(-40, -20).refreshBody();
              
              //  Fireplace (top-middle)
              obstacles.create(190, 100).setSize(70, 50).setOffset(-35, -25).refreshBody();
              obstacles.create(230, 100).setSize(30, 30).setOffset(-15, -15).refreshBody();
              
              // Books at the foot of bed
              obstacles.create(30, 110).setSize(20, 20).setOffset(-10, -10).refreshBody();
              
              //  Staircase (bottom-right)
              obstacles.create(215, 235).setSize(50, 30).setOffset(-25, -15).refreshBody()
      
              // Top wall (across the entire top edge)
              const topWall = this.physics.add.staticSprite(120, 40, null)  // Centered horizontally, very top
              .setSize(256, 90)      // Full width, thin height
              .setOrigin(0.5, 0)     // Align to top
              .refreshBody();
              obstacles.add(topWall);
  
              this.add.image(0, 0, 'basement').setOrigin(0, 0);
            
            //chest
            this.anims.create({
                key: 'animated_chest2',
                frames: this.anims.generateFrameNumbers('animated_chest2', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            const chest2 = this.physics.add.sprite(100, 65, 'animated_chest2');
            chest2.anims.play('animated_chest2');

            this.anims.create({
                key: 'animated_chest3',
                frames: this.anims.generateFrameNumbers('animated_chest3', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            const chest3 = this.physics.add.sprite(132, 65, 'animated_chest3');
            chest3.anims.play('animated_chest3');


            this.anims.create({
                key: 'animated_cauldron1',
                frames: this.anims.generateFrameNumbers('animated_cauldron1', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            const cauldron1 = this.physics.add.sprite(35, 140, 'animated_cauldron1');
            cauldron1.anims.play('animated_cauldron1');
    
            

                  //candle
                  this.anims.create({
                    key: 'animated_candle1',
                    frames: this.anims.generateFrameNumbers('animated_candle1', { start: 0, end: 5 }),
                    frameRate: 6,
                    repeat: -1
                });
                const candle1 = this.physics.add.sprite(170, 145, 'candle1');
                candle1.anims.play('animated_candle1');
    
                this.anims.create({
                    key: 'animated_candle2',
                    frames: this.anims.generateFrameNumbers('animated_candle2', { start: 0, end: 5 }),
                    frameRate: 6,
                    repeat: -1
                });
                const candle2 = this.physics.add.sprite(160, 160, 'candle2');
                candle2.anims.play('animated_candle2');
    
                this.anims.create({
                    key: 'animated_candle3',
                    frames: this.anims.generateFrameNumbers('animated_candle3', { start: 0, end: 5 }),
                    frameRate: 6,
                    repeat: -1
                });
                const candle3 = this.physics.add.sprite(170, 160, 'candle3');
                candle3.anims.play('animated_candle3');
    
                this.anims.create({
                    key: 'animated_candle4',
                    frames: this.anims.generateFrameNumbers('animated_candle4', { start: 0, end: 5 }),
                    frameRate: 6,
                    repeat: -1
                });
                const candle4 = this.physics.add.sprite(170, 175, 'animated_candle4');
                candle4.anims.play('animated_candle4')
                playAnimalAnimation(this);
              this.player = new Player(this, 164, 65); // x, y coordinates
  
          // Optional: add collisions or interactions
        //   this.physics.add.collider(this.player, this.obstacles);
      }
  
      update() {
            this.player.update();
            if (this.player.x >= 160 && this.player.y >= 170) {
                this.scene.start('Basement'); // replace with your target room key
                }
            if (this.player.x >= 160 && this.player.y <= 10) {
            this.scene.start('Kitchen'); // replace with your target room key
            }
        }
  }
  