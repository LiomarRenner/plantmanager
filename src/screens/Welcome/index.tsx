import React from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    Image, 
    TouchableOpacity,
    Dimensions 
} from 'react-native';
import { Entypo} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image 
                source={wateringImg} 
                style={styles.images}
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={handleStart} 
            >    
                <Entypo 
                    name="chevron-right"
                    style={styles.buttonIcon}
                />
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight:38,
    },
    images:{
        height: Dimensions.get('window').width * 0.7,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
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
    buttonIcon:{
        color:colors.white,
        fontSize:26,

    }
  });

export {Welcome};