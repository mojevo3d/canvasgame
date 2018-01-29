class User{
  constructor (params = {}) {
    this.width = params.width || 20
    this.height = this.width // ball
    this.pos = params.pos || {x: 20, y: 240}
    this.radius = 20
  }

  draw (ctx) {
    ctx.strokeStyle = '#000'
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.width, 0, 2 * Math.PI)
    ctx.stroke()
  }
}