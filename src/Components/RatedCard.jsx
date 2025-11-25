import React from 'react';
import ratingIcon from './../assets/icon-ratings.png'
import { Link } from 'react-router';

const RatedCard = ({ratedCourse}) => {
    return (
        <div className='space-y-3 mt-5 md:mt-0'>
            <img className='rounded-[5px] w-full h-[200px] ' src={ratedCourse.image} alt="" />
            <p className='font-bold'>{ratedCourse.skillName}</p>


            <div className='flex gap-2 items-center'>
                <p className='text-accent mr-5'>Provided By : <span>{ratedCourse.providerName}</span></p>
                <img className='w-[25px] h-[25px]' src={ratingIcon} alt="" />
                <p className='font-bold text-purple-400'>{ratedCourse.rating}</p>
            </div>

            <Link to={`/skillDetails/${ratedCourse.skillId}`} className='bg-primary text-white rounded-2xl py-2 px-3 font-bold'>View Details</Link>

        </div>
    );
};

export default RatedCard;