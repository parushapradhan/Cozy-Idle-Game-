// public/js/loaders/loadPlayerAssets.js
export function loadPlayerAssets(scene) {
    if (typeof USER !== "undefined" && USER.character === 'robed') {
        scene.load.spritesheet('player_idle_left', '/assets/images/wizard/characters/robed/idle/ROLEWORLD_MC_SKIN_PALE_WIZARD_IDLE_LEFT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_idle_right', '/assets/images/wizard/characters/robed/idle/ROLEWORLD_MC_SKIN_PALE_WIZARD_IDLE_RIGHT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_idle_front', '/assets/images/wizard/characters/robed/idle/ROLEWORLD_MC_SKIN_PALE_WIZARD_IDLE_FRONT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_idle_back', '/assets/images/wizard/characters/robed/idle/ROLEWORLD_MC_SKIN_PALE_WIZARD_IDLE_BACK.png', { frameWidth: 16, frameHeight: 30 });
    
        scene.load.spritesheet('player_walk_left', '/assets/images/wizard/characters/robed/walk/ROLEWORLD_MC_SKIN PALE_WIZARD WALK LEFT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_walk_right', '/assets/images/wizard/characters/robed/walk/ROLEWORLD_MC_SKIN PALE_WIZARD WALK RIGHT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_walk_front', '/assets/images/wizard/characters/robed/walk/ROLEWORLD_MC_SKIN PALE_WIZARD WALK FRONT.png', { frameWidth: 16, frameHeight: 30 });
        scene.load.spritesheet('player_walk_back', '/assets/images/wizard/characters/robed/walk/ROLEWORLD_MC_SKIN PALE_WIZARD WALK BACK.png', { frameWidth: 16, frameHeight: 30 });
    }
    else if (typeof USER !== "undefined" && USER.character === 'witch') {
        scene.load.spritesheet('player_idle_left', '/assets/images/wizard/characters/Witch/Witch Idle Sprite/ROLEWORLD_WIZARD_NPC_WITCH IDLE LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_right', '/assets/images/wizard/characters/Witch/Witch Idle Sprite/ROLEWORLD_WIZARD_NPC_WITCH IDLE RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_front', '/assets/images/wizard/characters/Witch/Witch Idle Sprite/ROLEWORLD_WIZARD_NPC_WITCH IDLE FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_back', '/assets/images/wizard/characters/Witch/Witch Idle Sprite/ROLEWORLD_WIZARD_NPC_WITCH IDLE BACK.png', { frameWidth: 16, frameHeight: 32 });
    
        scene.load.spritesheet('player_walk_left', '/assets/images/wizard/characters/Witch/Witch Walk Sprite/ROLEWORLD_WIZARD_NPC_WITCH WALK LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_right', '/assets/images/wizard/characters/Witch/Witch Walk Sprite/ROLEWORLD_WIZARD_NPC_WITCH WALK RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_front', '/assets/images/wizard/characters/Witch/Witch Walk Sprite/ROLEWORLD_WIZARD_NPC_WITCH WALK FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_back', '/assets/images/wizard/characters/Witch/Witch Walk Sprite/ROLEWORLD_WIZARD_NPC_WITCH WALK BACK.png', { frameWidth: 16, frameHeight: 32 });
    }
    else if (typeof USER !== "undefined" && USER.character === 'ghost') {
        scene.load.spritesheet('player_idle_left', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_right', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_front', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_back', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST BACK.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_left', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_right', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_front', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_back', '/assets/images/wizard/characters/Ghost/Ghost Sprite/ROLEWORLD_WIZARD_NPC_GHOST BACK.png', { frameWidth: 16, frameHeight: 32 });
    }
    else{
        scene.load.spritesheet('player_idle_left', '/assets/images/wizard/characters/Wizard/Wizard Idle Sprite/ROLEWORLD_WIZARD_NPC_WIZARD IDLE LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_right', '/assets/images/wizard/characters/Wizard/Wizard Idle Sprite/ROLEWORLD_WIZARD_NPC_WIZARD IDLE RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_front', '/assets/images/wizard/characters/Wizard/Wizard Idle Sprite/ROLEWORLD_WIZARD_NPC_WIZARD IDLE FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_idle_back', '/assets/images/wizard/characters/Wizard/Wizard Idle Sprite/ROLEWORLD_WIZARD_NPC_WIZARD IDLE BACK.png', { frameWidth: 16, frameHeight: 32 });
    
        scene.load.spritesheet('player_walk_left', '/assets/images/wizard/characters/Wizard/Wizard Walk Sprite/ROLEWORLD_WIZARD_NPC_WIZARD WALK LEFT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_right', '/assets/images/wizard/characters/Wizard/Wizard Walk Sprite/ROLEWORLD_WIZARD_NPC_WIZARD WALK RIGHT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_front', '/assets/images/wizard/characters/Wizard/Wizard Walk Sprite/ROLEWORLD_WIZARD_NPC_WIZARD WALK FRONT.png', { frameWidth: 16, frameHeight: 32 });
        scene.load.spritesheet('player_walk_back', '/assets/images/wizard/characters/Wizard/Wizard Walk Sprite/ROLEWORLD_WIZARD_NPC_WIZARD WALK BACK.png', { frameWidth: 16, frameHeight: 32 });
    }
  }
  

export function loadAnimalAssets(scene) {
    if (typeof USER !== "undefined" && USER.animal === 'dozy') {
        scene.load.spritesheet('dozy_sleep_east', '/assets/images/animals/dozy_sleeping.png', { frameWidth: 80, frameHeight: 80 });
    }
    if (typeof USER !== "undefined" && USER.animal === 'henrietta') {
        scene.load.spritesheet('henrietta_sleep_east', '/assets/images/animals/henrietta.png', { frameWidth: 64, frameHeight: 64 });
    }
    if (typeof USER !== "undefined" && USER.animal === 'capybara') {
        scene.load.spritesheet('capybara_sleep_east', '/assets/images/animals/capybara.png', { frameWidth: 32, frameHeight: 32 });
    }
    if (typeof USER !== "undefined" && USER.animal === 'calico') {
        scene.load.spritesheet('calico_sleep_east', '/assets/images/animals/calico_cat.png', { frameWidth: 48, frameHeight: 40 });
    }
    if (typeof USER !== "undefined" && USER.animal === 'siamese') {
        scene.load.spritesheet('siamese_sleep_east', '/assets/images/animals/siamese_cat.png', { frameWidth: 48, frameHeight: 40 });
    }
}

export function playAnimalAnimation(scene,x=100,y=100) {
    if (typeof USER !== "undefined" && USER.animal === 'dozy') {
        scene.anims.create({
        key: 'dozy_sleep_east',
        frames: scene.anims.generateFrameNumbers('dozy_sleep_east', { start: 0, end: 7 }),
        frameRate: 4,
        repeat: -1
        });
        const dozy = scene.physics.add.sprite(x, y, 'dozy_sleep_east');
        dozy.anims.play('dozy_sleep_east');
    }
    if (typeof USER !== "undefined" && USER.animal === 'henrietta') {
        scene.anims.create({
        key: 'henrietta_sleep_east',
        frames: scene.anims.generateFrameNumbers('henrietta_sleep_east', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
        });
        const henrietta = scene.physics.add.sprite(x, y, 'henrietta_sleep_east');
        henrietta.anims.play('henrietta_sleep_east');
    }
    if (typeof USER !== "undefined" && USER.animal === 'calico') {
        scene.anims.create({
        key: 'calico_sleep_east',
        frames: scene.anims.generateFrameNumbers('calico_sleep_east', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
        });
        const calico = scene.physics.add.sprite(x, y, 'calico_sleep_east');
        calico.anims.play('calico_sleep_east');
    }
    if (typeof USER !== "undefined" && USER.animal === 'siamese') {
        scene.anims.create({
        key: 'siamese_sleep_east',
        frames: scene.anims.generateFrameNumbers('siamese_sleep_east', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
        });
        const siamese = scene.physics.add.sprite(x, y, 'siamese_sleep_east');
        siamese.anims.play('dozy_sleeping');
    }
    if (typeof USER !== "undefined" && USER.animal === 'capybara') {
        scene.anims.create({
        key: 'capybara_sleep_east',
        frames: scene.anims.generateFrameNumbers('capybara_sleep_east', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
        });
        const capybara = scene.physics.add.sprite(x, y, 'capybara_sleep_east');
        capybara.anims.play('capybara_sleep_east');
    }
}

// Utility to add weather-driven visual effects based on HTML sliders.

/**
 * Initializes weather effects on the given Phaser scene.
 * @param {Phaser.Scene} scene
 */
export function initWeather(scene) {
    const { add, scale, lights, cameras, time } = scene;
  
    // --- generate particle textures ---
    const g = add.graphics();
  
    // dust (wind): tiny gray square
    g.fillStyle(0xbbbbbb);
    g.fillRect(0, 0, 2, 2);
    g.generateTexture('dust', 2, 2);
    g.clear();
  
    // raindrop: small blue circle
    g.fillStyle(0x88ccff);
    g.fillCircle(4, 4, 4);
    g.generateTexture('raindrop', 8, 8);
    g.destroy();
  
  
    // occasional lightning flash during heavy rain
    time.addEvent({
      delay: 5000,
      loop: true,
      callback: () => {
        if (+scene.sliders.rain.value > 60) {
          cameras.main.flash(200, 255, 255, 255);
        }
      }
    });
  
    // --- grab sliders ---
    scene.sliders = {
      wind: document.getElementById('wind'),
      rain: document.getElementById('rain')
    };
  
    // WIND effect → dust particles
    scene.windEmitter = add.particles(
      0, 0, 'dust',
      {
        x: { min: 0, max: scale.width },
        y: { min: 0, max: scale.height },
        speedX: { min: 50, max: 200 },
        speedY: { min: -20, max: 20 },
        scale: { start: 0.5, end: 0 },
        lifespan: 2000,
        frequency: -1
      }
    );
    scene.sliders.wind.addEventListener('input', () => {
      const v = +scene.sliders.wind.value;
      if (v) {
        scene.windEmitter.start().setDepth(1000);
        scene.windEmitter.setFrequency(200 - 2 * v);
      } else {
        scene.windEmitter.stop();
      }
    });
  
    // RAINSTORM effect → heavier raindrop particles
    scene.rainEmitter = add.particles(
      0, 0, 'raindrop',
      {
        x: { min: 0, max: scale.width },
        y: 0,
        speedY: { min: 400, max: 700 },    // faster fall
        scale: { start: 0.3, end: 0.3 },   // slightly bigger drops
        lifespan: 1500,                    // shorter lifespan
        frequency: -1
      }
    );
    scene.sliders.rain.addEventListener('input', () => {
      const v = +scene.sliders.rain.value;
      if (v) {
        scene.rainEmitter.start().setDepth(1000);
        // heavier rain: drop interval shrinks as slider increases
        scene.rainEmitter.setFrequency(Math.max(20, 120 - v * 1.2));
      } else {
        scene.rainEmitter.stop();
      }
    });
  }

