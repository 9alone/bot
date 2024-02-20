input.onButtonPressed(Button.A, function () {
    CyBit.TimePAUSE(5000)
    start()
})
function doSomething () {
    while (true) {
        if (CyBit.analogRead(CyBit.analogPort.A0) < 0 && (CyBit.analogRead(CyBit.analogPort.A1) < 0 && (CyBit.analogRead(CyBit.analogPort.A2) < 0 && CyBit.analogRead(CyBit.analogPort.A3) < 0))) {
            CyBit.Motor_Stop(motorCH.M1234)
            break;
        }
        CyBit.PID(
        Transmissions.Haft,
        50,
        0,
        0,
        [0, 1]
        )
    }
}
function turn () {
    CyBit.Motor_spin(motorTurn.Left, 40)
    CyBit.TimePAUSE(1200)
    CyBit.Motor_Stop(motorCH.M1234)
}
function ค่าแสง () {
    OLED12864_I2C.init(60)
    OLED12864_I2C.showNumber(
    0,
    0,
    CyBit.analogRead(CyBit.analogPort.A0),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    3,
    CyBit.analogRead(CyBit.analogPort.A1),
    1
    )
    OLED12864_I2C.showNumber(
    5,
    0,
    CyBit.analogRead(CyBit.analogPort.A2),
    1
    )
    OLED12864_I2C.showNumber(
    5,
    3,
    CyBit.analogRead(CyBit.analogPort.A3),
    1
    )
    OLED12864_I2C.draw()
    CyBit.TimePAUSE(2000)
}
input.onButtonPressed(Button.B, function () {
    ค่าแสง()
})
function start () {
    CyBit.Set_Line_Color(lineColor.Black, [
    CyBit.analogRead(CyBit.analogPort.A0),
    CyBit.analogRead(CyBit.analogPort.A1),
    CyBit.analogRead(CyBit.analogPort.A2),
    CyBit.analogRead(CyBit.analogPort.A3)
    ])
    CyBit.Set_Min_Value([
    0,
    1,
    0,
    0
    ])
    CyBit.Set_Max_Value([
    0,
    1,
    0,
    0
    ])
}
