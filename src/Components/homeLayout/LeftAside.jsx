import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import ratingIcon from './../../assets/icon-ratings.png'

//   {
//     "skillId": 5,
//     "skillName": "Yoga for Stress Relief",
//     "providerName": "David Chen",
//     "providerEmail": "david@skillswap.com",
//     "price": 15,
//     "rating": 4.5,
//     "slotsAvailable": 8,
//     "description": "Gentle yoga flow focused on relaxation and breathing.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEL0wDA4CzQEaUmM2qMpaE8b6H6gA0aKnm2B4UnpPDPy8ZzacPMts4TI&s",
//     "category": "Fitness"
//   },

const LeftAside = ({skill}) => {
    console.log(skill);
    return (
        <div className=' md:mr-10'>
            <h2 className='font-bold text-[20px] text-orange-400 mb-5'>{skill.skillName}</h2>
            <div className='border border-gray-400 rounded-2xl p-5 space-y-5'>
                <img className='w-full rounded-2xl' src={skill.image} alt="" />
                <h2 className='font-bold text-[15px]'>{skill.providerName}</h2>
                <p>{skill.description}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[35px] h-[35px]' src={ratingIcon} alt="" />
                        <p className='font-bold text-purple-400'>{skill.rating}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <AiFillDollarCircle className='w-[35px] h-[35px]'></AiFillDollarCircle>
                        <p className='font-bold text-purple-400'>{skill.rating}</p>
                    </div>
                </div>
                <p><span className="text-red-400 font-bold">Available slot : </span>{skill.slotsAvailable}</p>
                <div className='flex justify-center'>
                    <button className='bg-purple-500 text-white rounded-2xl py-2 px-3 font-bold'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default LeftAside;