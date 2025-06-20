// Room2.js
import { loadPlayerAssets, loadAnimalAssets, playAnimalAnimation } from '../gameUtils.js';
import { Player } from '../objects/player.js';

let cursors, keys, keyE, player, interactiveObj, decoration;
let blue, cauldron, candle1, basement;
export class Kitchen extends Phaser.Scene {
    constructor() {
      super('Kitchen');
    }
  
      preload() {
          // --- Level JSON & Tileset Images ---
          this.load.image('kitchen', '/assets/images/levels/kitchen.png');
        
          loadPlayerAssets(this);
  
          //Animated Objects
          this.load.spritesheet('animated_basement', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_BASEMENT.png', { frameWidth: 32, frameHeight: 48 });
          this.load.spritesheet('animated_orb', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_ORB.png', { frameWidth: 16, frameHeight: 32 });
          this.load.spritesheet('animated_chest1', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_CHEST 1.png', { frameWidth: 16, frameHeight: 16 });
          this.load.spritesheet('animated_kitchen', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_KITCHEN.png', { frameWidth: 48, frameHeight: 32 }); 

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
  
              this.add.image(0, 0, 'kitchen').setOrigin(0, 0);
            //stove
              this.anims.create({
                  key: 'animated_kitchen',
                  frames: this.anims.generateFrameNumbers('animated_kitchen', { start: 0, end: 5 }),
                  frameRate: 6,
                  repeat: -1
              });
              const stove = this.physics.add.sprite(60, 73, 'animated_kitchen');
              stove.anims.play('animated_kitchen');
            //orb
              this.anims.create({
                key: 'animated_orb',
                frames: this.anims.generateFrameNumbers('animated_orb', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
                });
                const orb = this.physics.add.sprite(120, 65, 'animated_orb');
                orb.anims.play('animated_orb');
            //basement
            this.anims.create({
                key: 'animated_basement',
                frames: this.anims.generateFrameNumbers('animated_basement', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            const basement = this.physics.add.sprite(160, 170, 'animated_basement');
            basement.anims.play('animated_basement');
            //chest
            this.anims.create({
                key: 'animated_chest1',
                frames: this.anims.generateFrameNumbers('animated_chest1', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            const chest = this.physics.add.sprite(138, 75, 'animated_chest1');
            chest.anims.play('animated_chest1');

            playAnimalAnimation(this);
              this.player = new Player(this, 145, 80); // x, y coordinates
  
          // Optional: add collisions or interactions
        //   this.physics.add.collider(this.player, this.obstacles);
      }
  
      update() {
            this.player.update();
            if (this.player.x >= 160 && this.player.y >= 170) {
                this.scene.start('Basement'); // replace with your target room key
                }
            if (this.player.x >= 160 && this.player.y <= 10) {
            this.scene.start('Bedroom'); 
            }
            if (this.player.x >= 100 && this.player.y >= 180) {
              this.scene.start('Outdoor'); // replace with your target room key
              }
        }
  }
  