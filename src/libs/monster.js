export default class Monster {
  constructor (scene, x, y) {
    this.scene = scene

    const anims = scene.anims
    anims.create({
      key: 'monster-idle',
      frames: anims.generateFrameNumbers('monster', {
        start: 0,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    })

    //physics based sprite
    this.sprite = scene.physics.add
      .sprite(x, y, 'monster', 0)
      .setMaxVelocity(200, 300)
      .setScale(2)
/*       .setSize(18, 24) */


  }

  update () {
    const sprite = this.sprite
    sprite.anims.play('monster-idle', true)
  }
}