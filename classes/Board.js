class Board {
  constructor (params = {}) {
    this.canvas = params.canvasId ? document.getElementById(params.canvasId) : document.getElementById('canvas')
    this.context = params.context || '2d'
    this.ctx = this.getContext()
    this.init()
  }

  init () {
    console.log('init board')
    this.setWidth()
  }

  setWidth (width = 800, height = 600) {
    this.canvas.width = width
    this.canvas.height = height
  }

  getContext (context = this.context) {
    return this.canvas.getContext(context)
  }
}