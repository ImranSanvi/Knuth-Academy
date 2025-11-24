import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';
import HeroSlider from '../Components/HeroSlider';
import RightAside from '../Components/homeLayout/RightAside';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <HeroSlider></HeroSlider>
            <div className='md:w-10/12 mx-auto mt-15 mb-10 flex flex-col md:flex-row gap-10 space-y-5'>


                <div className='leftSide m-3 md:m-0 md:w-3/4 '>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {
                            data.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                        }
                    </div>

                <div className="flex justify-center mt-5">
                        <NavLink to={'/allSkill'} className='bg-purple-500 text-white rounded-2xl py-2 px-3 font-bold'>
                            Show More
                        </NavLink>
                    </div>

                </div>

                <div className='rightSide m-3 md:m-0 md:w-1/4'>
                    <RightAside></RightAside>
                </div>

            </div>
        </div>

    );
};

export default Home;