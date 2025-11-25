import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';

const HomeLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            {isHome && <HeroSlider></HeroSlider>}

            <main className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 mt-[39px] md:mt-[78px] mb-5 md:mb-10 gap-5'>
                <section className='md:col-span-9'>
                    <Outlet></Outlet>
                </section>

                <div className='rightSide md:col-span-3 md:top-0 h-fit sticky'>
                    <RightAside></RightAside>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;