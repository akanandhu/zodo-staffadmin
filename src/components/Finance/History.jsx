import React from 'react'
import AppointmentTable from '../Appointment/AppointmentTable'
import { appointmentList } from '../configs/appointmentList'

function History() {
    
  return (
    <div>
        <AppointmentTable appointmentList={appointmentList}/>
    </div>
  )
}

export default History