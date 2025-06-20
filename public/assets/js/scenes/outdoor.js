// Room2.js
import { loadPlayerAssets, loadAnimalAssets , playAnimalAnimation, initWeather } from '../gameUtils.js';
import { Player } from '/assets/js/objects/player.js';

let cursors, keys, keyE, player, interactiveObj, decoration;
let lights;
export class Outdoor extends Phaser.Scene {
    constructor() {
      super('Outdoor');
    }
  
      preload() {
          // --- Level JSON & Tileset Images ---
          this.load.image('outdoor', '/assets/images/levels/outdoor.png');
        
          loadPlayerAssets(this);
  
          //Animated Objects
          this.load.spritesheet(
            'wizardFirefly',
            '/assets/images/wizard/animations/ROLEWORLD_WIZARD_FIREFLY.png',
            { frameWidth: 14, frameHeight: 15 }
          );
          this.load.image(
            'wizardHouseLight',
            '/assets/images/wizard/animations/ROLEWORLD_WIZARD_HOUSE LIGHT.png',
          );
          this.load.spritesheet(
            'wizardHouse',
            '/assets/images/wizard/animations/ROLEWORLD_WIZARD_ANIMATED HOUSE 1.png',
            { frameWidth: 128, frameHeight: 192 }
          );
          this.load.spritesheet(
            'wizardOutdoorLight',
            '/assets/images/wizard/animations/ROLEWORLD_WIZARD_OUTDOOR LIGHT.png',
            { frameWidth: 34, frameHeight: 34 }
          );
  
          // DOZY
          loadAnimalAssets(this)
  
      }
    
      create() {
              // CREATE COLLISIONS 
              const hour = new Date().getHours();
              const isNight = hour < 6 || hour >= 18;
              const ambientColor = isNight ? 0x111111 : 0x555555;
              const lightIntensity = isNight ? 0.3 : 1.0;

              // apply 2D lighting
              this.lights.enable().setAmbientColor(ambientColor);
              this.lights.addLight(this.scale.width / 2, this.scale.height / 4, 300)
                  .setIntensity(lightIntensity);

              // strong night overlay
              if (isNight) {
                  this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.8)
                      .setOrigin(0)
                      .setDepth(1)
                      .setPipeline('Light2D');

              }

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
  
              this.add.image(0, 0, 'outdoor').setOrigin(0, 0);

                  // Setup wizard animations
                this.anims.create({
                    key: 'wizardFirefly_anim',
                    frames: this.anims.generateFrameNumbers('wizardFirefly'),
                    frameRate: 3,
                    repeat: -1
                });
                this.anims.create({
                    key: 'wizardHouse_anim',
                    frames: this.anims.generateFrameNumbers('wizardHouse'),
                    frameRate: 5,
                    repeat: -1
                });
                this.anims.create({
                    key: 'wizardOutdoorLight_anim',
                    frames: this.anims.generateFrameNumbers('wizardOutdoorLight'),
                    frameRate: 3,
                    repeat: -1
                });
      
              initWeather(this)
                // Add the wizard house lights
                this.wizardHouse=this.add.sprite(75, 65, 'wizardHouse').setOrigin(0.5).setScale(0.8).play('wizardHouse_anim');
                if(isNight){
                    this.add.sprite(150, 80, 'wizardFirefly').play('wizardFirefly_anim').setDepth(1000);

                    this.add.sprite(40, 160, 'wizardFirefly').play('wizardFirefly_anim').setDepth(1000);
                    this.add.sprite(47, 87, 'wizardHouseLight').setDepth(1000);
                    this.add.sprite(104, 87, 'wizardHouseLight').setDepth(1000);
       
                    this.add.sprite(160, 135, 'wizardOutdoorLight').play('wizardOutdoorLight_anim').setDepth(1000);
                    this.add.sprite(56, 95, 'wizardOutdoorLight').play('wizardOutdoorLight_anim').setDepth(1000);
                    this.add.sprite(95, 95, 'wizardOutdoorLight').play('wizardOutdoorLight_anim').setDepth(1000);
                }
                if(!isNight){
                    playAnimalAnimation(this,120,130);
                }
                this.player = new Player(this, 100, 150); 
          // Optional: add collisions or interactions
        //   this.physics.add.collider(this.player, this.obstacles);
      }
  
      update() {
            this.player.update();
            if (this.player.x >= 55 && this.player.y <= 110) {
                this.scene.start('Kitchen'); 
            }
        }
  }
  