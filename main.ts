input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    plus_or_mines += 1
    if (plus_or_mines > 3) {
        plus_or_mines = 3
    }
    if (plus_or_mines < 0) {
        plus_or_mines = 0
    }
})
input.onButtonPressed(Button.B, function () {
    number2 += 1
    basic.showNumber(number2)
})
let _ = 0
let number2 = 0
let number = 0
let plus_or_mines = 0
plus_or_mines = -1
number = 0
number2 = 0
basic.forever(function () {
    if (plus_or_mines == 1) {
        _ = number + number2
        basic.showNumber(_)
    }
    if (plus_or_mines == 0) {
        _ = number - number2
        basic.showNumber(_)
    }
    if (plus_or_mines == 2) {
        _ = number * number2
        basic.showNumber(_)
    }
    if (plus_or_mines == 3) {
        _ = number / number2
        basic.showNumber(_)
    }
})
