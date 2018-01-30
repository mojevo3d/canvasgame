class Navigation {
  constructor (param = {}) {
    this.board = param.board || document
    this.user = param.user || null
    this.animSpeed = 10
    this.ctx = param.ctx
    this.view = param.view
    this.activeDirection = null
    this.animTime = 500
    this.init()
  }

  init () {
    this.board.addEventListener('keydown', (event) => {this.kays(event.keyCode)})
  }

  kays (keyCode) {
    switch (keyCode) {
      case 37:
        console.log(`left ${this.board}`)
        this.startTime = new Date().getTime()
        this.activeDirection = 'left'
        this.animInterval = setInterval(() => {this.animation('left')}, this.animSpeed)
        break
      case 39:
        console.log(`right ${this.board}`)
        this.startTime = new Date().getTime()
        this.activeDirection = 'right'
        this.animInterval = setInterval(() => {this.animation('right')}, this.animSpeed)
        break
      // case 38:
      //   console.log('up')
      //   break
      // case 40:
      //   console.log('down')
      //   break
    }
  }

  animation (direction) {
    this.stopInterval(direction)

    switch (direction) {
      case 'left':
        this.view.refresh()
        this.user.pos.x--
        this.view.pos.x--
        this.view.draw(this.ctx)
        this.user.draw(this.ctx)
        break
      case 'right':
        this.view.refresh()
        this.view.pos.x++
        this.user.pos.x++
        this.view.draw(this.ctx)
        this.user.draw(this.ctx)
        break
    }
  }

  stopInterval (direction) {

    if (this.activeDirection === direction) {
      console.log(`the same direction: ${direction}`)

      if (new Date().getTime() - this.startTime > this.animTime) {
        clearInterval(this.animInterval)
      }
    } else {
      clearInterval(this.animInterval)
    }

  }

}