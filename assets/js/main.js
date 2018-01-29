// init board
const game = new Game()
// init navigation
const navi = new Navigation(game.board)
// init user
const user = new User()

game.setStartPosition(user)
game.draw(user)

