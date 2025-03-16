basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 315), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . # #
        . . . # #
        `)
})
