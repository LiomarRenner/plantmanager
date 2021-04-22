import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
}from 'react-native';

import { Button } from '../../components/Button';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Confirmation(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {'😎'}
                </Text>

                <Text style={styles.text}>
                    Prontinho
                </Text>    

                <Text style={styles.subText}>
                    Agora vamos começar a cuidar das suas plantinhas
                    com muito cuidado
                </Text>
            </View>

            <View style={styles.footer}>
                <Button 
                    title="Começar"

                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',

    },
    content: {
        flex:1,
        justifyContent:'center',
        width:'100%',
        padding:30,

    },
    emoji: {
        fontSize: 38,
        textAlign: 'center'
    },
    text: {
        fontSize:24,
        textAlign:'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
        lineHeight: 38,
    },
    subText: {
        fontSize:18,
        textAlign:'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical: 10,
    },
    footer: {
        marginTop:40,
        width:'100%',
        paddingHorizontal: 40,
        marginBottom:180,

    }
})

