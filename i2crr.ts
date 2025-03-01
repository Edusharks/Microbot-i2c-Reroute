//% color=#0000FF 
//% icon="\uf074"
//% block="i2c Reroute"
//% group="micro:bit (V2)"
namespace i2crr {
    //% blockId="setI2CPins" block="set i2c data to %sdaPin and clock to %sclPin|"
    //% shim=i2crr::setI2CPins
    //% sdaPin.defl=DigitalPin.P1 sclPin.defl=DigitalPin.P5
    //% group="micro:bit (V2)"
    export function setI2CPins(sdaPin: DigitalPin, sclPin: DigitalPin): void {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        0;
    }

    // Block to send a number to a specific I2C address
    //% blockId="sendI2CNumber" block="send number %value to address %address"
    //% shim=i2crr::sendI2CNumber
    //% address.min=0 address.max=127
    //% group="micro:bit (V2)"
    export function sendI2CNumber(address: number, value: number): void {
        0;
    }

    // Block to send a string to a specific I2C address
    //% blockId="sendI2CString" block="send string %value to address %address"
    //% shim=i2crr::sendI2CString
    //% address.min=0 address.max=127
    //% group="micro:bit (V2)"
    export function sendI2CString(address: number, value: string): void {
        0;
    }

    // Block to receive a number from a specific I2C address
    //% blockId="receiveI2CNumber" block="receive number from address %address"
    //% shim=i2crr::receiveI2CNumber
    //% address.min=0 address.max=127
    //% group="micro:bit (V2)"
    export function receiveI2CNumber(address: number): number {
        return 0;
    }

    // Block to receive a string from a specific I2C address
    //% blockId="receiveI2CString" block="receive string from address %address"
    //% shim=i2crr::receiveI2CString
    //% address.min=0 address.max=127
    //% group="micro:bit (V2)"
    export function receiveI2CString(address: number): string {
        return "";
    }
}

