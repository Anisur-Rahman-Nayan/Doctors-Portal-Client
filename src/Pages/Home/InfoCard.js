import React from 'react';

const infoCard = ({data}) => {
    return (
        <div className={`card card-side bg-base-100 ${data.bg}`}>
  <figure className='pl-5'><img src={data.img} alt="Movie"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.des}</p>
  </div>
</div>
    );
};

export default infoCard;