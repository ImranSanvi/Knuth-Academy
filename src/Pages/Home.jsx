import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className='leftSide '>

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
        </div>

    );
};

export default Home;