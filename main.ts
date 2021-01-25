Oscats.robotPeriodic(function () {
    radio.sendValue("Battery", Rover.BatteryLevel())
})
Oscats.robotInit(function () {
    radio.setGroup(1)
})
Oscats.teleopPeriodic(function () {
    Rover.MotorRunDual(joystickbit.getRockerValue(joystickbit.rockerType.X) - joystickbit.getRockerValue(joystickbit.rockerType.Y), joystickbit.getRockerValue(joystickbit.rockerType.X) + joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
Oscats.autonomousPeriodic(function () {
    while (Rover.Ultrasonic() < 10) {
        Rover.MotorRunDual(50, 50)
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
