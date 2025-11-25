import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='w-full  bg-accent text-base-100 p-4'>

            <div className='w-9/10 mx-auto'>

                <div className='flex flex-col md:flex-row space-y-5 justify-between'>
                    <div className='flex flex-col'>
                        <NavLink >Contact Info</NavLink>
                        <NavLink to={'/about'} >About</NavLink>
                        <NavLink >Design</NavLink>
                    </div>

                    <div>
                        <p className='font-bold text-[25px]'>Social links</p>
                        <div className='flex gap-3 mt-3'>
                            <FaFacebook className='w-[35px] h-[35px]'></FaFacebook>
                            <FaTwitter className='w-[35px] h-[35px]'></FaTwitter>
                            <BsInstagram className='w-[35px] h-[35px]'></BsInstagram>
                        </div>
                    </div>

                    <div>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>

                <p className="text-center mt-8">
                    Knuth Academy</p>
                <p className="font-bold text-center">Copyright ©2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;