import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='w-ful px-[120px]  bg-accent text-base-100 p-4'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <NavLink >Contact Info</NavLink>
                    <NavLink >About</NavLink>
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
                Knuth Academy.<br />
                Skills for life</p>
            <p className="font-bold text-center">Copyright ©2025 - All right reserved</p>
        </div>
    );
};

export default Footer;