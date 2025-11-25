import React from 'react';
import { useLoaderData } from 'react-router';

const SkillDetails = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            Skill Detail Card
        </div>
    );
};

export default SkillDetails;