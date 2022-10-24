import { Image, TouchableOpacity } from "react-native";
import { View } from "./Themed";

type btnProps = {
    navigation : any,
    styles : any
}
export function BtnPlus({navigation, styles} : btnProps){
    return(
        <View style = {styles.calcPosition}>
          <TouchableOpacity 
            style = {styles.calc}
            onPress = {() => navigation.navigate('Modal')}
          >
              <Image
                source={require('../assets/images/icon_plus.png')}
                style =  {{
                  width : 32,
                  height : 32,
                  resizeMode : 'contain'
                }}
              />
          </TouchableOpacity>
        </View>
    )
}