input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
max7219_matrix.setup(
4,
DigitalPin.P12,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
let Musica = 0
let Texto = 0
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(233, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
})
basic.forever(function () {
    max7219_matrix.scrollText(
    "Estoy Comiendo",
    0,
    500
    )
})
