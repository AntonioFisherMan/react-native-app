import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './screens/CartScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddPatientScreen from './screens/AddPatientScreen';
import AddApointmentsScreen from './screens/AddApointmentsScreen';
import ChangeAppointmentScreen from './screens/ChangeAppointmentScreen';
import AppointmentsScreen from './screens/AppointmentsScreen'
import PatientsScreen from './screens/PatientsScreen'
import ChangePatientScreen from './screens/ChangePatientScreen'
import ToothFormulaScreen from './screens/ToothFormulaScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Appointments" options={{ title: 'Приемы',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={AppointmentsScreen} />
          <Stack.Screen name="Patients" options={{ title: 'Пациенты',
              headerTintColor: '#2A86FF',
              headerStyle:{elevation:0.8,shadowOpaacity:0.8},
              headerTitleStyle: {
                fontWeight: '600',
                fontSize:28,
                lineHeight:33
              },}} component={PatientsScreen} />
            <Stack.Screen name="Cart" options={{ title: 'Карта пациента',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={CartScreen} />
           <Stack.Screen name="AddPatient" options={{ title: 'Добавить пациента',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={AddPatientScreen} />
             <Stack.Screen name="AddAppointment" options={{ title: 'Добавить прием',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={AddApointmentsScreen} />
<Stack.Screen name="ChangeAppointment" options={{ title: 'Изменить прием',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={ChangeAppointmentScreen} />
          

          
<Stack.Screen name="ChangePatient" options={{ title: 'Изменить пациента',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={ChangePatientScreen} />
          <Stack.Screen name="ToothFormula" options={{ title: 'Формула зубов',
          headerTintColor: '#2A86FF',
          headerStyle:{elevation:0.8,shadowOpaacity:0.8},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize:28,
            lineHeight:33
          },}} component={ToothFormulaScreen} />
          
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   
  );
}

export default App;

