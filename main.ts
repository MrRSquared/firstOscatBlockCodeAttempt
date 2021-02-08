Oscats.on(RobotControl.RobotInit, function () {
    basic.showIcon(IconNames.Yes)
})
Oscats.driveMode(RobotMode.TelePeriodic, function () {
    basic.showIcon(IconNames.Heart)
})
Oscats.driveMode(RobotMode.AutoPeriodic, function () {
    basic.showIcon(IconNames.Happy)
})
Oscats.on(RobotControl.RobotPeriodic, function () {
    basic.showIcon(IconNames.SmallHeart)
})
