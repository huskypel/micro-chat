input.onButtonPressed(Button.A, function () {
    radio.sendString("àj'aime le poulet nature genre tes poule")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(21)
