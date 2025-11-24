import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className=''>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;