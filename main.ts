pins.setPull(DigitalPin.P0, PinPullMode.PullNone)
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
basic.forever(function () {
    radio.setGroup(31)
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            if (pins.digitalReadPin(DigitalPin.P2) == 0) {
                radio.sendValue("sensa", 121)
            } else {
                radio.sendValue("sensa", 111)
            }
        } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            radio.sendValue("sensa", 113)
        } else {
            radio.sendValue("sensa", 101)
        }
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            radio.sendValue("sensa", 112)
        } else {
            radio.sendValue("sensa", 102)
        }
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendValue("sensa", 103)
    } else if (true) {
        radio.sendValue("sensa", 100)
    }
})
