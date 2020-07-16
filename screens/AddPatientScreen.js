import React, { useState } from 'react'
import { Text, View,StyleSheet,TouchableOpacity ,Image, ImagePropTypes} from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import { AppButton } from '../components/AppButton'
import { connect } from 'react-redux'
import {AddPatients} from '../redux/PatientsReducer'

const AddPatientScreen = (props) => {
    const [fullName,SetFullName]=useState()
    const [phone,SetPhone]=useState()
   

    const Submit=()=>{
        props.AddPatients(fullName,phone,props.navigation)
    }
 
    return (

        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label style={{paddingBottom:20}}>Имя и фамилия</Label>
                        <Input autoFocus clearButtonMode onChange={e=>SetFullName(e.nativeEvent.text)}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Номер телефона</Label>
                        <Input autoFocus clearButtonMode dataDetectorTypes="phoneNumber" onChange={e=>SetPhone(e.nativeEvent.text)} keyboardType="numeric"/>
                    </Item>
                    <View style={{ marginTop: 30, display: 'flex', justifyContent: "center",alignItems:'center' }}>
                        <TouchableOpacity onPress={()=>Submit()} style={styles.appButtonContainer}>
                        <Image source={require(`../assets/addPatient.png`)} style={{marginRight:7}}/>
                        <Text style={styles.appButtonText}>Добавить</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </Content>
        </Container>

    )
}


const styles = StyleSheet.create({
    appButtonContainer: {
        display: "flex",
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        width: 325,
        height: 45,
        elevation: 8,
        backgroundColor: '#87CC6F',
        borderRadius: 40
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        color: '#FFFFFF'
    }
})

export default connect(null,{AddPatients})(AddPatientScreen)