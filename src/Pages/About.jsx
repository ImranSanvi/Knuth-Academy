import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RightAside from '../Components/homeLayout/RightAside';

const About = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            
            <main className='w-9/10 mx-auto grid md:grid-cols-12 mt-5 md:mt-15 mb-5'>
                <aside className='md:col-span-9 md:mr-10 mb-5 md:mb-0'>
                    <p><span className='text-orange-400'>Knuth Academy</span> is a modern skill-learning platform designed to help learners explore and master new skills online. Our mission is to provide <span className='font-bold'>easy access to high-quality courses</span>, connect learners with expert providers, and make skill development simple, engaging, and enjoyable.</p>

                </aside>

                <aside className='md:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default About;