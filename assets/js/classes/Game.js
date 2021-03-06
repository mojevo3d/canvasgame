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

  setWidth (width = 800, height = 600) {
    this.board.width = width
    this.board.height = height
  }

  getContext (context = this.context) {
    return this.board.getContext(context)
  }

  draw (obj) {
    obj.draw(this.ctx)
  }

  setUserPosition (obj, view) {
    obj.pos.x = view.width / 2
    obj.pos.y = this.board.height - obj.height
  }

  setViewPos (obj) {
    obj.pos.x = 0
    obj.pos.y = this.board.height - obj.height
  }

  refresh(){
    this.ctx.clearRect(0, 0, this.board.width, this.board.height)
  }

}