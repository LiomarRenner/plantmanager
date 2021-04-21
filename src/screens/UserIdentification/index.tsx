import React from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    View,
    TextInput
} from 'react-native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { Button } from '../../components/Button';

function UserIdentification(){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        😀{'\n'}
                    </Text>

                    <Text style={styles.text}>
                        Como podemos {'\n'}
                        chamar você?
                    </Text>

                    <TextInput 
                        style={styles.input}
                        placeholder="Digite um nome"
                    />

                    <View style={styles.footer}>
                        <Button/>
                    </View>
                    
                </View>
            </View>
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