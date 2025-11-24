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
                <HeroSlider></HeroSlider>
            </header>

            <main>
                <section className='left'>
                    <Outlet></Outlet>
                </section>

                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;