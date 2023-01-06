import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img style={{width:'500px', marginTop:'-120px'}} src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
            <h3 className='text-xl text-white text-3xl py-5 font-bold'>Appointment</h3>
            <h2 className='text-4xl text-primary font-bold'>Make a Appointment Today !</h2>
            <p className='text-white py-5'>A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It’s our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile. We love being a part of that journey, it makes us feel good.</p>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary font-bold" >Appointment</button>
            </div>
        </section>
    );
};

export default MakeAppointment;