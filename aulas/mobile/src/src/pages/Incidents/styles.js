import {StyteSheet} from 'react-native';
import Contants from 'expo-constants';

export default StyteSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20, 
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold:{
        fontWeigth: 'bold'
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeigth: 'bold'
    },
    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentsList:{
        marginTop: 32,
    },

    incidents:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeigth: 'bold'
    },
    incidentsValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeigth:'bold'
    }



});