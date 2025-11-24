import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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