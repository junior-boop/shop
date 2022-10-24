import {PixelRatio} from 'react-native'


export const screen = PixelRatio.get()




export function dateTime(){
    const date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()

    return `${hours} : ${min}`
}

export function IntlFormat(number : number): string{
    let final = ''
    let NewNumber = number.toString()
    return final
}