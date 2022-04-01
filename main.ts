let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) == 15) {
        Display.show(0)
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        Display.show(grove.measureInCentimeters(DigitalPin.P0))
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(300)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(300)
        }
    }
})
