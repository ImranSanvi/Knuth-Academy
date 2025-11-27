import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';
import LeftAside from '../Components/homeLayout/LeftAside';
import TopRated from '../Components/TopRated';
import Works from '../Components/Works';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isCategory = location.pathname.startsWith('/category/');

    const {state} = useNavigation();

    return (


        <div>
            <header>
                <Header></Header>
            </header>

            {isHome && <HeroSlider></HeroSlider>}

            <main className='w-9/10 mx-auto grid grid-cols-1 md:grid-cols-5 mt-[39px] md:mt-[78px] mb-5 md:mb-10 gap-5'>

                <div className='leftSide md:col-span-1 md:top-0 h-fit sticky'>
                    <LeftAside></LeftAside>
                </div>

                <section className='md:col-span-3'>
                    {state =='loading' ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <div className='rightSide md:col-span-1 md:top-0 h-fit sticky'>
                    <RightAside></RightAside>
                </div>
            </main>

            { (isHome || isCategory) && <TopRated></TopRated>}
            {(isHome || isCategory) && <Works></Works>}

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;