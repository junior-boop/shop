import * as ACTIONTYPE from './action_type'



type handleAddProps = {
    name? : string,
    id? : string
}

export function handleAdd({name = 'Daniel', id} : handleAddProps){
    return {
        type : ACTIONTYPE.AJOUTER,
        payload : {
            id : id, 
            client : name
        }
    }
}

export function handleKeyboardOpen(){
    return{
        type : ACTIONTYPE.KEYBOARDOPEN
    }
}
export function handleKeyboardClose(){
    return{
        type : ACTIONTYPE.KEYBOARDCLOSE
    }
}