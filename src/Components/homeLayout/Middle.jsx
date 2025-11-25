import React from 'react';

const Middle = () => {
    return (
        <div className='mb-5 md:mb-0 md:mr-10'>
            {/* <h2 className='font-bold text-[20px] text-orange-400 mb-5'>{skill.skillName}</h2>
            <div className='border border-gray-400 rounded-2xl p-5 space-y-5 mb-5'>
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
            </div> */}
            <Link to={'/allSkill'} className='bg-[#D72050]  rounded-[5px] text-white py-2 px-3 font-bold'> All news in this category</Link>
        </div>
    );
};

export default Middle;