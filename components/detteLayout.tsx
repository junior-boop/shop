import { View, Text } from "./Themed";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ReactElement } from "react";

import { LinearGradient } from "expo-linear-gradient";
import  useColorScheme  from "../hooks/useColorScheme";
import Colors  from '../constants/Colors'

const Data = [
    {
        'nom' : 'Etame',
        'dette' : 15000,
    },
    {
        'nom' : 'Etame',
        'dette' : 15000,
    },
    
]


type DetteLayoutProps = {
    navi : any
}

export default function DetteLayout({ navi }: DetteLayoutProps){
    const colorSchema = useColorScheme()


    const Total = ():number => {
        let toto : number = 0
        
        Data.forEach(el => {
            toto += el.dette
        })

        return toto
    }


    const ClientDette = () => {
       return (
        Data.map((el, key:number) => {
            return(
                <Client key = {key} index={key + 1} nom = {el.nom} somme = {el.dette} onPress = {() => navi.navigate('Client', {id : el.nom})} />
            )
        })
       )
    }

    const DetteElement = () => {
        if(Data.length < 1) {
            return (
                <View style = {{paddingHorizontal :16, paddingVertical : 12, alignItems : "center"}}>
                    <Text style = {{ color : '#bbb' }}>Vous n'avez aucune dette dehors</Text>
                </View>
            )
        } else {
            return(
                <>
                    <View style  = {{borderBottomColor : Colors[colorSchema].lineColor,...styles.header}}>
                        <Text Bold style = {styles.TextHeader}>Les dettes</Text>
                        <Text Bold style = {styles.TextHeader}>{Total()} XAF</Text>
                    </View>
                    <View style = {styles.content}>
                        {ClientDette()}
                    </View>
                    {Btn()}
                    <View style = {{borderTopWidth : 1, borderTopColor : Colors[colorSchema].lineColor, paddingHorizontal : 16, paddingVertical : 7}}>
                        <Text style = {{fontSize : 12, color : '#aaa'}}>La liste des dettes enregistrées</Text>
                    </View>
                </>
            )
        }
    }

    const Btn = () => {
        if(Data.length > 3){
            return (
                <LinearGradient 
                    colors= {['transparent', Colors[colorSchema].elementBack]}
                    style  = {styles.btn}
                >
                    <TouchableOpacity
                        style = {styles.btnLayout}
                        onPress = {() => navi.navigate('Calc')}
                    >
                        <View>
                            <Text>Voir plus</Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            )
        }
    }


    return (
        <View  style ={{marginTop : 24}}>
            {Data.length > 0 ? (<Text Bold style = {{fontSize : 20}}>Dettes</Text>) : null}
            <View style = {{backgroundColor : Colors[colorSchema].elementBack ,...styles.box}}>
                {DetteElement()}
            </View>
        </View>
    )
}


type ClientsDetteProps = {
    onPress? : () => void
    index : number,
    nom : string,
    somme : number
}

export function Client({index, nom, somme, onPress} : ClientsDetteProps) : ReactElement{
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style = {styles.clients}>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between' }}>
                    <View style = {{ flexDirection : 'row', }}>
                        <Text style = {{ marginRight : 12}}>{index}.</Text>
                        <View>
                        <Text Bold style = {{fontSize : 18}}>{nom}</Text>
                        <Text style = {{fontSize : 13, color : 'gray'}}>Le 12 janvier 2022</Text>
                        </View>
                    </View>
                    <Text>{somme} XAF</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    box : {
        borderRadius : 16,
        marginVertical : 16,
        overflow : 'hidden'
    },
    header : {
        padding : 12,
        paddingHorizontal : 16,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : 1
    },
    TextHeader : {
        fontWeight : '400',
        color : '#0af'
    },
    clients : {
        paddingHorizontal: 16,
        paddingVertical : 16
    },

    btn : {
        paddingHorizontal : 12,
        paddingVertical : 7,
        alignItems : 'center',
    },
     btnLayout : {
        borderRadius : 30,
        borderWidth : 1,
        borderColor : 'silver',
        width : '50%',
        alignItems : 'center',
        padding : 7
     },
     content : {
        maxHeight : 150,
     }
})