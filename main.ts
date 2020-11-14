namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 . 8 8 . . . . . 
        . . . 8 8 8 8 8 . 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 . 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 . . 8 . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, extin, 70, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (p, e) {
    e.destroy()
    p.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player2, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let rock: Sprite = null
let water: Sprite = null
let extin: Sprite = null
let fire2 = null
scene.setBackgroundColor(7)
extin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . f . . f f f . . . . . . 
    . . . . . . . . . f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . 2 2 2 2 2 f f f . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    `, SpriteKind.Player)
extin.setPosition(0, 0)
controller.moveSprite(extin)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    rock = sprites.create(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, SpriteKind.Projectile)
    rock.setPosition(160, Math.randomRange(0, 120))
    rock.setVelocity(-50, 0)
})
game.onUpdateInterval(1000, function () {
    rock = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    rock.setPosition(160, randint(0, 120))
    rock.setVelocity(-50, 0)
})
