strip: neopixel.Strip = None

def on_robot_periodic():
    global strip
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Oscats.robot_periodic(on_robot_periodic)
