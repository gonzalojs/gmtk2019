import Monster from '../libs/monster.js'


let score_left = 1000
let score_right = 1000
let score_center = 1000

let blue_button_on, blue_button_off, green_button_on, green_button_off, red_button_on, red_button_off;
let time = 0

let plusPoint = null


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


    setInterval(() => {
      time = time + 1
    }, 1000)

    this.valor = 100


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
/*     const bombilla_on_1 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_on_2 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_on_3 = this.add.image(0, 0, 'bombilla_on')
    const bombilla_off_1 = this.add.image(0, 0, 'bombilla_off')
    const bombilla_off_2 = this.add.image(0, 0, 'bombilla_off')
    const bombilla_off_3 = this.add.image(0, 0, 'bombilla_off') */
    blue_button_on = this.add.image(0, 0, 'blue_button_on').setInteractive()
    blue_button_on.setVisible(false)
    blue_button_off = this.add.image(0, 0, 'blue_button_off').setInteractive()
    blue_button_off.visible = true
    green_button_on = this.add.image(0, 0, 'green_button_on').setInteractive()
    green_button_off = this.add.image(0, 0, 'green_button_off').setInteractive()
    red_button_on = this.add.image(0, 0, 'red_button_on').setInteractive()
    red_button_off = this.add.image(0, 0, 'red_button_off').setInteractive()
    const map_left = this.add.image(0, 0, 'map_left')
    const map_center = this.add.image(0, 0, 'map_center')
    const map_right = this.add.image(0, 0, 'map_right')

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

    //micro zona bottones
    const TOP_BU = this.add.zone(0, 0, 100, 100)
    const MID_BU = this.add.zone(0, 0, 100, 100)
    const BOT_BU = this.add.zone(0, 0, 100, 100)

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
    //botones to botones
    Phaser.Display.Align.In.LeftCenter(TOP_BU, BU_ONE)
    Phaser.Display.Align.In.LeftCenter(MID_BU, BU_TWO)
    Phaser.Display.Align.In.LeftCenter(BOT_BU, BU_THREE)

    //bombillas to MAP. por defecto solo apagadas
    Phaser.Display.Align.In.LeftCenter(BOMBILLA_UNO, MAP)
    Phaser.Display.Align.In.Center(BOMBILLA_DOS, MAP)
    Phaser.Display.Align.In.RightCenter(BOMBILLA_TRES, MAP)

    Phaser.Display.Align.In.LeftCenter(map_left, MAP)
    Phaser.Display.Align.In.Center(map_center, MAP)
    Phaser.Display.Align.In.RightCenter(map_right, MAP)


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
/*     Phaser.Display.Align.In.Center(bombilla_off_1, BOMBILLA_UNO)
    Phaser.Display.Align.In.Center(bombilla_off_2, BOMBILLA_DOS)
    Phaser.Display.Align.In.Center(bombilla_off_3, BOMBILLA_TRES)
    Phaser.Display.Align.In.Center(bombilla_on_1, BOMBILLA_UNO)
    Phaser.Display.Align.In.Center(bombilla_on_2, BOMBILLA_DOS)
    Phaser.Display.Align.In.Center(bombilla_on_3, BOMBILLA_TRES) */

    //tres botones
    Phaser.Display.Align.In.Center(blue_button_off, TOP_BU)
    Phaser.Display.Align.In.Center(blue_button_on, TOP_BU)
    Phaser.Display.Align.In.Center(green_button_off, MID_BU)
    Phaser.Display.Align.In.Center(green_button_on, MID_BU)
    Phaser.Display.Align.In.Center(red_button_off, BOT_BU)
    Phaser.Display.Align.In.Center(red_button_on, BOT_BU)


    //puedo hacer que las overlays sean visibles o no solo con booleans


    /* bombilla_off_2.visible = false */

/*     blue_button_on.visible = false
    green_button_on.visible = false
    red_button_on.visible = false */

    map_left.visible = false
    map_center.visible = false
    map_right.visible = false

/*     bombilla_off_1.visible = false
    bombilla_off_2.visible = false
    bombilla_off_3.visible = false
    bombilla_on_1.visible = false
    bombilla_on_2.visible = false
    bombilla_on_3.visible = false
 */



    blue_button_on.on('pointerdown', function () {
/*       bombilla_off_1.visible = true */
      score_left = score_left - 1
      map_left.visible = false
      blue_button_off.visible = true
      blue_button_on.visible = false

      plusPoint = null


    })

    blue_button_off.on('pointerdown', function () {
/*       bombilla_off_1.visible = false
      bombilla_off_2.visible = true
      bombilla_off_3.visible = true */

      score_left = score_left + 1
      map_left.visible = true
      map_center.visible = false
      map_right.visible = false

      blue_button_off.visible = false
      blue_button_on.visible = true

      plusPoint = 'blue'

      red_button_off.visible = true
      red_button_on.visible = false
      green_button_off.visible = true
      green_button_on.visible = false
    })

    green_button_off.on('pointerdown', () => {
/*       bombilla_off_2.visible = false //se prende la bombilla y se apagan las otras dos
      bombilla_off_1.visible = true
      bombilla_off_3.visible = true */

      plusPoint = 'green'

      map_left.visible = false
      map_center.visible = true
      map_right.visible = false

      blue_button_off.visible = true
      blue_button_on.visible = false
      green_button_off.visible = false
      green_button_on.visible = true
      red_button_off.visible = true
      red_button_on.visible = false
    })

    green_button_on.on('pointerdown', () => {
/*       bombilla_off_2.visible = true */

      plusPoint = null
      map_center.visible = false
      green_button_off.visible = true
      green_button_on.visible = false
    })

    red_button_off.on('pointerdown', () => {
/*       bombilla_off_3.visible = false
      bombilla_off_1.visible = true
      bombilla_off_2.visible = true */
      plusPoint = 'red'
      map_left.visible = false
      map_center.visible = false
      map_right.visible = true

      blue_button_off.visible = true
      blue_button_on.visible = false
      green_button_off.visible = true
      green_button_on.visible = false
      red_button_off.visible = false
      red_button_on.visible = true
    })

    red_button_on.on('pointerdown', () => {
      plusPoint = null
      map_right.visible = false
      red_button_off.visible = true
      red_button_on.visible = false
    })

    //descuenta regularmente el puntaje a todos
    setInterval(() => {
      score_left = score_left -1
      score_right = score_right - 1
      score_center = score_center - 1

      this.checkScore()

      console.log(score_left, score_center, score_right)
    }, 5000)




  }
  update () {

  }

  //Falta agregar algo para que los puntos SUBAN una vez lleven mucho tiempo las luces prendidas en un area. Un bono
  checkScore () {
    if (plusPoint === 'blue' && time % 5 === 0) {
        score_left = score_left + 1
    } else if (plusPoint === 'green' && time % 5 === 0) {
      score_center = score_center + 1
    } else if (plusPoint === 'red' && time % 5 === 0) {
      score_right = score_right + 1
    } else {
      console.log('todos son luz')
    }
  }

}