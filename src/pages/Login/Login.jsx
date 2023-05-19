import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {logIn, googleLogIn} = useContext(AuthContext);
    // redirecting work 
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{ replace: true})
        })
        .catch(error=>console.log(error.message))

    }
    const handleGoogleLogIn=()=>{
        googleLogIn()
        .then(()=>{
        navigate(from,{ replace: true})
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
                <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6 ">
                            <button className="btn bg-teal-800 border-0 hover:border hover:bg-teal-900">Login</button>
                        </div>
                        <p className='text-center m-2'>or</p>
                        <div className="form-control ">
                        
                            <button className="btn bg-slate-300 text-slate-900 hover:bg-white" onClick={handleGoogleLogIn}> <img src="/public/google_icon.png" className='h-full p-2' /> Login with Google</button>
                        </div>
                        <p className='font-bold mt-3 p-3'>Don't have an acccount? <Link to={'/register'}><span className='text-teal-400 ms-1 underline'>Register now</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;