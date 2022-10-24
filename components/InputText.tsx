import {View, Text} from './Themed'
import { useState, useReducer } from 'react'
import {Image, StyleProp, TextInput, TouchableNativeFeedback} from 'react-native'


import Colors from '../constants/Colors'
import useColorSheme from '../hooks/useColorScheme'
import {Database, GeneratedId} from '../database/database'
import * as ACTION from '../Reducer/action'
import { Reducer, initialState, ReducerKeyboard} from '../Reducer/reducer'

type InputProps = {
    placeholder ?: string, 
    style? : StyleProp<any>,
    styleParent ?: StyleProp<any>,
    placeholderTextColor? : string,  
}

export let isKeyboardOpen : boolean = false

export default function InputText({ placeholder, style, styleParent,placeholderTextColor } : InputProps){
    const [value, setValue] = useState<string | any>('')
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
    const colorSchema = useColorSheme()

    const [state, dispatch] = useReducer(Reducer, initialState)
    const [state2, display] = useReducer(ReducerKeyboard, false)

    const handlePress = () => {
        dispatch(ACTION.handleAdd({ id : GeneratedId(), name : value}));
        display(ACTION.handleKeyboardClose())
        console.log(Database)
        

    }
    
    return (
        <View style = {styleParent}>
            <TextInput
                value ={value}
                placeholder = {placeholder}
                placeholderTextColor = {placeholderTextColor}
                onChangeText = {setValue}
                style = {[style, {color : Colors[colorSchema].text}]}
                autoComplete = "name"
                autoFocus = {true}
                
            />
            <TouchableNativeFeedback
                onPress={() => handlePress()}
            >
                <View style = {{
                    width : 58, 
                    height : 58,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>
                    <Image 
                        source={require('../assets/images/check_icon.png')}
                        style  = {{
                            width : 18,
                            height : 14,
                            resizeMode : 'cover',
                            borderWidth : 1
                        }}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
