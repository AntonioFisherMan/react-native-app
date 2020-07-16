import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, Button, ActivityIndicator, Linking } from 'react-native'
import GrayText from '../components/GrayText'
import styled from 'styled-components'
import { AppButton } from '../components/AppButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { GetPatient } from '../redux/PatientsReducer'
import {AddIcon} from '../components/AddIcon/AddIcon'

const CartScreen = ({ route, navigation,GetPatient, patient }) => {

    useEffect(() => {
        GetPatient(route.params._id)
    }, [])

    return (
        
        <View style={styles.container}>
            <AddIcon   id={route.params._id} navigate={navigation.navigate} window={'AddAppointment'}/>
            <Text style={styles.fullname}>{route.params.fullName}</Text>
            <GrayText   >{route.params.phone}</GrayText>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 19 }}>
                <AppButton title="Формула зубов" onPress={()=>{ navigation.navigate('ToothFormula')}}/>
                <TouchableOpacity style={styles.iconBlock } onPress={() => Linking.openURL('tel:' + route.params.phone)}>
                    <Image style={styles.icon}  source={require('../assets/call.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.title}>Приемы</Text>
                {patient ? patient.appointments.map(item => <TouchableOpacity onPress={() => {
            const  { _id,dentNumber,price,diagnosis,date,time}  = item
            navigation.navigate('ChangeAppointment', {id:_id,dentNumber,price,diagnosis,date,time } )
          }} key={item._id} style={styles.item}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}><Image source={require('../assets/icon3.png')} /><Text style={styles.itemText}>Зуб:<BoldText> {item.dentNumber}</BoldText></Text></View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}><Image source={require('../assets/icon4.png')} /><Text style={styles.itemText}>Диагноз: <BoldText>{item.diagnosis}</BoldText></Text></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 28 }}>
                        <TouchableOpacity style={styles.appBtnContainer}>
                            <Text style={styles.appBtnText}> {item.date} -{item.time}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnText}>{item.price}Р"</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>) : <ActivityIndicator size="large" color="red" />}

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,

    },
    fullname: {
        color: '#000000',
        fontSize: 28,
        lineHeight: 30,
        fontWeight: 'bold',
        marginBottom: 7
    },
    number: {
        fontSize: 16,
        lineHeight: 19,
        color: '#8B979F'
    },
    title: {
        marginTop: 26,
        marginBottom: 20,
        fontSize: 18,
        lineHeight: 21,
        color: '#000000',
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#FFFFFF',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 1.5,
        elevation: 4,
        borderRadius: 10,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    itemText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        marginLeft: 10,

    },
    btnContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 32,
        elevation: 8,
        backgroundColor: 'rgba(132, 210, 105, 0.21);',
        borderRadius: 18,
        marginLeft: 25
    },
    btnText: {
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        color: '#61BB42',
        fontWeight: 'bold'
    },
    appBtnContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: 175,
        height: 32,
        elevation: 8,
        backgroundColor: '#2A86FF',
        borderRadius: 40
    },
    appBtnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        color: '#FFFFFF'
    },
    iconBlock: {
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        marginLeft: 15,
        backgroundColor: '#84D269',
        borderRadius: 66,
        width: 45,
        height: 45
    },
    icon: {
        width: 15,
        height: 15,
    }
});



const Icon = styled.TouchableOpacity`


`
const BoldText = styled.Text`
font-weight:bold;

`

let MapStateToProps = (state) => {
    return {
        patient: state.patients.patient
    }
}

export default connect(MapStateToProps, { GetPatient })(CartScreen)