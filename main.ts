let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) == 15) {
        Display.show(0)
        basic.pause(100)
    } else {
        Display.show(grove.measureInCentimeters(DigitalPin.P0))
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(300)
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
