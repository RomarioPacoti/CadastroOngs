import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents (){
    const navigation = useNavigation();

    function nativeToDetail(){
        navigation.navigate('Details');
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.header.Text}>
                Total de <Text style={styles.header.TextBold}>0 casos</Text>.
            </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
            data={[1,2,3,4,5]}
            style= {styles.incidentsList}
            keyExtractor={incidents =>String(incidents)}
            showsVerticalScrollIndicator={false}
            renderItem={()=>(
                <View style={styles.incidents}>
                <Text style={styles.incidentsProperty}>ONG:</Text>
                <Text style={styles.incidentsValue}>APAD</Text>

                <Text style={styles.incidentsProperty}>CASO:</Text>
                <Text style={styles.incidentsValue}>Cadela atropelada</Text>

                <Text style={styles.incidentsProperty}>VALOR:</Text>
                <Text style={styles.incidentsValue}>R$ 120,00</Text>

                <TouchableOpacity
                 style={styles.detailsButton} 
                 onPress={nativeToDetail} >
                     <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                     <Feather name="arrow-rigth" size={16} color="#E02041" />
                 </TouchableOpacity>
            </View>
            )}
            />
            </View>
    );
}