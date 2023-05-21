import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    useTitle('Register');
    const { createUser, profileUpdate } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);
                profileUpdate(name, photoUrl)
                    .then(res => {
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                    })

                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">

                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Your profile photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn bg-teal-800 border-0 hover:border hover:bg-teal-900">Register</button>
                            </div>
                            <p className='text-red-400'>{error} </p>
                            <p className='font-bold mt-3 p-3'>Already member? <Link to={'/login'}><span className='text-teal-400 ms-1 underline'>Login now</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;