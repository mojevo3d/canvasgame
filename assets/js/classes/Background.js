class Background {

  constructor () {
    this.layers = [
      {width: 800, height: 400, srcImg: 'assets/images/layer1.png', canvasId: 'bg_layer1'},
      {width: 800, height: 400, srcImg: 'assets/images/layer2.png', canvasId: 'bg_layer2'}
    ]

    this.init()
  }

  init () {
    this.drawAll()
  }

  drawAll () {
    for (let layer of this.layers) {
      let canvas = document.getElementById(layer.canvasId)
      canvas.width = 800
      canvas.height = 600
      let context = canvas.getContext('2d')
      let imageObj = new Image(layer.width, layer.height)

      imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0)
      }
      imageObj.src = layer.srcImg

      layer.canvas = canvas
      layer.context = context
    }
  }

}