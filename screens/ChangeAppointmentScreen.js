import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImagePropTypes, Button } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Picker } from 'native-base'
import { connect } from 'react-redux'
import { ChangeAppointment } from '../redux/PatientsReducer'
import DateTimePicker from "@react-native-community/datetimepicker"



const ChangeAppointmentScreen = (props) => {
    console.log(props.route.params)
    const [diagnosis, setDiagnosis] = useState('Пульпит')
    const [dent, SetDent] = useState(props.route.params.dentNumber.toString())
    const [price, setPrice] = useState(props.route.params.price.toString())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateTime, setDateTime] = useState(new Date())
    const [date, setDate] = useState(props.route.params.date);
    const [time, setTime] = useState(props.route.params.time);

 
    
    const onChange = (event) => {
        if (mode === "date") {
            var currentDate = new Date(event.nativeEvent.timestamp).toLocaleDateString("en-US")
            setDate(currentDate);
        } else if (mode === "time") {

            dateObj = new Date(event.nativeEvent.timestamp * 1000);
            utcString = dateObj.toUTCString();
            var currentTime = utcString.slice(-11, -4);
            if (currentTime != "nvalid") {
                setTime(currentTime)
            } else {
                setTime('Время')
            }

        }
        setShow(false);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };
    const Submit = () => {
         props.ChangeAppointment(dent, diagnosis, price, date, time, props.route.params._id,props.navigation)
    }
    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label style={{ paddingBottom: 20 }}>Номер зуба</Label>
                        <Input  value={dent}  onChange={e => SetDent(e.nativeEvent.text)} keyboardType="numeric" />
                    </Item>
                    <Item floatingLabel>
                        <Label>Цена</Label>
                        <Input value={price} onChange={e => setPrice(e.nativeEvent.text)} keyboardType="numeric" />
                    </Item>
                    <Item>
                        <Picker
                            mode="dropdown"
                            style={{ width: '100%' }}
                            placeholder="Выберите диагноз"
                            selectedValue={diagnosis}
                            onValueChange={setDiagnosis}
                        >
                            <Picker.Item label="Пульпит" value="Пульпит" />
                            <Picker.Item label="Удаление зуба" value="Удаление зуба" />
                            <Picker.Item label="Спид" value="Спид" />
                        </Picker>
                    </Item>



                    <View style={styles.timeBlock}>
                        <Item style={{ flex: 1, fontSize: 16 }}>
                            <Text onPress={showDatepicker} >{date}</Text>
                        </Item>
                        <Item style={{ flex: 1, fontSize: 16 }}>
                            <Text onPress={showTimepicker} >{time}</Text>
                        </Item>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateTime}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={{ marginTop: 30, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>Submit()} style={styles.appButtonContainer}>
                            <Image source={require(`../assets/saveAppointment.png`)} style={{ marginRight: 7 }} />
                            <Text style={styles.appButtonText}>Сохранить</Text>
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


export default connect(null, {ChangeAppointment})(ChangeAppointmentScreen)