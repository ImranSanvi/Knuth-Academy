import React, { use, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { LuEye } from 'react-icons/lu';
import { FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const {createUser, setUser, updateUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("Name should be 5 or more character");
            return;
        }
        else{
            setNameError("");
        }

        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }

        if (!uppercase.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
            return;
        }

        if (!lowercase.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
            return;
        }
        else{
            setPasswordError("");
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUser({displayName:name, photoURL:photo}).then( ()=>{
                navigate(`${location.state ? location.state : "/"}`);
                setUser({...user, displayName: name, photoURL: photo});
            }).catch(error =>{
                alert(error);
                setUser(user);
            })
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
                        {nameError && <p className='text-red-400'>{nameError}</p>}

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" required />
                            <button
                                onClick={handlePassword}
                                className="btn btn-xs absolute top-2 right-3">
                                    {showPassword ? <FaEyeSlash /> : <LuEye />}
                            </button>
                        </div>
                        {passwordError && <p className='text-red-400'>{passwordError}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;