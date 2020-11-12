sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    fire.destroy()
})
let fire: Sprite = null
fire = sprites.create(img`
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
scene.setBackgroundColor(7)
let extin = sprites.create(img`
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
game.onUpdateInterval(500, function () {
    fire.setPosition(160, Math.randomRange(0, 120))
    fire.setVelocity(-50, 0)
})