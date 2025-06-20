export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'player_idle_front');
  
      scene.add.existing(this);
      scene.physics.add.existing(this);
  
      this.setSize(32, 20).setOffset(2, 10);
      this.setCollideWorldBounds(true);
  
      this.scene = scene;
      this.createAnimations();
  
      this.cursors = scene.input.keyboard.createCursorKeys();
      this.keys = scene.input.keyboard.addKeys({
        // W: Phaser.Input.Keyboard.KeyCodes.W,
        // A: Phaser.Input.Keyboard.KeyCodes.A,
        // S: Phaser.Input.Keyboard.KeyCodes.S,
        // D: Phaser.Input.Keyboard.KeyCodes.D,
        // E: Phaser.Input.Keyboard.KeyCodes.E,
        ENTER: Phaser.Input.Keyboard.KeyCodes.ENTER
        
      });
  
      this.currentDirection = 'front';
    }
  
    createAnimations() {
      const anims = this.scene.anims;
  
      if (!anims.exists('walk-front')) {
        anims.create({
          key: 'walk-front',
          frames: anims.generateFrameNumbers('player_walk_front', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'walk-back',
          frames: anims.generateFrameNumbers('player_walk_back', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'walk-left',
          frames: anims.generateFrameNumbers('player_walk_left', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'walk-right',
          frames: anims.generateFrameNumbers('player_walk_right', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'idle-front',
          frames: anims.generateFrameNumbers('player_idle_front', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'idle-back',
          frames: anims.generateFrameNumbers('player_idle_back', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'idle-left',
          frames: anims.generateFrameNumbers('player_idle_left', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
        anims.create({
          key: 'idle-right',
          frames: anims.generateFrameNumbers('player_idle_right', { start: 0, end: 5 }),
          frameRate: 6,
          repeat: -1
        });
      }
    }
  
    update() {
      this.body.setVelocity(0);
      let moving = false;
  
      // if (this.keys.A.isDown || this.cursors.left.isDown) {
      //   this.body.setVelocityX(-150);
      //   this.play('walk-left', true);
      //   this.currentDirection = 'left';
      //   moving = true;
      // } else if (this.keys.D.isDown || this.cursors.right.isDown) {
      //   this.body.setVelocityX(150);
      //   this.play('walk-right', true);
      //   this.currentDirection = 'right';
      //   moving = true;
      // } else if (this.keys.W.isDown || this.cursors.up.isDown) {
      //   this.body.setVelocityY(-150);
      //   this.play('walk-back', true);
      //   this.currentDirection = 'back';
      //   moving = true;
      // } else if (this.keys.S.isDown || this.cursors.down.isDown) {
      //   this.body.setVelocityY(150);
      //   this.play('walk-front', true);
      //   this.currentDirection = 'front';
      //   moving = true;
      // }
      
      if (this.cursors.left.isDown) {
        this.body.setVelocityX(-150);
        this.play('walk-left', true);
        this.currentDirection = 'left';
        moving = true;
      } else if (this.cursors.right.isDown) {
        this.body.setVelocityX(150);
        this.play('walk-right', true);
        this.currentDirection = 'right';
        moving = true;
      } else if (this.cursors.up.isDown) {
        this.body.setVelocityY(-150);
        this.play('walk-back', true);
        this.currentDirection = 'back';
        moving = true;
      } else if (this.cursors.down.isDown) {
        this.body.setVelocityY(150);
        this.play('walk-front', true);
        this.currentDirection = 'front';
        moving = true;
      }
  
      if (!moving) {
        this.play(`idle-${this.currentDirection}`,true);
      }
    }
  }
  