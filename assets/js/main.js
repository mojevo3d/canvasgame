// init board
const game = new Game()
// init user
const user = new User()
// init view
const view = new View({game: game,ctx: game.ctx})

// init bg layer
const bgs = new Background()

game.setViewPos(view)
game.setUserPosition(user, view)

game.draw(user)
game.draw(view)

// init navigation
const navi = new Navigation({user: user, ctx: game.ctx, view: view, bg:bgs})


