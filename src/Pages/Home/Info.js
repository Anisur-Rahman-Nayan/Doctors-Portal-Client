import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info = () => {
    const infromation =[
        {img:clock, title:'Opening Hours', des:'We are ALWAYS Open! 24/7',bg:"bg-gradient-to-r from-secondary to-primary"},
        {img:marker, title:'Our Locations', des:'Wari, Dhaka',bg:"bg-gradient-to-r from-primary to-secondary"},
        {img:phone, title:'Contact Us', des:'01686901824',bg:"bg-gradient-to-r from-secondary to-primary"},
        
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
            {
                infromation.map(data=> <InfoCard data={data}></InfoCard>)
            }
        </div>
    );
};

export default info;