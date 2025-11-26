import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import RightAside from '../Components/homeLayout/RightAside';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SkillDetailsCard from '../Components/SkillDetailsCard';

const SkillDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [skill, setSkill] = useState({})

    useEffect( ()=>{
        const newSkill = data.find(singleSkill => singleSkill.skillId == id);
        setSkill(newSkill);
    }, [data, id])

     console.log(skill);
    return (
        <div className=''>
            <header>
                <Header></Header>
            </header>

            <main className='w-9/10 mx-auto grid md:grid-cols-12 mt-5 md:mt-15 mb-5'>

                <aside className='md:col-span-9'>
                    <SkillDetailsCard skill={skill}></SkillDetailsCard>
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

export default SkillDetails;