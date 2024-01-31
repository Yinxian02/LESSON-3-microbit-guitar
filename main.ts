input.onButtonPressed(Button.A, function () {
    C = C / 2
    D = D / 2
    E = E / 2
    F = F / 2
    G = G / 2
    A = A / 2
    B = B / 2
})
input.onButtonPressed(Button.B, function () {
    C = C * 2
    D = D * 2
    E = E * 2
    F = F * 2
    G = G * 2
    A = A * 2
    B = B * 2
})
let p2 = 0
let p1 = 0
let p0 = 0
let B = 0
let A = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
C = 262
D = 294
E = 330
F = 349
G = 392
A = 440
B = 494
basic.forever(function () {
    p0 = pins.digitalReadPin(DigitalPin.P0)
    p1 = pins.digitalReadPin(DigitalPin.P1)
    p2 = pins.digitalReadPin(DigitalPin.P2)
    if (p0 == 1) {
        music.play(music.tonePlayable(C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("C")
        music.play(music.tonePlayable(E, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("E")
        music.play(music.tonePlayable(G, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("G")
    }
    if (p1 == 1) {
        music.play(music.tonePlayable(D, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("D")
        music.play(music.tonePlayable(F, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("F")
        music.play(music.tonePlayable(A, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("A")
    }
    if (p2 == 1) {
        music.play(music.tonePlayable(E, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("E")
        music.play(music.tonePlayable(G, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("G")
        music.play(music.tonePlayable(B, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("B")
    }
})
