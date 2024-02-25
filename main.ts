let toggle = 0
input.onButtonPressed(Button.A, function () {
    toggle = 1
})
input.onButtonPressed(Button.B, function () {
    toggle = 0
})
basic.forever(function () {
    if (toggle == 1) {
        servos.P0.setAngle(180)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.pause(500)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        servos.P0.setAngle(0)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (toggle == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # . # #
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # . # #
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # . # #
            # . . . #
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # . # .
            # . . . #
            `)
    } else {
    	
    }
})
