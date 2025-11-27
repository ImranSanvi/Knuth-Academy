import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import ratingIcon from './../assets/icon-ratings.png'


const SkillDetailsCard = ({skill}) => {
    // console.log(skill)

    const handleForm = (e) =>{
        e.preventDefault();
        e.target.reset();
    }

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

            <form onSubmit={handleForm} className='flex flex-col space-y-5 justify-center items-center border border-gray-200 p-3'>
                <h2 className='font-bold text-2xl'>Book Session</h2>
                
                <div className='flex gap-5'>
                    <label className="label font-bold">Name</label>
                    <input name='name' type="name" className="input" placeholder="name" required />
                </div>

                <div className='flex gap-5'>
                    <label className="label font-bold">Email</label>
                    <input name='email' type="email" className="input" placeholder="email" required />
                </div>

                <button type='submit' className="px-3 py-2 bg-[#5459AC] rounded-2xl text-white">
                    Submit
                </button>
            </form>

            <div className="flex justify-center mt-5">
                <button className="px-3 py-2 bg-purple-500 rounded-2xl text-white">
                    Enroll Now
                </button>
            </div>

 
            
        </div>
    );
};

export default SkillDetailsCard;