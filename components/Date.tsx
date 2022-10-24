import { StyleSheet } from "react-native";
import { View, Text } from "./Themed";

export default function DateLayout(){
    const InitDate = new Date()

    let jour = InitDate.getDate()
        let JourSem = InitDate.getDay()
        let Mois = InitDate.getMonth()


        let nom_mois = [
            'Janvier',
            'Fevier',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Septembre',
            'Octobre',
            'Novembre',
            'Decembre',
        ]

        let nom_jours = [
            'Dimanche',
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
        ]

    const DayCheck = (): string => {
        if(jour < 10){
            return `0${jour}`
        } else {
            return `${jour}`
        }
    }

    return(
        <View style = {{ marginVertical : 16}}>
            <View>
                <Text Bold style = {styles.mois}>{nom_jours[JourSem]}</Text>
            </View>
            <View>
                <Text Light style = {styles.jours}>{DayCheck()}, {nom_mois[Mois]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mois : {
        fontSize : 24,
        marginBottom : -5
    },
    jours : {
        fontSize : 52,
        marginTop : -5
    }
})