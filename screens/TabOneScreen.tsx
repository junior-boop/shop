import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import Layout from '../constants/Layout'

import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import DateLayout from '../components/Date';
import DetteLayout from '../components/detteLayout';
import Menu from '../components/menu';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme'



export default function TabOneScreen({ navigation }: RootStackScreenProps<'Home'>) {
  const colorSchema = useColorScheme()

  return (
    <SafeAreaView style = {{flex : 1}}>
      <View style =  {styles.container}>
        <ScrollView style = {{flex : 1}}>
          <View style = {{minHeight : Layout.window.height, padding : 16}}>
                 <DateLayout />
                 <DetteLayout navi ={ navigation } />
                 <Menu navigation = { navigation } />
                  <View style = {{width : 50, height : 50}}>
                    <TouchableOpacity
                      style ={{flexDirection : 'row', alignItems : 'center', borderRadius : 50, padding : 12, backgroundColor : Colors[colorSchema].elementBack  }}
                      onPress = {() => navigation.navigate('Parametres')}
                    >
                      <Ionicons name="settings-sharp" size={24} color={Colors[colorSchema].text} />
                    </TouchableOpacity>
                  </View>
                 <View style = {styles.vide} />
          </View>
        </ScrollView>
        <View style = {styles.calcPosition}>
          <TouchableOpacity 
            style = {styles.calc}
            onPress = {() => navigation.navigate('Modal')}
          >
              <Image
                source={require('../assets/images/calc_icon.png')}
                style =  {{
                  width : 32,
                  height : 32,
                  resizeMode : 'contain'
                }}
              />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  calcPosition : {
    position : 'absolute',
    bottom : 24,
    right : 16,
  },
  calc : {
    width :  62,
    height : 62,
    elevation : 10,
    borderRadius : 75,
    backgroundColor : '#ff0055',
    alignItems : 'center',
    justifyContent : 'center'
  }, 
  vide : {
    height : 62, 
    width : '100%'
  }
});
