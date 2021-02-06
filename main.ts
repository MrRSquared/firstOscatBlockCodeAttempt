let strip: neopixel.Strip = null
Oscats.robotPeriodic(function () {
    basic.showString("" + (Oscats.getTimer()))
})
Oscats.robotInit(function () {
    strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
})
Oscats.teleopPeriodic(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
})
Oscats.disabledPeriodic(function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    strip.clear()
    strip.show()
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
})
Oscats.autonomousPeriodic(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 66)
})
