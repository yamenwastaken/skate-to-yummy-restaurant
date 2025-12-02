namespace SpriteKind {
    export const projectile2 = SpriteKind.create()
    export const projectileBG1 = SpriteKind.create()
    export const deathbg = SpriteKind.create()
    export const getready = SpriteKind.create()
    export const bggrass = SpriteKind.create()
    export const mountains = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart) {
        if (isDead) {
            mySprite2 = sprites.create(assets.image`gameoverkitty`, SpriteKind.Player)
        } else {
            if (kittyOnGround) {
                kittyOnGround = false
            }
            if (!(kittyOnGround)) {
                kittyJump = true
                sprites.destroy(kittyriding)
                mySprite2 = sprites.create(assets.image`kittyRidingJump`, SpriteKind.Player)
                mySprite2.setPosition(25, 63)
                animation.runImageAnimation(
                mySprite2,
                assets.animation`kittyJumpAnim`,
                40,
                false
                )
                pause(670)
                sprites.destroy(mySprite2)
                kittyriding = sprites.create(assets.image`kittyRiding`, SpriteKind.Player)
                kittyriding.setPosition(42, 82)
                kittyJump = false
                waituntilstart = true
                kittyOnGround = true
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (!(gameStart)) {
        gameStart = true
        kittyOnGround = true
        rock = sprites.create(assets.image`rock`, SpriteKind.Enemy)
        rock.z += 3
        isDead = false
        rockExists = true
        score = 0
        kobedatrock = false
        waituntilstart = false
        rock.setPosition(144, 94)
        if (isDead) {
            mySprite = sprites.create(assets.image`gameoverkitty`, SpriteKind.Player)
        } else {
            scene.setBackgroundColor(9)
            mountains = sprites.create(assets.image`background`, SpriteKind.mountains)
            mountains.z = -10
            animation.runImageAnimation(
            mountains,
            assets.animation`mountains1`,
            200,
            true
            )
            kittyriding = sprites.create(assets.image`kittyRiding`, SpriteKind.Player)
            kittyriding.z = 10
            kittysExistence = true
            grassbg = sprites.create(assets.image`background`, SpriteKind.projectileBG1)
            animation.runImageAnimation(
            grassbg,
            assets.animation`bganim1`,
            8.5,
            true
            )
            grassanim1 = sprites.create(assets.image`background`, SpriteKind.bggrass)
            animation.runImageAnimation(
            grassanim1,
            assets.animation`grassanim1`,
            8.5,
            true
            )
            intro.x = 100000
            pressspace.x = 1000000
            kittyriding.setPosition(42, 82)
            pause(500)
            getready = sprites.create(assets.image`getreadymsg`, SpriteKind.getready)
            pause(2000)
            getready.x = 1000
            rock.setPosition(144, 94)
            rock.setVelocity(-120, 0)
        }
        if (!(gameStart)) {
            gameStart = true
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    kittyriding = sprites.create(assets.image`gameoverkitty`, SpriteKind.Player)
    isDead = true
    if (kittyJump) {
        kittyJump = false
    }
    if (kittysExistence) {
        kittysExistence = false
        mySprite3 = sprites.create(assets.image`kittyRiding0`, SpriteKind.Player)
        mySprite3.z = 10
        if (rockExists) {
            rockExists = false
        }
        if (!(isDead)) {
            isDead = true
        }
        if (isDead) {
            scene.setBackgroundColor(15)
            deathbg = sprites.create(assets.image`deathscreen`, SpriteKind.deathbg)
            deathbg.z = 0
            rock.x = 1000000000
            rock = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            grassbg.x = 10000
            kittyriding.x = 100000
            mySprite2.x = 1000000
            mySprite3.setPosition(42, 82)
            animation.runMovementAnimation(
            mySprite3,
            animation.animationPresets(animation.shake),
            200,
            false
            )
            pause(500)
            mySprite3.setPosition(41, 37)
            animation.runImageAnimation(
            mySprite3,
            assets.animation`owwwww`,
            100,
            false
            )
            kittyriding.x = 10000
            pause(3000)
            intro = sprites.create(assets.image`losemessage`, SpriteKind.Projectile)
            intro.setPosition(79, 38)
        }
        if (!(kittysExistence)) {
            kittyriding = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        }
    }
})
let deathbg: Sprite = null
let mySprite3: Sprite = null
let getready: Sprite = null
let grassanim1: Sprite = null
let grassbg: Sprite = null
let mountains: Sprite = null
let kobedatrock = false
let score = 0
let rock: Sprite = null
let waituntilstart = false
let kittyriding: Sprite = null
let kittyJump = false
let kittyOnGround = false
let mySprite2: Sprite = null
let isDead = false
let mySprite: Sprite = null
let pressspace: Sprite = null
let intro: Sprite = null
let rockExists = false
let gameStart = false
let kittysExistence = false
kittysExistence = false
gameStart = false
rockExists = false
scene.setBackgroundColor(2)
intro = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
pressspace = sprites.create(assets.image`pressspace`, SpriteKind.projectile2)
pressspace.setPosition(80, 91)
intro.setPosition(76, 55)
if (rockExists) {
    mySprite.x += 11
}
game.onUpdate(function () {
    if (rockExists) {
        if (rock.x < -30) {
            rock.x = 160
            kobedatrock = false
        }
        if (rock.x < kittyriding.x) {
            if (kobedatrock == false) {
                info.changeScoreBy(1)
                kobedatrock = true
            }
        }
        if (rock.x > kittyriding.x) {
            kobedatrock = false
        }
    }
})
