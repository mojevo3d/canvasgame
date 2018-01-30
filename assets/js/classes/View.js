class View {

  constructor (params = {}) {
    this.width = params.width || 300
    this.height = params.height || 300
    this.pos = params.pos || {x: 0, y: 0}
    // this.objArr = params.objArr
    this.ctx = params.ctx
    this.game = params.game
  }

  draw () {
    this.ctx.strokeStyle = '#980502'
    this.ctx.beginPath()
    this.ctx.rect(this.pos.x, this.pos.y, this.width, this.height)
    this.ctx.stroke()
  }

  refresh () {
    console.log('refresh')
    this.ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height)
    this.game.refresh()
  }
}