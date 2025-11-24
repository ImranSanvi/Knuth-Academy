import React from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';

const AllSkill = () => {
    const data = useLoaderData();
    return (
        <div className='w-10/12 mx-auto mt-15 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    data.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default AllSkill;