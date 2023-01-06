import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,date,setTreatment}) => {
    const { _id, name, slots} = treatment;
    
    const handleBooking=(event)=>{
        event.preventDefault();
        const slot = event.target.time.value;
        console.log(_id,name,slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary text-center" >Booking For {name} </h3>
        
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>

        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />

<select name='time' class="select select-primary w-full max-w-xs">
 
  {
    slots.map(slot=> <option value={slot}>{slot}</option>)
  }

</select>
        <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full max-w-xs" />
        <input type="email" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Contact Number" name='contact' class="input input-bordered w-full max-w-xs" />
        <input type="submit" value='Submit' class=" btn btn-primary input input-bordered w-full max-w-xs" />
        
        </form>

    
  </div>
</div>
        </div>
    );
};

export default BookingModal;