import * as axios from 'axios'


export const api={
    getAppointments(){
        return axios.get('http://192.168.1.106:5000/appointments')
    },
    addPatients(fullName,phone){
        return axios.post('http://192.168.1.106:5000/patients',{fullName,phone})
    },
    getPatient(id){
        return axios.get(`http://192.168.1.106:5000/patients/${id}`)
    },
    removeAppointment(id){
        return axios.delete(`http://192.168.1.106:5000/appointments/${id}`)
    },
    removePatient(id){
        return axios.delete(`http://192.168.1.106:5000/patients/${id}`)
    },
    addApointment(dentNumber,diagnosis,price,date,time,patient){
        
        return axios.post('http://192.168.1.106:5000/appointments',{dentNumber,diagnosis,price,date,time,patient})
    },
    changeAppointment(dentNumber,diagnosis,price,date,time,id){
        
        return axios.put(`http://192.168.1.106:5000/appointments/${id}`,{dentNumber,diagnosis,price,date,time})
    },
    changePatient(id, fullName,phone){
      return axios.put(`http://192.168.1.106:5000/patients/${id}`,{fullName,phone})
    },
    getPatients(){
        return axios.get('http://192.168.1.106:5000/patients')
    }
 }
