import React, { useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

import { Button } from '../../components/Button';

function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() { 
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){ setIsFocused(true);}

    function handleInputChange(value: string) { 
        setIsFilled(!!value);
        setName(value);
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        {isFilled ? '😀' : '😎'}
                    </Text>

                    <Text style={styles.text}>
                        Como podemos {'\n'}
                        chamar você?
                    </Text>

                    <TextInput 
                        style={[
                            styles.input,
                            (isFocused || isFilled) && { borderColor: colors.green}
                        ]}
                        placeholder="Digite um nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />

                    <View style={styles.footer}>
                        <Button/>
                    </View>
                    
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',

    },
    content: {
        flex:1,
        width:'100%',

    },
    form: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center',
    },
    emoji: {
        fontSize: 48
    },
    text: {
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color:colors.heading,
        width:'100%',
        fontSize:18,
        marginTop: 50,
        padding:10,
        textAlign:'center',
    },
    footer: {
        marginTop:40,
        width:'100%',

    }
})

export {UserIdentification};