number = 0

def on_button_pressed_a():
    basic.show_number(number)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_loop_always():
    global number
    number += 1

