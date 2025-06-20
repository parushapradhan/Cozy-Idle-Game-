import { loadPlayerAssets, loadAnimalAssets ,playAnimalAnimation} from '../gameUtils.js';
import { Player } from '../objects/player.js';

let cursors, keys, keyE, player, interactiveObj, decoration;
let blue, cauldron, candle1, basement;
let fireplace, fireplaceOn = true;
export class Bedroom extends Phaser.Scene {
    constructor() {
      super('Bedroom');
    }
    preload() {
        // --- Level JSON & Tileset Images ---
        this.load.image('bg', '/assets/images/levels/bedroom.png');
      
        loadPlayerAssets(this);

        //Animated Objects

        this.load.spritesheet('animated_blue_book', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_BLUE BOOK.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('animated_fireplace', '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED INTERIOR_FIREPLACE.png', { frameWidth: 48, frameHeight: 30 });
        //interactive fireplace
        this.load.image('fireplace_off', '/assets/images/fireplace/fireplace_off.png');

        //WINDOW
        this.load.spritesheet('windows', '/assets/images/24x24_windows_orange.png', {
          frameWidth: 24,
          frameHeight: 24
        });

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

            this.add.image(0, 0, 'bg').setOrigin(0, 0);

            this.anims.create({
                key: 'animated_blue_book',
                frames: this.anims.generateFrameNumbers('animated_blue_book', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            blue = this.physics.add.sprite(40, 40, 'animated_blue_book');
            blue.anims.play('animated_blue_book');

      

            this.anims.create({
                key: 'animated_fireplace',
                frames: this.anims.generateFrameNumbers('animated_fireplace', { start: 0, end: 5 }),
                frameRate: 6,
                repeat: -1
            });
            fireplace = this.physics.add.sprite(167, 79, 'animated_fireplace');
            fireplace.anims.play('animated_fireplace')

            playAnimalAnimation(this);
            this.player = new Player(this, 100, 150); // x, y coordinates

        // Optional: add collisions or interactions
        // this.physics.add.collider(this.player, obstacles);
    }

    update() {
        this.player.update();
        if (this.player.x >= 153 && this.player.y >= 188) {
            this.scene.start('Kitchen'); // replace with your target room key
          }
          if (
            Phaser.Math.Distance.Between(this.player.x, this.player.y, fireplace.x, fireplace.y) < 40 &&
            Phaser.Input.Keyboard.JustDown(this.player.keys.ENTER)
          ) {
            if (fireplaceOn) {
              fireplaceOn = false;
              fireplace.setTexture('fireplace_off');
              fireplace.anims.stop();
            //   if (fireplaceSound) fireplaceSound.stop();
            } else {
              fireplaceOn = true;
              fireplace.setTexture('animated_fireplace');
              fireplace.anims.play('animated_fireplace');
            //   if (fireplaceSound) fireplaceSound.play();
            }
          }
      }
  
  }
  