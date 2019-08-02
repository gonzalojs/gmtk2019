export default class BootScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'BootScene'
    })
  }
  preload () {
    console.log('Boot Scene')

    //monster
    this.load.spritesheet('monster', 'src/assets/spritesheets/big-monster-sprite.png', {
      frameWidth: 32,
      frameHeight: 35
    })
  
  }
  create () {

    this.scene.start('PreloadScene')
  }

}