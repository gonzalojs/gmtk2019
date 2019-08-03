import Monster from '../libs/monster.js'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'GameScene'
    })
  }
  preload () {
    console.log('Game Scene')
    this.cameras.main.setBackgroundColor('#FFD700')
  }
  create () {

    //images to add
    const background = this.add.image(0, 0, 'background')
    const top = this.add.image(0, 0, 'top')
    const bottom = this.add.image(0, 0, 'bottom')
    const compu = this.add.image(0, 0, 'compu')
    const panel = this.add.image(0, 0, 'panel')
    const desk = this.add.image(0, 0, 'desk')
    const map = this.add.image(0, 0, 'map')
    const bu_one = this.add.image(0, 0, 'bu_one')
    const bu_two = this.add.image(0, 0, 'bu_two')
    const bu_three = this.add.image(0, 0, 'bu_three')
    const bombilla_on_1 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_on_2 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_on_3 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_off_1 = this.add.image(0, 0, 'bombilla_off')
    const bombilla_off_2 = this.add.image(0, 0, 'bombilla_off')
    const bombilla_off_3 = this.add.image(0, 0, 'bombilla_off')

    //backgrpund
    const TODO = this.add.zone(400, 300, 800, 600)//zone back
    let TOP = this.add.zone(0, 0).setSize(800, 300)
    const BOTTOM = this.add.zone(0, 0, 800, 300)
    //minizones
    const COMPU = this.add.zone(0, 0, 300, 300)
    const MAP = this.add.zone(0, 0, 500, 300)
    const PANEL = this.add.zone(0, 0, 300, 300)
    const DESK = this.add.zone(0, 0, 500, 300)

    //panel zones
/*     const { BU_ONE, BU_TWO, BU_THREE } = this.add.zone(0, 0, 300, 100) */
    const BU_ONE = this.add.zone(0, 0, 300, 100)
    const BU_TWO = this.add.zone(0, 0, 300, 100)
    const BU_THREE = this.add.zone(0, 0, 300, 100)

    //bombillas zone
    const BOMBILLA_UNO = this.add.zone(0, 0, 150, 300)
    const BOMBILLA_DOS = this.add.zone(0, 0, 200, 300)
    const BOMBILLA_TRES = this.add.zone(0, 0, 150, 300)

    this.physics.world.enable(TOP, 0)
    TOP.body.debugBodyColor = '#FFD700'

 /*    this.monster = new Monster(this, 400, 300) */

    //add zones to zones
    Phaser.Display.Align.In.Center(background, TODO)
    Phaser.Display.Align.In.TopCenter(TOP, background)
    Phaser.Display.Align.In.BottomCenter(BOTTOM, background)
    Phaser.Display.Align.In.LeftCenter(COMPU, TOP)
    Phaser.Display.Align.In.RightCenter(MAP, TOP)
    Phaser.Display.Align.In.LeftCenter(PANEL, BOTTOM)
    Phaser.Display.Align.In.RightCenter(DESK, BOTTOM)
    //buttones to pane
    Phaser.Display.Align.In.TopCenter(BU_ONE, PANEL)
    Phaser.Display.Align.In.Center(BU_TWO, PANEL)
    Phaser.Display.Align.In.BottomCenter(BU_THREE, PANEL)

    //bombillas to MAP. por defecto solo apagadas
    Phaser.Display.Align.In.LeftCenter(BOMBILLA_UNO, MAP)
    Phaser.Display.Align.In.Center(BOMBILLA_DOS, MAP)
    Phaser.Display.Align.In.RightCenter(BOMBILLA_TRES, MAP)


    //add images
    Phaser.Display.Align.In.TopCenter(top, TOP)
    Phaser.Display.Align.In.BottomCenter(bottom, BOTTOM)
    Phaser.Display.Align.In.Center(compu, COMPU)
    Phaser.Display.Align.In.Center(map, MAP)
    Phaser.Display.Align.In.Center(panel, PANEL)
    Phaser.Display.Align.In.Center(desk, DESK)
    Phaser.Display.Align.In.Center(bu_one, BU_ONE)
    Phaser.Display.Align.In.Center(bu_two, BU_TWO)
    Phaser.Display.Align.In.Center(bu_three, BU_THREE)
    Phaser.Display.Align.In.Center(bombilla_off_1, BOMBILLA_UNO)
    Phaser.Display.Align.In.Center(bombilla_off_2, BOMBILLA_DOS)
    Phaser.Display.Align.In.Center(bombilla_off_3, BOMBILLA_TRES)
    Phaser.Display.Align.In.Center(bombilla_on_1, BOMBILLA_UNO)
    Phaser.Display.Align.In.Center(bombilla_on_2, BOMBILLA_DOS)
    Phaser.Display.Align.In.Center(bombilla_on_3, BOMBILLA_TRES)


    //puedo hacer que las overlays sean visibles o no solo con booleans

    /* bombilla_off_2.visible = false */



  }
  update () {
/*     this.monster.sprite.anims.play('monster-idle', true) */
    /* this.monster.update() */

  }

}