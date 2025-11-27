import React, { useContext } from 'react';
import logo from './../assets/logo.png'
import userIcon from './../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {

    const {user, logOutUser} = useContext(AuthContext);

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
                {/* {user && user.email} */}
                <div className='flex gap-5'>
                    <NavLink to={'/'} className='font-bold'>Home</NavLink>
                    <NavLink to={'/about'} className='font-bold'>About</NavLink>
                    <NavLink to={'/profile'} className='font-bold'>My Profile</NavLink>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className="relative group">
                        <img
                            className="rounded-full w-10 h-10 cursor-pointer"
                            src={user ? user.photoURL : userIcon}
                            alt="profile"
                        />

                        {user && (
                            <div
                                className="
                                    absolute left-1/2 -translate-x-1/2 
                                    top-[105%] bg-black text-white 
                                    text-xs py-1 px-2 rounded shadow-lg 
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300
                                    whitespace-nowrap
                                "
                            >
                                {user.email}
                            </div>
                        )}
                    </div>


                    {user ? <button onClick={handleLogout} className='bg-secondary py-2 px-4 rounded-2xl font-bold '>LogOut</button> : <Link to={'/auth/login'} className='bg-secondary py-2 px-4 rounded-2xl font-bold '>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;