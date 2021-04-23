import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

import api from '../../services/api';
interface EnvironmentProps { 
    key: string;
    title: string;
}

interface PlantProps { 
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string]; 
    frequency: {
        times: number;
        repeat_every: string;
    } 
}

export function PlantSelect(){
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);

    useEffect(() => {
        async function fetchEnvironment(){
            const { data } = await api.get('plants_environments');
            setEnvironments([
                {
                    key:'all',
                    title:'Todos',
                },
                ...data
            ]);
        }

        fetchEnvironment();
    },[])

    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants');
            setPlants(data);
        }

        fetchPlants();
    },[])



    return (
        <View style={styles.container}>
            <View style={styles.header}>    
                <Header />

                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
            </View>  

            <View>
                <FlatList 
                    data={environments}
                    renderItem={({ item }) => (
                        <EnvironmentButton title={item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList 
                    data={plants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary
                            data={item}
                        />    
                    )}
                    showsVerticalScrollIndicator={false}
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
    environmentList: {
        height: 40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:22,
        marginVertical:32,
    },
    plants: {
        flex:1,
        paddingHorizontal:32,
        justifyContent:'center',
    }
});