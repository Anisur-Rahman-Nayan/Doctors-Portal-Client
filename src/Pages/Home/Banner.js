import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
      <p className="py-6">Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 10 years, Our doctors have proudly provided the best dental experience. Our comfort-first approach is designed to meet the needs of you & your entire family.At our dental office , our philosophy of care is defined by our personalised service & advanced hi-tech treatments. We approach every patient with the same level of gentle, thorough care & attention we would give a member of our family- and it shows ! You will love the warm & friendly staff & relaxing environment.</p>
      <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" >Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;