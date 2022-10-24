import { View, Text } from './Themed'
import { StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

import Layout from '../constants/Layout'
import Colors from '../constants/Colors';
import useColorSheme from '../hooks/useColorScheme'


type MenuProps = {
    navigation : any
}

export default function Menu({ navigation} : MenuProps)  {
    
    return (
        <View style ={{marginTop : 24}}>
            <Text Bold style = {{fontSize : 20}}>Menu</Text>
            <View style = {styles.menu}>
                <Bouton index='fact' title='Facturier' onPress={() => navigation.navigate('Facture')}/>
                <Bouton index='inv' title='Inventaire' onPress={() => navigation.navigate('Invent')}/>
                <Bouton index='stat' title='Stats' onPress={() => navigation.navigate('Stats')}/>
                <Bouton index='client' title='Clientèle' onPress={() => navigation.navigate('Clientele')}/>
            </View>
        </View>
    )
}

type boutonProps = {
    onPress? : () => void;
    title : string,
    index : 'fact' | 'inv' | 'stat' | 'client'
}

const dataImage = [
    {id : 1,
    index : 'fact', 
    image : require('../assets/images/facture.png')
    },
    {id : 2,
    index : 'inv', 
    image : require('../assets/images/inventaire.png')
    },
    {id : 3,
    index : 'stat', 
    image : require('../assets/images/statistique.png')
    },
    {id : 4,
    index : 'client', 
    image : require('../assets/images/clientele.png')
    },
]

function Bouton({onPress, title, index } : boutonProps){
    const src = dataImage.filter(el => el.index === index)
    const colorSchema = useColorSheme()
    
    return (
        <TouchableNativeFeedback
            onPress={onPress}
            
        >
            <View style = {{backgroundColor: Colors[colorSchema].elementBack , ...styles.btn}}>
                <View>
                    <Text Bold style = {{ fontSize : 24, color : Colors[colorSchema].text}}>{title}</Text>
                </View>
                <View style = {{position : 'relative'}}>
                       <Image source={src[0].image} style = {{position : 'absolute', width : 120, height : 120, resizeMode : 'contain', right : -30, bottom : -40}} />
                </View>
                
            </View>
        </TouchableNativeFeedback>
    )
}


function pourcentOf(a : number, b : number) : number{
    let x = a * b/100
    return x
}


const styles = StyleSheet.create({
    menu : {
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'space-between',
        marginVertical : 16,
        height : Layout.window.width - 32
    }, 
    btn : {
        borderRadius: 16,
        width : pourcentOf(Layout.window.width, 44),
        height : pourcentOf(Layout.window.width, 44),
        padding : 16,
        justifyContent : 'space-between',
        overflow : 'hidden'
    }
})