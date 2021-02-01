enum RadioMessage {
    Up = 483,
    HI = 38118,
    message1 = 49434
}
Oscats.robotPeriodic(function () {
    radio.sendValue("Battery", Rover.BatteryLevel())
})
Oscats.teleopPeriodic(function () {
	
})
// This Logic should handle the radio for the remote. It i tested using this remote.
// 
// https://www.amazon.com/gp/product/B08HD557QJ/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        Oscats.setRobotMode(1)
    } else if (receivedString == "B") {
        Oscats.setRobotMode(2)
    }
})
radio.onReceivedValue(function (name, value) {
	
})
Oscats.autonomousPeriodic(function () {
	
})
