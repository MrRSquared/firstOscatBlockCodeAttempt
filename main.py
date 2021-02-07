def on_teleop_periodic():
    basic.show_icon(IconNames.HEART)
Oscats.teleop_periodic(on_teleop_periodic)

def on_autonomous_periodic():
    basic.show_icon(IconNames.HAPPY)
Oscats.autonomous_periodic(on_autonomous_periodic)
