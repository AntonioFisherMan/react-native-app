import React, { useState } from 'react'
import { Text, View,StyleSheet,TouchableOpacity ,Image, ImagePropTypes} from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import {connect} from 'react-redux'
import {ChangePatient} from '../redux/PatientsReducer'

const ChangePatientScreen=(props)=>{
    const [fullName,setFullName]=useState(props.route.params.fullName)
    const [phone,setPhone]=useState(props.route.params.phone.toString())

    const Submit=()=>{
        props.ChangePatient(props.route.params.id,fullName,phone,props.navigation)
    }
    return(
        
          <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label style={{paddingBottom:20}}>Имя и фамилия</Label>
                        <Input autoFocus     value={fullName}clearButtonMode onChange={e=>setFullName(e.nativeEvent.text)}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Номер телефона</Label>
                        <Input autoFocus value={phone} clearButtonMode dataDetectorTypes="phoneNumber" onChange={e=>setPhone(e.nativeEvent.text)} keyboardType="numeric"/>
                    </Item>
                    <View style={{ marginTop: 30, display: 'flex', justifyContent: "center",alignItems:'center' }}>
                        <TouchableOpacity onPress={()=>Submit()} style={styles.appButtonContainer}>
                        <Image source={require(`../assets/addPatient.png`)} style={{marginRight:7}}/>
                        <Text style={styles.appButtonText}>Cохранить</Text>
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
        backgroundColor: '#2A86FF',
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

export default connect(null,{ChangePatient})(ChangePatientScreen)