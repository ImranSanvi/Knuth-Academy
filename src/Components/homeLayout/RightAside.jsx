import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiNetlify } from 'react-icons/si';
import { TfiTwitterAlt } from 'react-icons/tfi';
import offer1 from './../../assets/offer1.jpg'
import offer2 from './../../assets/offer2.jpg'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();

const RightAside = () => {
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            toast("Login successfully!!")
        })
        .catch(error =>{
            alert(error)
        })
    }

    return (
        <div>
            <h2 className='font-bold text-[25px] '>Login with</h2>

            <div className='flex gap-2 items-center mt-5 border border-blue-500 px-4 py-2 rounded-[5px]'>
                <FcGoogle className='w-[25px] h-[25px] '></FcGoogle>
                <p onClick={handleGoogleSignIn}>Login with Google</p>
            </div>
            <div className='flex gap-2 items-center mt-2 border border-blue-500 px-4 py-2 rounded-[5px]'>
                <GrGithub className='w-[25px] h-[25px] '></GrGithub>
                <p>Login with Github</p>
            </div>
            <div className='flex gap-2 items-center mt-2 border border-blue-500 px-4 py-2 rounded-[5px]'>
                <TfiTwitterAlt className='w-[25px] h-[25px] '></TfiTwitterAlt>
                <p>Login with Twitter</p>
            </div>

            <h2 className='font-bold text-[25px] mt-5 mb-3'>Projects</h2>
            <div className='flex gap-6'>
                <a href="https://github.com/ImranSanvi" target="_blank" rel="noopener noreferrer">
                    <GrGithub className='w-[35px] h-[35px] cursor-pointer hover:scale-110 duration-200' />
                </a>
                <a href="https://github.com/ImranSanvi" target="_blank" rel="noopener noreferrer">
                    <SiNetlify className='w-[35px] h-[35px] cursor-pointer hover:scale-110 duration-200'></SiNetlify>
                </a>
                <a href="https://github.com/ImranSanvi" target="_blank" rel="noopener noreferrer">
                    <IoLogoFirebase className='w-[35px] h-[35px] cursor-pointer hover:scale-110 duration-200' />
                </a>
            </div>

            <div className='mt-5 bg-[#450693] rounded-[5px] text-white flex flex-col justify-center items-center space-y-5 px-2 py-4'>
                <h2 className='font-bold text-[30px] '>Trusted By</h2>
                <div className=''>
                    <p>Total Students</p>
                    <h2 className='font-bold text-[25px]'>12.5K</h2>
                </div>
                <div className=''>
                    <p>Total Reviews</p>
                    <h2 className='font-bold text-[25px]'>7K</h2>
                </div>
                <div className=''>
                    <p>Active Course</p>
                    <h2 className='font-bold text-[25px]'>12</h2>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-[30px] mt-5 '>Our Offers</h2>
                <img className='mt-5' src={offer1} alt="" />
                <img className='mt-3 w-full' src={offer2} alt="" />
            </div>

        </div>
    );
};

export default RightAside;