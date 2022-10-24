import { useContext, useEffect, useState, useReducer } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, TouchableWithoutFeedback } from 'react-native';

import Layout from '../constants/Layout';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import InputText from '../components/InputText'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { Reducer, ReducerKeyboard } from '../Reducer/reducer';
import { handleKeyboardOpen } from '../Reducer/action';




export default function NotFoundScreen({ navigation }: RootStackScreenProps<'Facture'>) {
  // Save()
  const [state, dispatch] = useReducer(ReducerKeyboard, false)
  const [value, setValue] = useState<String>('')
  const colorSchema = useColorScheme()
  // const [state, dispatch] = useReducer(Reducer, {})


  const AddClient = () => {

    if (state) {
      return (
        <>
          <TouchableWithoutFeedback
            
          >
            <View
              style={{
                backgroundColor: '#0005',
                position: 'absolute',
                width: width,
                height: height,
                zIndex: 1
              }}
            />
          </TouchableWithoutFeedback>
          <View style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 20
          }} >
            <InputText
              placeholder='le nom du client'
              placeholderTextColor = {Colors[colorSchema].placeholderColor}
              style={{...styles.input}}
              styleParent={{backgroundColor : Colors[colorSchema].elementBack , borderTopWidth : 1,...styles.inputContainer}}
            />
          </View>
        </>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={() => dispatch(handleKeyboardOpen())}
          style={{
            position: 'absolute',
            bottom: 24,
            right: 16
          }} >
          <View style={{
            borderRadius: 40,
            width: 62,
            height: 62,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor : '#00B91C',
            elevation : 10
          }}>
            <Image
              source={require('../assets/images/icon_plus.png')}
              style={{
                width: 32,
                height: 32,
                resizeMode: 'contain'
              }}
            />
          </View>
        </TouchableOpacity>
      )
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <View>
          <Text>
            je suis la
          </Text>
        </View>
        <View></View>
      </View>
      {AddClient()}
    </KeyboardAvoidingView>
  );
}


const width = Layout.window.width
const height = Layout.window.height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  inputContainer: {
    width: width,
    elevation: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1
  }
});
