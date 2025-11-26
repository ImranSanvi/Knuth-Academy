import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4 text-center py-5">
                <h2 className='font-semibold text-[35px] '>Register in your account</h2>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="email" className="input" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Photo URL</label>
                        <input type="email" className="input" placeholder="Photo URL" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;