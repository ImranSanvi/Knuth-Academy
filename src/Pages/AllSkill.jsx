import React from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';

const AllSkill = () => {
    const data = useLoaderData();
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default AllSkill;