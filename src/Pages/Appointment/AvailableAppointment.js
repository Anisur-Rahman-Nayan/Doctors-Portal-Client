import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import TreatmentService from '../Appointment/TreatmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] =  useState(null)

    useEffect(()=>{
        // fetch('appointmentOptions.json')
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
          <h4 className='text-xl text-center text-accent mb-12 text-4xl'>  Available Appointment on  {format(date, 'PP')}</h4>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> 
            {
                services.map(service=> <TreatmentService key={service._id} service={service} setTreatment={setTreatment}></TreatmentService> )
            }
        </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;