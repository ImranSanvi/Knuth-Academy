import React from 'react';
import logo from './../assets/logo.png'
import userIcon from './../assets/user.png'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-primary px-[120px] py-3 flex justify-between items-center text-white'>
            <img className='w-[80px] h-[80px] rounded-full ' src={logo} alt="" />
            
            <div className='flex gap-5'>
                <NavLink to={'/'} className='font-bold'>Home</NavLink>
                <NavLink to={'/about'} className='font-bold'>About</NavLink>
                <NavLink to={'/myProfile'} className='font-bold'>My Profile</NavLink>
            </div>

            <div className='flex gap-3 items-center'>
                <img className='rounded-full' src={userIcon} alt="" />
                <button className='bg-secondary py-2 px-4 rounded-2xl font-bold '>Login</button>
            </div>
        </div>
    );
};

export default Header;