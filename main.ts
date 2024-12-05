function istZielErreicht () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        istZielVar = true
    } else {
        istZielVar = false
    }
    return istZielVar
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (istZielErreicht()) {
        basic.setLedColor(0x00ff00)
        maqueen.setColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.setLedColor(0xff0000)
        maqueen.setColor(0xff0000)
        basic.showIcon(IconNames.No)
    }
})
let istZielVar = false
istZielVar = false
basic.setLedColor(0x0000ff)
maqueen.setColor(0x0000ff)
basic.showString("A")
