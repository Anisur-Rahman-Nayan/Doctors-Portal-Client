import React from 'react';

const services = ({service,setTreatment}) => {
    const {name, slots} =service
    return (
        <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{service.name}</h2>
    
    <p>
      {
        slots.length > 0 ?<span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available !</span>
      }

    </p>
    
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    
    <div class="card-actions justify-end">
    
      <label for="booking-modal" disabled={slots.length=== 0} onClick={()=>setTreatment(service)}  class="btn">Book Appointment !</label>
    </div>
  </div>
</div>
    );
};

export default services;