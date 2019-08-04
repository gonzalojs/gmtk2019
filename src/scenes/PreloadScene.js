
import Monster from '../libs/monster.js'

export default class PreloadScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'PreloadScene'
    })
  }
  preload () {
    console.log('Preload Scene')
    this.monster = new Monster(this, 400, 200)
    this.monster.update()

    //progress bar
    let progressBar = this.add.graphics()
    let progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(240, 270, 320, 50)

    let width = this.cameras.main.width
    let height = this.cameras.main.height
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })
    loadingText.setOrigin(0.5, 0.5)

    let percenText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: "#ffffff"
      }
    })
    percenText.setOrigin(0.5, 0.5)

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'ffffff'
      }
    })
    assetText.setOrigin(0.5, 0.5)

    //update progress bar
    this.load.on('progress', (value) => {
      percenText.setText(parseInt(value * 100) + '%')
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 280, 300 * value, 30)
    })

    this.load.on('fileprogress', () => {
      assetText.setText('Loading asset: ' + File.key)
    })

    //remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy()
      progressBox.destroy()
      loadingText.destroy()
      percenText.destroy()
      assetText.destroy()
      this.ready()
    }.bind(this))

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this)

    this.load.image('background', 'src/assets/images/background.png')
    this.load.image('top', 'src/assets/images/top.png')
    this.load.image('bottom', 'src/assets/images/bottom.png')
    this.load.image('panel', 'src/assets/images/panel.png')
    this.load.image('compu', 'src/assets/images/compu.png')
    this.load.image('map', 'src/assets/images/map2.png')
    this.load.image('desk', 'src/assets/images/desk.png')
    //panel buttons
    this.load.image('bu_one', 'src/assets/images/panel1.png')
    this.load.image('bu_two', 'src/assets/images/panel2.png')
    this.load.image('bu_three', 'src/assets/images/panel3.png')
    //ampolletas
    this.load.image('bombilla_on', 'src/assets/images/bombilla_prendida.png')
    this.load.image('bombilla_off', 'src/assets/images/bombilla_apagada.png')
    //botones
    this.load.image('blue_button_on', 'src/assets/images/blue_button_on.png')
    this.load.image('blue_button_off', 'src/assets/images/blue_button_off.png')
    this.load.image('green_button_on', 'src/assets/images/green_button_on.png')
    this.load.image('green_button_off', 'src/assets/images/green_button_off.png')
    this.load.image('red_button_on', 'src/assets/images/red_button_on.png')
    this.load.image('red_button_off', 'src/assets/images/red_button_off.png')

    //preload
    this.load.image('map_left', 'src/assets/images/map_home.png')
    this.load.image('map_center', 'src/assets/images/map_center.png')
    this.load.image('map_right', 'src/assets/images/map_rich.png')

    //sobres
    this.load.image('sobre_cerrado', 'src/assets/images/sobre_cerrado.png')
    this.load.image('sobre_abierto', 'src/assets/images/sobre_abierto.png')


/*     for (let i = 0; i < 500; i++) {
      this.load.image('logos'+i, 'src/assets/spritesheets/big-monster-sprite.png')
    } */

  }

  create () {

    this.scene.start('MenuScene')
  }

  update () {

    console.log(hola)

  }

  init () {
    this.readyCount = 0
  }

  ready () {
    this.readyCount++
    if (this.readyCount === 2) {
      console.log('ready')
      /* this.scene.start('TitleScene') */
      this.scene.start('GameScene')
    }
  }

}