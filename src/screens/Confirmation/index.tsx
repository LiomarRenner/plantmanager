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

import { useNavigation, useRoute } from '@react-navigation/core';


interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon:'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😎'

}

export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();
    
    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen

    } = routes.params as Params;

     function handleMoveOn(){
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.text}>
                    {title}
                </Text>    

                <Text style={styles.subText}>
                    {subtitle}
                </Text>
            </View>

            <View style={styles.footer}>
                <Button 
                    title={buttonTitle}
                    onPress={handleMoveOn}
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

