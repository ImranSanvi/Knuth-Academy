import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/category.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-semibold text-[20px] '>All Categories</h2>

            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map( (category) => ( <NavLink key={category.categoryId}
                        to={`/category/${category.categoryId}`}
                        className={({ isActive }) =>
                            `btn text-[20px] border-0 font-normal hover:font-bold text-accent 
                            ${isActive ? "bg-purple-300 font-bold" : "bg-transparent"}`
                        }
                    >
                        {category.category}
                    </NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;