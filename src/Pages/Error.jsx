import React from 'react';
import errorImg from './../assets/error.png' 
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img className='w-3/5 md:w-2/5 h-1/5 md:h-2/5' src={errorImg} alt="" />
            <div className="flex justify-center mt-5">
                <NavLink to={'/'} className='bg-purple-500 text-white rounded-2xl py-2 px-3 font-bold'>
                    Home
                </NavLink>
            </div>
        </div>
        
    );
};

export default Error;