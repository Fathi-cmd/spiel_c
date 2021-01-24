input.onButtonPressed(Button.A, function () {
    faengerin.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    faengerin.turn(Direction.Left, 90)
})
let faengerin: game.LedSprite = null
faengerin = game.createSprite(2, 2)
let Ziel = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
basic.forever(function () {
    if (game.score() < 5) {
        faengerin.ifOnEdgeBounce()
        faengerin.move(1)
        basic.pause(100)
        if (faengerin.isTouching(Ziel)) {
            game.addScore(1)
            Ziel.delete()
            Ziel = game.createSprite(randint(0, 4), randint(0, 4))
        }
    } else {
        game.gameOver()
    }
})
