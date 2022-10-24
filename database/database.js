import AsyncStorage from '@react-native-async-storage/async-storage';

export function GeneratedId(){
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'
    let b = ''

    for(let i = 0; i < 6; i++){
        let Random = Math.round(Math.random()*100*0.63)
        b += a[Random]
    }

    return b
}


export const SetItem = async (value) => {
    try{
        const object = {id : GeneratedId(), ...value}
    } catch (e) {
        console.log(e)
    }
} 


export const Database = [] 