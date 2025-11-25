import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillCard from './SkillCard';

const CategorySkill = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [course, setCourse] = useState([]);

    // console.log(data, id)

    useEffect( ()=> {
        if(!id){
            const filteredNews = data.filter(courses => courses.tag == 'Popular');
            setCourse(filteredNews);
        }
            const filteredNews = data.filter(courses => courses.categoryId == id);
            setCourse(filteredNews);
    }, [data, id])

    // console.log(course)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                course.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
            }
        </div>
    );
};

export default CategorySkill;