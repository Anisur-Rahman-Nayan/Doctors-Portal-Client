import React from 'react';
import quote from '../../assets/icons/quote.svg'
import p1 from '../../assets/images/people1.png'
import p2 from '../../assets/images/people2.png'
import p3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews =[
        {_id:1,
        name:'Mason',
        review:'Just have to say a very caring Dentist who is excellent in reassuring their patients and gives excellent service, explains what they are doing every step of the way. The best Dentist I have ever seen!',
        img:p1,
        location: 'California'
    },
        {_id:1,
        name:'Jack.',
        review:'This is the only dental clinic I have ever been to where I felt like they were telling me the truth about my teeth and not trying to get money out of me! Dr. Shihabur Rahman is very gentle and told me exactly what he was doing and was very attentive to my needs.',
        img:p2,
        location:'London'
    },
        {_id:1,
        name:'Wyatt.',
        review:'Great service and care! from front desk to the Doctor and the stuff . Dr. Shihabur Rahman is an awesome Dentist, also friendly, professional, and helpful. I am very happy and pleased with his work. Highly recommend everybody to go there and take their service.',
        img:p3,
        location: 'Dhaka'
    }
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div><h4 className='text-3xl text-primary  font-bold'>Testimonial</h4>
                    <h2 className='text-2xl'>What Our Patients Say !</h2>
                </div>
                
                <div>
                    <img className='w-24  lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=> <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;