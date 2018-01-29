class Navigation {
  constructor (param = {}) {
    this.board = param.board || document
    this.init()
  }

  init () {
    this.board.addEventListener('keydown', (event) => {this.kays(event.keyCode)})
  }

  kays (keyCode) {
    switch (keyCode) {
      case 37:
        this.left()
        break
      case 39:
        this.right()
        break
      // case 38:
      //   console.log('up')
      //   break
      // case 40:
      //   console.log('down')
      //   break
    }
  }

  right () {
    console.log(`right ${this.board}`)
  }

  left () {
    console.log(`left ${this.board}`)
  }
}