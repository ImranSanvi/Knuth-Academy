import React, { Suspense } from 'react';
import Categories from '../Categories';


const LeftAside = ({skill}) => {
    // console.log(skill);
    return (
        <div className='mb-5 md:mb-0 md:mr-10'>
            <Categories></Categories>
            {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Categories></Categories>
            </Suspense> */}
        </div>
    );
};

export default LeftAside;