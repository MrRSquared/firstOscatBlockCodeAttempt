enum RadioMessage {
    Up = 483,
    HI = 38118,
    message1 = 49434
}
let speed = 0
let turn = 0
Oscats.robotPeriodic(function () {
    radio.sendValue("Battery", Rover.BatteryLevel())
})
Oscats.teleopPeriodic(function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, speed - turn)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, speed + turn)
})
// This Logic should handle the radio for the remote. I tested using this remote.
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
    if (name == "XAxis") {
        turn = value
    } else if (name == "YAxis") {
        speed = value
    }
})
let forward = false;
if (speed>0){
    speed = (((0+(Math.abs(speed)))/1)*255)+0;
    forward = true;
DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, speed)
} else if (speed<0){
    speed = (((0+(Math.abs(speed)))/1)*255)+0;
    forward = false;
DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, speed)
}
