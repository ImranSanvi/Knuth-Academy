import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [error , setError] = useState("")
    const {signIn} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            navigate(`${location.state ? location.state : "/"}`)
            toast("Login Successfully!!");
        }).catch(error =>{
           const errorCode = error.code;
           setError(errorCode);
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4 text-center py-5">
                <h2 className='font-semibold text-[35px] '>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        {error && <p className='text-red-400'>{error}</p>}

                        <div><a className="link link-hover mt-3">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to={'/auth/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;