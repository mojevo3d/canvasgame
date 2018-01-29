class Game {
  constructor (params = {}) {
    this.board = params.canvasId ? document.getElementById(params.canvasId) : document.getElementById('canvas')
    this.context = params.context || '2d'
    this.ctx = this.getContext()
    this.init()
  }

  init () {
    this.setWidth()
  }

  setWidth (width = 800, height = 400) {
    this.board.width = width
    this.board.height = height
  }

  getContext (context = this.context) {
    return this.board.getContext(context)
  }

  draw (obj) {
    obj.draw(this.ctx)
  }

  setStartPosition(obj){
    obj.pos.x = 0 + obj.width
    obj.pos.y = this.board.height - obj.height
  }

  refresh(){
    this.ctx.clearRect(0, 0, this.board.width, this.board.height)
  }
}