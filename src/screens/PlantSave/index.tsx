import React from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity,
}from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../../assets/waterdrop.png';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { Button } from '../../components/Button';

export function PlantSave(){
    return (
        <View style={styles.container}>

        <View style={styles.plantInfo}>
            <SvgFromUri
                uri=""
                height={150}
                width={150}
            />

            <Text style={styles.plantName}> Nome da Planta </Text>  
            <Text style={styles.plantAbout}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium dolorum delectus. 
                Earum similique nemo assumenda nostrum vel quidem, 
                cupiditate delectus accusamus ducimus magnam odio, quam at non quia? Tenetur? 
            </Text> 
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image 
                    source={waterdrop} 
                    style={styles.tipImage}
                />
                <Text style={styles.tipText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado: 
            </Text>

            <Button
                title="Cadastrar planta"
                onPress={() => {

                }}
            />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-between',
        backgroundColor: colors.shape,

    },
    plantInfo: {

    },
    plantName: {

    },
    plantAbout: {

    },
    controller: {

    },
    tipImage: {

    },
    tipText: {

    },
    alertLabel: {

    }
})

