import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import ratingIcon from './../assets/icon-ratings.png'

//   {
//     "skillId": 25,
//     "skillName": "Project Management with SCRUM",
//     "providerName": "Yara Zaki",
//     "providerEmail": "yara@skillswap.com",
//     "price": 40,
//     "rating": 4.9,
//     "slotsAvailable": 2,
//     "description": "An agile project management course focusing entirely on the SCRUM framework. Learn roles (Scrum Master, Product Owner), events (Sprints, Dailies), and artifacts necessary to deliver complex projects iteratively and efficiently.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-irvXB4FSp9320cPg60nJtcNhuj_X7gwZg&s",
//     "category": "Business",
//     "tag": "Popular",
//     "categoryId": "10008"
//   },

const SkillDetailsCard = ({skill}) => {
    console.log(skill)
    return (
        <div className='mr-0 md:mr-10 space-y-5'>
            <img className='rounded-[5px] w-full h-[405px] ' src={skill.image} alt="" />
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
            <p>Email : {skill.providerEmail}</p>
            <p className='font-bold'>Available Slot : {skill.slotsAvailable}</p>
            <div className='flex gap-5'>
                <button className='px-2 py-1 bg-[#FFA239] rounded-2xl text-white'>{skill.category}</button>
                {skill.tag && <button className='px-2 py-1 bg-purple-500 rounded-2xl text-white'>{skill.tag}</button>}
            </div>
            <p className='text-[#DDC3C3]'>{skill.description}</p>

            <div className="flex justify-center">
                <button className="px-3 py-2 bg-purple-500 rounded-2xl text-white">
                    Enroll Now
                </button>
            </div>

 
            
        </div>
    );
};

export default SkillDetailsCard;