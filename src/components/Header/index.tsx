import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import userImg from '../../../src/assets/userImg.png';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();

    },[]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image 
                source={userImg}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        marginTop: getStatusBarHeight(),
        //backgroundColor:"#232323"
    },
    greeting: {
        fontSize:32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize:32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight:40,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },  
})

