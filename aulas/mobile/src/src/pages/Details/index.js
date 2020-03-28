import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View,Image,  TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Details (){

    const native = useNavigation();
    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){

    }

    function sendWhats(){
        
    }
    return(
        <View style={styles.container}>
              <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E02041"></Feather>
            </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                <Text style={[styles.incidentsProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentsValue}>APAD</Text>

                <Text style={styles.incidentsProperty}>CASO:</Text>
                <Text style={styles.incidentsValue}>Cadela atropelada</Text>

                <Text style={styles.incidentsProperty}>VALOR:</Text>
                <Text style={styles.incidentsValue}>R$ 120,00</Text>
            </View>
            <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso</Text>
            <Text style={styles.heroDescription}>Entre em contato:</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={()=>{}}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={()=>{}}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>
            
            </View>
        </View>
    )
}