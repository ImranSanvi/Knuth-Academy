import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#E3E3E3] min-h-screen'>
            <header>
                <Header></Header>
            </header>

            <main className='w-9/10 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;