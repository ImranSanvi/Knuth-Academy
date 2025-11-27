import React, { use } from 'react';
import logo from './../assets/logo.png'
import userIcon from './../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {

    const {user, logOutUser} = use(AuthContext);

    const handleLogout = () =>{
        logOutUser().then(result =>{
             toast('Logout Successfully ')
        }).catch(error =>{
            alert(error)
        })
       
    }

    return (
        <div className='bg-primary w-full '>
            <div className='w-9/10 mx-auto space-y-5 py-3 flex flex-col md:flex-row justify-between items-center text-white'>
                <img className='w-[81px] h-[81px] rounded-full ' src={logo} alt="" />
            
                <div className='flex gap-5'>
                    <NavLink to={'/'} className='font-bold'>Home</NavLink>
                    <NavLink to={'/about'} className='font-bold'>About</NavLink>
                    <NavLink to={'/myProfile'} className='font-bold'>My Profile</NavLink>
                </div>

                <div className='flex gap-3 items-center'>
                    <img className='rounded-full' src={userIcon} alt="" />
                    {user ? <button onClick={handleLogout} className='bg-secondary py-2 px-4 rounded-2xl font-bold '>LogOut</button> : <Link to={'/auth/login'} className='bg-secondary py-2 px-4 rounded-2xl font-bold '>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;