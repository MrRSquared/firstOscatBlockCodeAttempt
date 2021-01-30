enum RadioMessage {
    message1 = 49434,
    HI = 38118,
    Up = 483
}
let color = 0
Oscats.robotPeriodic(function () {
    radio.sendValue("Battery", Rover.BatteryLevel())
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HI")
})
Oscats.robotInit(function () {
    radio.setGroup(1)
    radio.sendString("G'Day")
})
Oscats.teleopPeriodic(function () {
    Rover.MotorRunDual(joystickbit.getRockerValue(joystickbit.rockerType.X) - joystickbit.getRockerValue(joystickbit.rockerType.Y), joystickbit.getRockerValue(joystickbit.rockerType.X) + joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
radio.onReceivedString(function (receivedString) {
    if (color == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        color = 0
    } else if (receivedString == "B") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        color = 1
    }
})
Oscats.autonomousPeriodic(function () {
    while (Oscats.getTimer() <= 5) {
        Rover.MotorRunDual(-4, 4)
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
