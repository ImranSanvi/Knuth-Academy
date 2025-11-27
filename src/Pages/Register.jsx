import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch( (error) =>{
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4 text-center py-5">
                <h2 className='font-semibold text-[35px] '>Register in your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;