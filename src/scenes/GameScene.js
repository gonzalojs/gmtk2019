let opts = [
  [
    {
      msg: 'Dear Light Person.\n We are the Homeowner Association\nAnd, though we understand your\ndifficult position, we would really\nappreciate if you could give us\na little more light in the future\nSincerely, Homeowner Association',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nPlease consider that every time\nthe lights are down, we\nhave to start interacting with\nour kids.\nKindly, The Homwowner Association',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nI had to spend the entirety of\nyesterday playing Tabletop Games with my kids\nPlease, bring the light back',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nWe notice your grass is not\n up to the standars we expect from\none of our members\nA small penalty will be applied',
      cost: -25
    },
    {
      msg: 'Dear Light Person.\nApparently someone broke part\nof your fence. Shame really.\nWe alreaddy repaired it\nas per regulations.\nYou welcome',
      cost: -125
    },
    {
      msg: 'Dear Light Person.\nyour dog was killed in a hit and run.\nUnfortunately, given the lack of light\nthe culprit escaped.\nWe proceeded wit the funeral',
      cost: 1000
    },
    {
      msg: 'Dear Light Person.\nI regret to inform you that\nyour kids have been expelled\nand banned from the local School System.\nThe lack of light\nmake curring students a must',
      cost: -1800
    },
    {
      msg: 'Dear Light Person.\nOne of your kids was attacked\nnot a minute ago.\nThe attacker was the Homeowner Association Vice President\nWe already told her not\nto do that anymore.\nI am sure your kid is okay.',
      cost: -4000
    },
    {
      msg: 'Dear Light Person.\nAll the grass of your front\nand backyard was destroyed\n (By the firefighters putting out the fire\nat your house).\nWe expect you to repair the lawn\nat the soonest possible time',
      cost: -35000
    },
    {
      msg: 'Dear Light Person.\nWe are comming for you',
      cost: 0
    }
  ],
  [
    {
      msg: 'Light Guy, how are you?\nThis is the Mayor\nLook, I know you just started\nBut you need to understand\nhow important is the Mid sector for our city.\nPlease be mindful of it.\nThanks',
      cost: 0
    },
    {
      msg: 'Light Guy, my friend, if\nthe city need the hospitals\nand the schools and the\npolice stations of Mid Town.\nPlease be reasonable',
      cost: 0
    },
    {
      msg: 'Sorry, but because your salary\nis paid by this office, you will\n be penalized from now on is there are excessive blackouts',
      cost: -150
    },
    {
      msg: 'We will be expanding the blackout fee',
      cost: -280
    },
    {
      msg: 'For security reasons, you will be audit\n Best regards',
      cost: -1118
    },
    {
      msg: 'Apparently your brother was\n just arrested. It would be a shame if\nsomething happened to him.\nJails are dangerousplaces after all',
      cost: -2499
    },
    {
      msg: 'your wife was just fired from her position at the University. No lights mean no classes, and no Job',
      cost: -17500
    },
    {
      msg: 'Your brother hung himself.\nHe wen crazy with the darkness, probably\nThis is on you',
      cost: -7990
    },
    {
      msg: 'You probably already hear\nabout the armed groups hunting down\nyour childrens.\n Good look keeping them at bay\nwithput a functioning police',
      cost: 0
    },
    {
      msg: 'Did you know the University\nhad such a huge bomb?\nYour house (and your familly) did not stand a chance.\nThey say the nex one\nwill be even bigger!',
      cost: 0
    }
  ],
  [
    {
      msg: 'Dear Light Person.\nWe at the ManyMuchMoney Society\nwould like you to\nremember that Golf Season\nis comming.\nWe need More Light.\nHead of the ManyMuchMoney Society',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nThe type of treatment\nyou have shown for us will not stand.\nPlease make sure to keep\nthe lights on for\na more ADEQUATE amount\nof time.\nHead of the ManyMuchMoney Society',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nWe found this to be unnaceptable.\nWe represent the highest order of people\nin the city.\nWe need to have acces to\nthe light in a more\norderly manner.\nHead of the ManyMuchMoney Society',
      cost: 0
    },
    {
      msg: 'Light Person.\nI believe we are past the point of\nreasoning with you.\nIf you do not care about our need\nfor electric Buttlers well, maybe,\nwe will have to look for\nother means to make you\care.',
      cost: -500
    },
    {
      msg: 'To whom it may concern\nOur lawyers will be contacting you soon',
      cost: -3500
    },
    {
      msg: 'So be it.',
      cost: 0
    },
    {
      msg: 'You really are a dearing\nindividual, I will give you that.',
      cost: -10000
    },
    {
      msg: 'Really? you still keep going?\nSo be it',
      cost: -25000
    },
    {
      msg: 'This is your las warning',
      cost: 0
    },
    {
      msg: 'Dear Light Person.\nGood Bye',
      cost: -1000000000
    }
  ]
]


let score_left = 1000
let score_right = 1000
let score_center = 1000

let startDayL = null
let StartDayR = null
let StartDayC = null

let endDayL = null
let endDayR = null
let endDayC = null

let totalDayL = null
let totalDayR = null
let totalDayC = null

let msgText = null
let income = null

let blue_button_on, blue_button_off, green_button_on, green_button_off, red_button_on, red_button_off;
let time = 0

let textDone = null

let sobre_cerrado = null
let sobre_cerrado2 = null

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



/*     this.input.setDraggable(sobre_cerrado)
    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000)
    })
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX
      gameObject.y = dragY
    })
    this.input.on('dragend', function (pointer, gameObject) {

      gameObject.clearTint()

  }) */

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

    this.textBlock = this.make.text({
      x: 150,
      y: 100,
      origin: {
        x: 0.5,
        y: 0.5
      },
      text: 'Holalwjdmlwm',
      style: {
        font: 'bold 12px Monospace',
        fill: 'white',
        wordWrap: { width: 300 }
      },
    })

    //items
    this.sobre_cerrado30 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado29 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado28 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado27 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado26 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado25 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado24 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado23 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado22 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado21 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado20 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado19 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado18 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado17 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado16 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado15 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado14 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this. sobre_cerrado13 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado12 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado11 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado10 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado9 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado8 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado7 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado6 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado5 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    this.sobre_cerrado3 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    sobre_cerrado2 = this.add.image(900, 400, 'sobre_cerrado').setInteractive()
    sobre_cerrado = this.add.image(900, 450, 'sobre_cerrado').setInteractive()
    sobre_cerrado.on('pointerdown', () => {
      this.textBlock.setText(msgText)
    })
    sobre_cerrado2.on('pointerdown', () => {
      this.textBlock.setText(msgText)
    })

    //descuenta regularmente el puntaje a todos
    setInterval(() => {
      score_left = score_left -1
      score_right = score_right - 1
      score_center = score_center - 1

      this.checkScore()

/*       console.log(score_left, score_center, score_right) */
    }, 1000)


    //time out para los cálculos de la hora inicial
    setTimeout(this.checkBonusDay, 1000)

    setInterval(() => {

      endDayL = score_left
      endDayC = score_center
      endDayR = score_right

      if (startDayL > endDayL) {
        totalDayL =  endDayL - startDayL
        console.log(totalDayL)
      }

    },10000)





  }


  update () {

  }

  checkBonusDay () {
    startDayL = score_left
    StartDayC = score_center
    StartDayR = score_right

    console.log(startDayL, StartDayC, StartDayR)
  }

  //Falta agregar algo para que los puntos SUBAN una vez lleven mucho tiempo las luces prendidas en un area. Un bono
  checkScore () {

    if (plusPoint === 'blue' && time % 5 === 0) {
        score_left = score_left + 6
    } else if (plusPoint === 'green' && time % 5 === 0) {
      score_center = score_center + 6
    } else if (plusPoint === 'red' && time % 5 === 0) {
      score_right = score_right + 6
    } else {
/*       console.log('todos sin luz') */
    }

    if (score_left === 998) {
      //cambiar el texto tb
      this.newTween(sobre_cerrado)
      msgText = opts[0][0].msg
      income = income + opts[0][0].cost

      opts[0].shift()
    } else if (score_left === 980) {

      this.newTween(sobre_cerrado2)

      msgText = opts[0][0].msg
      income = income + opts[0][0].cost

      opts[0].shift()
    } else if (score_left === 975) {

      this.newTween(this.sobre_cerrado3)

      msgText = opts[0][0].msg
      income = income + opts[0][0].cost

    }
  }

  newTween (tar) {
    return this.tweens.add({
      targets: tar,
      x: 450, //esto debe ser random
      ease: 'Cubic',
      repeat: 0,
      yoyo:false
    })
  }
}

