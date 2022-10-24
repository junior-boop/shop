import { Database } from "../database/database";
import * as ACTIONTYPE from './action_type'

export const initialState = {
    id : '',
    client : ''
}


export function Reducer(state = initialState, action : any) : any{
    switch (action.type){
        case ACTIONTYPE.AJOUTER :
            const obj = {
                id : action.payload.id,
                client : action.payload.client
            }
            return Database.push(obj)
        default:
            throw new Error('il ya un type non connu')
    }
}


export function ReducerKeyboard(state : boolean = false, action : any) : boolean{
    switch (action.type){
        case ACTIONTYPE.KEYBOARDOPEN :
            return state = true
        case ACTIONTYPE.KEYBOARDCLOSE :
            return state = false
        default:
            throw new Error('il ya un type non connu')
    }
}