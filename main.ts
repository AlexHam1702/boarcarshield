let strip: neopixel.Strip = null
let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
let range = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) == 25) {
        Display.show(0)
        basic.pause(100)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
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
        strip = range.range(grove.measureInCentimeters(DigitalPin.P0) - -1, 3)
        for (let index = 0; index < 4; index++) {
            basic.showString("ATTENTION")
            strip.setPixelColor(255, neopixel.colors(NeoPixelColors.Red))
        }
        range.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
