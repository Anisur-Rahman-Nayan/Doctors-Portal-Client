import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/TEETH-WHITENING.png.webp'
import dental from '../../assets/images/DENTAL-BRACES.png'
import clear from '../../assets/images/GUM-COLOUR-CHANGE.png'
import ceramic from '../../assets/images/CERAMIC-CROWN.png'
import root from '../../assets/images/ROOT-CANAL-TREATMENT.png'
import veneer from '../../assets/images/VENEER.png'
import clean from '../../assets/images/whitening.png'
import Service from './Service';

import treatment from '../../assets/images/treatment.png' 

const Services = () => {
    const services =[
        
    {_id:1,
     name:'FLUORIDE TREATMENT',
     des: 'We will bring your smile on your face!',
     img: fluoride
    },
    {_id:2,
     name:'CAVITY FILLING',
     des: 'Don’t worry about cavity. You will fix it',
     img: cavity
    },
    {_id:3,
     name:'TEETH WHITENING',
     des: 'Rejuvenate your smile with brighter, white teeth !',
     img: whitening
    },
    {_id:4,
     name:'DENTAL BRACES',
     des: 'Don’t worry about irregular teeth. You will smile again confidently with straight teeth.',
     img: dental
    },
    {_id:5,
     name:'INVISALIGN CLEAR ALIGNER',
     des: 'Transform your smile with our state-of-the-art Invisalign treatment!',
     img: clear
    },
    {_id:6,
     name:'CERAMIC CROWN',
     des: 'Get the taste of world’s most advanced, full computerised, CAD-CAM fabricated Ceramic Crown.',
     img: ceramic
    },
    {_id:7,
     name:'ROOT CANAL TREATMENT',
     des: 'No more 3-5 days for Root Canal Treatment. We are offering single appointment Root Canal Treatment !',
     img: root
    },
    {_id:8,
     name:'VENEER',
     des: 'Transform your smile with minimally invasive Veneer treatment !',
     img: veneer
    },
    {_id:9,
     name:'TEETH CLEANING',
     des: 'We will bring your smile on your face!',
     img: clean
    },
    ]
    return (
        <div className='my-28'>
           <div className='text-center text-xl font-bold uppercase'>
           <h3 className='text-secondary'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
           </div>

           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            services.map(service=> <Service key={service._id} service={service}></Service>)
        }
           </div>

           <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">WHAT MAKES US SPECIAL !</h1>
      <p className="py-6">Are you looking for Best Dentist near your house or Best Dental Clinic in Dhaka, Bangladesh ? Yes, you are in the right place. LASER DENTAL is one of the most hi-tech dental clinics in Dhaka, serving all of your dental needs , with special emphasis on 3D Dental Scanning, Laser Dentistry, Invisalign Clear Aligner, Teeth whitening, Painless Injection Facility, Dental Braces, Dental Implant and Scanning whole mouth with world’s most advanced Intra-oral Caries & Plaque Scanner.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Services;