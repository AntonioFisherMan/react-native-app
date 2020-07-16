import React, { useEffect } from 'react'
import Appointments from '../components/Clients/Appointments'
import {StyleSheet,View,Button} from 'react-native'
import { GetAppointments } from '../redux/PatientsReducer'
import { connect } from 'react-redux'

const AppointmentsScreen=(props)=>{
 const {navigation} =props
  
    return(
      <>
        <View style={styles.container}>
        <Appointments navigate={navigation.navigate} route={props.route} GetAppointments={props.GetAppointments} appointments={props.appointments}navigation={navigation}/>
        </View>
        <Button  onPress={() => {props.navigation.navigate('Patients')}}title='Все пациенты'/>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:30,
      paddingVertical:30,
    },
  });

const MapStateToProps=(state)=>{
  
  return {
    appointments:state.patients.appointments
  }
}

export default connect(MapStateToProps,{GetAppointments})(AppointmentsScreen)