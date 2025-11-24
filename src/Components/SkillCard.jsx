import React from 'react';
import ratingIcon from './../assets/icon-ratings.png'
import { AiFillDollarCircle } from 'react-icons/ai';

const SkillCard = ({skill}) => {
    return (
        <div className='p-3 rounded-[5px] space-y-5 bg-[#F3E8DF] h-full'>
            <img className='rounded-[5px] w-full h-[315px] ' src={skill.image} alt="" />
            <p className='font-bold'>{skill.skillName}</p>
            <p className='text-accent'>Provided By : <span>{skill.providerName}</span></p>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[25px] h-[25px]' src={ratingIcon} alt="" />
                    <p className='font-bold text-purple-400'>{skill.rating}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiFillDollarCircle className='w-[25px] h-[25px]'></AiFillDollarCircle>
                    <p className='font-bold text-purple-400'>{skill.rating}</p>
                </div>
            </div>

            <button className='bg-primary text-white rounded-2xl py-2 px-3 font-bold'>View Details</button>
        </div>
    );
};

export default SkillCard;