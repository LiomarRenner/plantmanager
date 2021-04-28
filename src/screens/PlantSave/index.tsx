import React, {useEffect, useState} from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import waterdrop from '../../assets/waterdrop.png';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { Button } from '../../components/Button';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { format, isBefore } from 'date-fns';
import { loadPlant, PlantProps, savePlant } from '../../libs/storage';
interface Params {
    plant: PlantProps
}

export function PlantSave(){
    const route = useRoute();
    const { plant } = route.params as Params; 
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

    const navigation = useNavigation();

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState);
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());  
             
            return Alert.alert('escolha uma hora no futuro');
        }

        if(dateTime)
            setSelectedDateTime (dateTime);
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });
            navigation.navigate('Confirmation', { 
                title:'Tudo certo',
                subtitle:'Fique tranquilo, vamos lembrar vc de cuidar da sua plantinha',
                buttonTitle:"Muito Obrigado",
                icon:'hug',
                nextScreen:'MyPlant',
            });
        }catch {
            Alert.alert('Não possível salvar.');
        }
    }

    return (
        <View style={styles.container}>

        <View style={styles.plantInfo}>
            <SvgFromUri
                uri={ plant.photo }
                height={150}
                width={150}

            />

            <Text style={styles.plantName}> { plant.name} </Text>  
            <Text style={styles.plantAbout}> { plant.about } 
                
            </Text> 
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image 
                    source={waterdrop} 
                    style={styles.tipImage}
                />
                <Text style={styles.tipText}>
                    { plant.water_tips}
                </Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado: 
            </Text>

            {
                showDatePicker && (    
                <DateTimePicker
                    value={ selectedDateTime }
                    mode='time'
                    display='spinner'
                    onChange={handleChangeTime}
                />
            )}

            {
                Platform.OS === 'android' && (
                    <TouchableOpacity 
                    style={styles.dateTimePickerButton}
                        onPress={handleOpenDateTimePickerForAndroid}
                    >    
                        <Text style={styles.dateTimePickerText}> {`Mudar ${format(selectedDateTime, 'HH:mm')}`} </Text>
                    </TouchableOpacity>
                )
            }
            <Button
                title="Cadastrar planta"
                onPress={handleSave}
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
        flex:1,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,

    },
    plantAbout: {
        textAlign:'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 18,
        marginTop: 10,
    },
    controller: {
        backgroundColor:colors.white,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom: getBottomSpace() || 20
    },
    tipImage: {
        width: 58,
        height: 58,

    },
    tipText: {
        flex:1,
        fontFamily: fonts.text,
        color: colors.blue,
        marginLeft: 20,
        fontSize: 18,
        textAlign:'justify',
    },
    alertLabel: {
        textAlign:'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
    },
    tipContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 14,
        position:'relative',
        bottom: 60,

    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text,
    }
})

