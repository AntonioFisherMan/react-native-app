import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { GetPatients,RemovePatient } from '../redux/PatientsReducer'
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Alert, Image,Button } from 'react-native'
import { AddIcon } from '../components/AddIcon/AddIcon'
import GrayText from '../components/GrayText'
import Swipeable from 'react-native-swipeable'

import styled from 'styled-components'

const Patient = ({ item, navigate }) => (
    
        <Item key={item._id} onPress={() => {
            /* 1. Navigate to the Details route with params */
            const {_id,phone,fullName} = item
            navigate('ChangePatient', { id: _id,phone:phone,fullName:fullName })
        }}>
            <Image style={styles.photo} source={require(`../assets/icon1.png`)} />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <FullName>{item.fullName}</FullName>
                <GrayText>{item.phone}</GrayText>
            </View>

        </Item>
     
)


const PatientsScreen = (props) => {
    const deleteItem=id=>{
        Alert.alert(
          'Удаление пациента',
          'Вы действительно хотите удалить пациента',
          [
            {
              text: 'Отмена',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'Удалить', onPress: () => props.RemovePatient(id) }
          ],
          { cancelable: false }
        );
      }
    useEffect(() => {
        props.GetPatients()
    },[props.patients])
    
    const renderItem = ({ item }) => (
        <Swipeable  rightButtons={[
            <TouchableOpacity style={styles.editBtn}  onPress={()=>{ 
              const { _id,fullName,phone} = item
            props.navigation.navigate('ChangePatient', {id:_id,fullName,phone})}} ><Image style={styles.photo} source={require(`../assets/editImg.png`)}/></TouchableOpacity>,
            <TouchableOpacity onPress={()=>deleteItem(item._id)} style={styles.deleteBtn}><Image style={styles.photo} source={require(`../assets/deleteImg.png`)} /></TouchableOpacity>
          ]}>
                  <Patient item={item} navigate={props.navigation.navigate} />
        </Swipeable>
    
    );
    return (
        <>
           
            <AddIcon navigate={props.navigation.navigate} window={'AddPatient'} />
            <FlatList
                data={props.patients}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            <Button  onPress={() => {props.navigation.navigate('Appointments')}}title='Все приемы'/>

        </>
    )
}
const styles = StyleSheet.create({
    photo: {
        marginRight: 16
    },
    editBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        width: 80,
        height: 80,
        backgroundColor: '#B4C1CB'
    },
    deleteBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        width: 80,
        height: 80,
        backgroundColor: '#F85A5A'
    }
});



const Item = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center;
  margin-top:10px;
  margin-bottom:10px;
  padding-bottom:5px;
  border-bottom-width:3px;
  border-color:#F3F3F3;
  `
const Title = styled.Text`
  font-size: 22px;
  color: #000000;
  font-weight:bold;
  margin-top:51px;
  margin-bottom:20px;
  `
const FullName = styled.Text`
  font-size: 16px;
  color: #000000;
  font-weight:bold;
  margin-bottom:2px;
  `

const Btn = styled.Text`
  text-align:center;
  background: #2A86FF;
  border-radius: 18px;
  color:white;
  width:70px;
  height:32px;
  margin-left:19px;
  font-size: 14px;
  color: #FFFFFF;
  font-weight:bold;
  padding-top:5px;
  
  `

let MapStateToProps = (state) => {
    return {
        patients: state.patients.patients
    }

}


export default connect(MapStateToProps, { GetPatients,RemovePatient })(PatientsScreen)