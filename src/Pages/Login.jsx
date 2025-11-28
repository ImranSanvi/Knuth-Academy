import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';

const Login = () => {
    const [error , setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    const {signIn} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

        const handlePassword = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }

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
                        <input name='email' type="email" className="input" placeholder="Email" required onChange={(e) => setEmailValue(e.target.value)} />

                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" required />
                            <button
                                onClick={handlePassword}
                                className="btn btn-xs absolute top-2 right-3">
                                    {showPassword ? <FaEyeSlash /> : <LuEye />}
                            </button>
                        </div>

                        {error && <p className='text-red-400'>{error}</p>}

                        <div>
                            <a className="link link-hover mt-3" onClick={() => navigate("/auth/forget-password", { state: { email: emailValue } })}>Forgot password?</a>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to={'/auth/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;