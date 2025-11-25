import React, { use } from 'react';
import RatedCard from './RatedCard';

const ratedPromise = fetch('/topRated.json').then(res => res.json());
const TopRated = () => {
    const data = use(ratedPromise);
    return (
        <div className='w-9/10 mx-auto mt-7'>
             <h2 className='font-bold text-pink-700 text-[25px] '>Top Rated Providers</h2>
            <div className=' mt-5 flex flex-col md:flex-row justify-between items-center'>
            
                {data.map(ratedCourse => <RatedCard key={ratedCourse.skillId} ratedCourse={ratedCourse}></RatedCard>)}
            </div>
        </div>
    );
};

export default TopRated;