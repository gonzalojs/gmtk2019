export default Rich = {
  checkScore: function (score) {
    switch (score) {
      case 5:
        console.log('Hey, could you give us some more light?')
        break
      case 10:
        console.log('come on, we need more light')
        break
      case 20:
        console.log('Why do you hate us')
        break
      default:
        console.log('This is the default log')
    }
  }
}