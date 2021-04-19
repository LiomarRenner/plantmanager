import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import wateringImg from '../../assets/watering.png';
import colors from '../../../styles/colors';

function Welcome(){
    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.images}/>

            <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text> > </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
        fontSize: 32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 38,
    },
    images:{
        width: 262,
        height: 254,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 16,
        marginBottom: 40,
        height: 60,
        width: 60,

    },
  });

export {Welcome};