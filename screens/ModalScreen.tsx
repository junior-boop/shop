import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('')
  const [affiche, setAffiche] = useState('0')
  const [result, setResult] = useState<Number | null>(null)

  const handNumberPress = (press : string) => {
    if(firstNumber === '0'){
      setFirstNumber(press)
    } else {
      setFirstNumber(firstNumber + press)
    }
  }

  const handOparator = (press : string) => {
    setOperator(press)
    setSecondNumber(firstNumber)
    setAffiche(firstNumber)
    setFirstNumber('0')
  }

  const check = () => {
    switch (operator) {
      case '+':
        if(affiche !== ''){
          setAffiche(parseFloat(secondNumber) + parseFloat(firstNumber))
          setSecondNumber(affiche)
        }     
        break;
      case '-':
        if(affiche !== ''){
          setAffiche(parseFloat(affiche) - parseFloat(firstNumber))
          setSecondNumber(affiche)
        } 
        break;
      case 'x':
        if(affiche !== ''){
          setAffiche(parseFloat(affiche) * parseFloat(firstNumber))
          setSecondNumber(affiche)
        } 
        break;
      case '/':
        if(affiche !== ''){
          setAffiche(parseFloat(affiche) / parseFloat(firstNumber))
          setSecondNumber(affiche)
        } 
        break;
      
    }

  }

  const handCleanPress = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperator('')
    setAffiche('')
    setResult(null)
  }

  const FirstNumberDisplay = () => {
    if(result != null) {
      return <Text style = {result < 100000000 ? [styles.TextValue, {fontWeight : '200'}] : styles.TextValue}>{result.toString()}</Text>
    }

    if(firstNumber && firstNumber.length < 7){
      return <Text style = {styles.TextValue}>{firstNumber}</Text>
    }

    if(firstNumber === ''){
      return <Text style = {styles.TextValue}>0</Text>
    }

    if(firstNumber.length > 6 && firstNumber.length < 12){
      return <Text style = {{fontSize : 62, fontWeight : '200'}}>{firstNumber}</Text>
    }

    if(firstNumber.length > 11){
      return <Text style = {{fontSize : 62, fontWeight : '200', color : 'red'}}>{firstNumber}</Text>
    }
  }

  const Result = () => {
    switch (operator) {
      case '+':
        setResult(parseFloat(secondNumber) + parseFloat(firstNumber))
        setSecondNumber(result)
        setAffiche('')        
        break;
      case '-':
        setResult(parseFloat(secondNumber) - parseFloat(firstNumber))
        setSecondNumber(result)
        setAffiche('')
        break;
      case 'x':
        setResult(parseFloat(secondNumber) * parseFloat(firstNumber))
        setSecondNumber(result)
        setAffiche('')
        break;
      case '/':
        setResult(parseFloat(secondNumber) / parseFloat(firstNumber))
        setSecondNumber(result)
        setAffiche('')
        break;
      default:
        handCleanPress();
        break;
    }
  }
  // const handNumberPress = (press : string) => {
  //   setFirstNumber(firstNumber + press)
  // }
  useEffect(() : void=>{
    return check()
  }, [firstNumber])
  return (
    <View style={styles.container}>
      <View style = {styles.screen}>
          <Text style = {styles.SecondValue}>
            {affiche === "0" ? '': affiche}
          </Text>
          {FirstNumberDisplay()}
      </View>
      <View style = {{ height : 450 , width : '100%',}}>
        <View style = {{ flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'space-between', height : '100%', alignContent : 'space-between', padding : 16}}>
          <Bouton title='C' isClean onPress={() => handCleanPress()} />
          <Bouton title='+/-' isOperator />
          <Bouton title='<x' isOperator />

          <Bouton title='/' isOperator onPress={() => handOparator('/')} />
          <Bouton title='7' onPress={() => handNumberPress('7')} />
          <Bouton title='8' onPress={() => handNumberPress('8')} />
          <Bouton title='9' onPress={() => handNumberPress('9')} />

          <Bouton title='x' isOperator onPress={() => handOparator('x')} />
          <Bouton title='4' onPress={() => handNumberPress('4')} />
          <Bouton title='5' onPress={() => handNumberPress('5')} />
          <Bouton title='6' onPress={() => handNumberPress('6')} />

          <Bouton title='-' isOperator onPress={() => handOparator('-')} />
          <Bouton title='1' onPress={() => handNumberPress('1')} />
          <Bouton title='2' onPress={() => handNumberPress('2')} />
          <Bouton title='3' onPress={() => handNumberPress('3')} />

          <Bouton title='+' isOperator onPress={() => handOparator('+')} />
          <Bouton title='0' isZero onPress={() => handNumberPress('0')}/>
          <Bouton title='.' onPress={() => handNumberPress('.')} />
          <Bouton title='=' isEgal onPress={() => Result()}/>
        </View>
      </View>
    </View>
  );
}
type boutonProps = {
  onPress? : () => void,
  title : string,
  isZero? : boolean,
  isEgal? : boolean,
  isOperator? : boolean,
  isClean? : boolean
}

const Bouton = ({onPress, title, isEgal, isOperator, isZero, isClean}: boutonProps ) => {
  return(
    <TouchableOpacity 
      style = {
            isEgal
          ? styles.bottom_E 
          : isOperator
          ? styles.bottom_O
          : isZero 
          ? styles.bottom_0
          : isClean
          ? styles.bottom_C
          : styles.bottom
      }

      onPress = {onPress}
    >
      <Text style = {
          isClean
        ? styles.cleanText 
        : isOperator 
        ? styles.operatorText
        : styles.TextBtn
      }>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen : {
    flex : 1, 
    width : '100%',
    alignItems : 'flex-end',
    padding : 16, 
    justifyContent : 'flex-end'
  },
  TextValue : {
    fontSize : 80,
    fontWeight : '200'
  },
  SecondValue : {
    fontSize : 32,
    fontWeight : '400'
  },
  TextBtn: {
    fontSize : 28,
    fontWeight : '500'
  },
  bottom_0: {
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 41,
    height : 72, width : 156,
  },
  bottom_E: {
    backgroundColor : '#0fc',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 41,
    height : 72, width : 72,
  },
  bottom_C: {
    backgroundColor : '#f05',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 41,
    height : 72, width : 72,
  },
  bottom_O: {
    backgroundColor : '#555',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 41,
    height : 72, width : 72,
  },
  bottom: {
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 41,
    height : 72, width : 72,
  },
  cleanText : {
    color : 'white',
    fontSize : 28,
    fontWeight : '500'
  },
  operatorText : {
    color : 'white',
    fontSize : 28,
    fontWeight : '500'
  }
});
