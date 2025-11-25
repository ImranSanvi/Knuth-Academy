import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';

const Home = () => {

    const data = useLoaderData();

    const [popular, setPopular] = useState([]);
    console.log(data)

    useEffect( ()=> {
         const filteredNews = data.filter(courses => courses.tag == 'Popular');
        setPopular(filteredNews);
    }, [data])

    console.log(popular);

    return (
        <div>
            <div className='middle '>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        popular.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Home;