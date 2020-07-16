import { api } from "../api/api"
const SET_APPOINTMENTS = "SET_APPOINTMENTS"
const SET_PATIENT = "SET_PATIENT"
const SET_PATIENTS = "SET_PATIENTS"


const initialState = {
   appointments: [],
   patients: [],
   patient: null,
   isLoading: false
}

const PatientReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_APPOINTMENTS:
         return { ...state, appointments: [...action.appointments] }
      case SET_PATIENTS:
         return { ...state, patients:[...action.patients] }
      case SET_PATIENT:
         return { ...state, patient: action.patient }
      default: return state
   }
}
const SetAppointments = (appointments) => ({ type: SET_APPOINTMENTS, appointments })
const SetPatient = (patient) => ({ type: SET_PATIENT, patient })
const SetPatients = (patients) => ({ type: SET_PATIENTS, patients })

export const GetAppointments = () => dispatch => {
   api.getAppointments().then(res => {
      dispatch(SetAppointments(res.data))
   }).catch(err => {
      console.log(err)
   })
}
export const GetPatients = () => dispatch => {
   api.getPatients().then(res => {
      dispatch(SetPatients(res.data))
   }).catch(err => {
           
      console.log(err)
   })
}
export const GetPatient = (id) => dispatch => {
   api.getPatient(id).then(res => {
      dispatch(SetPatient(res.data.data))
   }).catch(err => {

      console.log(err)
   })
}
export const AddPatients = (fullName, phone,navigation) => dispatch => {
   
   api.addPatients(fullName, phone).then(res => {
      setTimeout(()=>{
         navigation.navigate('Patients',new Date())

      },1000)
   }).catch(err => {
   })
}
export const RemoveAppointment = (id) => dispatch => {
   api.removeAppointment(id).then(res => {
   }).catch(err => {
   })
}
export const RemovePatient = (id) => dispatch => {
   api.removePatient(id).then(res => {
      
   }).catch(err => {
      
   })
}
export const AddApointment = (dentNumber, diagnosis, price, date, time, patient,navigation) => dispatch => {

   api.addApointment(dentNumber, diagnosis, price, date, time, patient).then(res => {
      setTimeout(()=>{
         navigation.navigate('Appointments',new Date())
      },1000)
   }).catch(err => {

   })
}

export const ChangeAppointment = (dentNumber, diagnosis, price, date, time, patient,navigation) => dispatch => {
   api.changeAppointment(dentNumber, diagnosis, price, date, time, patient).then(res => {
      debugger
      setTimeout(()=>{
         navigation.navigate('Appointments',new Date())
      },1000)
   }).catch(err => {
      
      console.log(err)
   })
}


export const ChangePatient = (id, fullName,phone,navigation) => dispatch => {
   api.changePatient(id, fullName,phone).then(res => {
      setTimeout(()=>{
         navigation.navigate('Patients',new Date())
      },1000)
   }).catch(err => {

      console.log(err.errors)
   })
}
export default PatientReducer