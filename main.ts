/**
 * Miguel Lázaro Moguilnaia 2 ESO A
 */
input.onButtonPressed(Button.A, function () {
    if (lista[0]) {
        impar += -1
    } else if (lista[2]) {
        impar += -1
    } else if (lista[4]) {
        impar += -1
    } else if (lista[6]) {
        impar += -1
    } else if (lista[8]) {
        impar += -1
    } else {
        impar += 0
    }
})
input.onButtonPressed(Button.AB, function () {
    impar += 5
    par += 5
})
input.onButtonPressed(Button.B, function () {
    if (lista[1]) {
        par += -1
    } else if (lista[3]) {
        par += -1
    } else if (lista[5]) {
        par += -1
    } else if (lista[7]) {
        par += -1
    } else {
        par += 0
    }
})
let par = 0
let impar = 0
let lista: Image[] = []
lista = [
images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `),
images.createImage(`
    # # # . .
    . . . # .
    . # # . .
    # . . . .
    # # # # .
    `),
images.createImage(`
    . # # . .
    . . . # .
    . # # . .
    . . . # .
    . # # . .
    `),
images.createImage(`
    . . # # .
    . # . # .
    # . . # .
    # # # # .
    . . . # .
    `),
images.createImage(`
    # # # # .
    # . . . .
    # # # . .
    . . . # .
    # # # . .
    `),
images.createImage(`
    . . # # .
    . # . . .
    . # # # .
    # . . . #
    . # # # .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . . # . .
    . . # . .
    . . # . .
    `),
images.createImage(`
    . # # # .
    # . . . #
    . # # # .
    # . . . #
    . # # # .
    `),
images.createImage(`
    . # # # .
    # . . . #
    . # # # .
    . . . # .
    . # # . .
    `)
]
for (let index = 0; index < 1; index++) {
    for (let index = 0; index <= 4; index++) {
        basic.pause(200)
        led.plot(index, index)
    }
}
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    for (let index = 0; index <= 8; index++) {
        lista[randint(0, index)].showImage(0, 300)
    }
    if (input.temperature() > 20) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (impar == 0) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (par == 0) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
