import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const AddIcon = (props) => {

    return (
      <>
            <AddItem onPress={()=>props.navigate(props.window,{id:props.id})}>
            <Image style={styles.icon} source={require('../../assets/addIcon.png')} />
            </AddItem>
    </>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    },
});


const AddItem = styled.TouchableOpacity`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
bottom:10px;
right:10px;
width:64px;
height:64px;
background: #2A86FF;
z-index:10;
border-radius:50;

`
