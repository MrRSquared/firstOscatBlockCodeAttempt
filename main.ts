enum RadioMessage {
    Up = 483,
    HI = 38118,
    message1 = 49434
}
let color = 0
Oscats.robotPeriodic(function () {
    radio.sendValue("Battery", Rover.BatteryLevel())
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HI")
    Oscats.setChannel(0)
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
