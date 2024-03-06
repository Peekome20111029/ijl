input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("hi")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
radio.setGroup(1)
basic.forever(function () {
    music.play(music.stringPlayable("B C5 D G F A F C5 ", 120), music.PlaybackMode.UntilDone)
})
