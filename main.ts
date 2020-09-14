radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.clearScreen()
    }
})
basic.showString("ringer")
radio.setGroup(197)
