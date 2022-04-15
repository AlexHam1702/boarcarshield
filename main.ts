let strip: neopixel.Strip = null
let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
let range = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    if (grove.measureInCentimeters(DigitalPin.P2) >= 25) {
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
        strip = range.range(grove.measureInCentimeters(DigitalPin.P0) / 3, -1)
        for (let index = 0; index < 4; index++) {
            basic.showString("ATTENTION")
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        range.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
