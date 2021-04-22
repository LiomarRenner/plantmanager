import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { EnviromentButton } from '../../components/EnviromentButton';
import { Header } from '../../components/Header';

export function PlantSelect(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>    
                <Header />

                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
            </View>  

            <View>
                <FlatList 
                    data={[1,2,3,4,5]}
                    renderItem={({ item }) => (
                        <EnviromentButton title="Cozinha" active/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.background,
    },
    header: {
        paddingHorizontal:30
    },
    title: {
        fontSize: 18,
        backgroundColor: colors.background,
        fontFamily: fonts.heading,
        lineHeight:20,
        marginTop:15,

    },
    subtitle: {
        fontSize:18,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    enviromentList: {
        height: 40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:22,
        marginVertical:32,
    }
});