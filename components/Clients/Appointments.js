
import React, { useState, useEffect } from 'react'
import { Image, SectionList, View,TouchableHighlight, Text,StyleSheet,Alert  } from 'react-native'
import {connect} from 'react-redux'
import styled from 'styled-components'
import GrayText from '../GrayText'
import { AddIcon } from '../AddIcon/AddIcon'
import Swipeable from 'react-native-swipeable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RemoveAppointment } from '../../redux/PatientsReducer'


const Appointments = (props) => {
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
        { text: 'Удалить', onPress: () => props.RemoveAppointment(id) }
      ],
      { cancelable: false }
    );
  }
 
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    props.GetAppointments()
    setIsLoading(false)
  }, [props.appointments])
  return (
    <>

      <SectionList
        onRefresh={props.GetAppointments}
        refreshing={isLoading}
        sections={props.appointments}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Swipeable rightButtons={[
          <TouchableOpacity style={styles.editBtn}  onPress={()=>{ 
            const { _id,dentNumber,price,diagnosis,date,time} = item
          props.navigate('ChangeAppointment', {id:_id,dentNumber,price,diagnosis,date,time })}} ><Image style={styles.photo} source={require(`../../assets/editImg.png`)}/></TouchableOpacity>,
          <TouchableOpacity onPress={()=>deleteItem(item._id)} style={styles.deleteBtn}><Image style={styles.photo} source={require(`../../assets/deleteImg.png`)} /></TouchableOpacity>
        ]}>
          <Item key={item._id} onPress={() => {
            /* 1. Navigate to the Details route with params */
            const { _id, fullName, phone } = item.patient
            props.navigate('Cart', { _id, fullName, phone })
          }}>

            <Image style={styles.photo} source={require(`../../assets/icon1.png`)} />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <FullName>{item.patient.fullName}</FullName>
              <GrayText>{item.diagnosis}</GrayText>
            </View>
            <Btn>{item.time}</Btn>
          </Item>
        </Swipeable>
        }
        renderSectionHeader={({ section: { title } }) => (
          <Title style={styles.header}>{title}</Title>
        )}
      />


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


export default connect(null, {RemoveAppointment})(Appointments)