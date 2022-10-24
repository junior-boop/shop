import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Layout from '../constants/Layout'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { dateTime } from '../constants/general';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import DateLayout from '../components/Date';
import DetteLayout from '../components/detteLayout';
import Menu from '../components/menu';



export default function Stats({ navigation }: RootStackScreenProps<'Home'>) {
  
return (
    <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
});