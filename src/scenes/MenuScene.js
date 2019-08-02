export default class MenuScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MenuScene'
    })
  }
  preload () {
    console.log('Menu Scene')
  }
  create () {

    this.scene.start('GameScene')
  }
  update () {
    
  }

}