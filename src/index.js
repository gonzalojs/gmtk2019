import BootScene from './scenes/BootScene.js'
import PreloadScene from './scenes/PreloadScene.js'
import MenuScene from './scenes/MenuScene.js'
import GameScene from './scenes/GameScene.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'container',
  pixelArt: true,
  backgrpundColor: '#1d212d',
  scene: [
    BootScene,
    PreloadScene,
    MenuScene,
    GameScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    parent: 'container'
  }
}

const game = new Phaser.Game(config)