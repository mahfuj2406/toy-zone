
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='bg-teal-800'>
            <div className="navbar bg-teal-800 mx-auto container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/all-toys'}>All Toys</Link></li>
                            {
                                user && <>
                                    <li><Link to={'/my-toys'}>My Toys</Link></li>
                                    <li><Link to={'/add-toy'}>Add a Toy</Link></li>
                                </>
                            }
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl border rounded-sm p-2">
                        <img className='w-[150px]' src="/toyZone-2.png" alt="" />
                    </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/all-toys'}>All Toys</Link></li>
                        {
                                user && <>
                                    <li><Link to={'/my-toys'}>My Toys</Link></li>
                                    <li><Link to={'/add-toy'}>Add a Toy</Link></li>
                                </>
                            }
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ? <><li><a onClick={logOut}>Log out</a></li></> : <li><Link to={'/login'}>Login</Link></li>
                        }

                    </ul>
                    <label className="btn btn-circle avatar bg-slate-700 hover:bg-slate-700 text-2xl" title={user ? user.displayName : ""}>
                        {
                            user ? <img className='rounded-full' src={user.photoURL} /> : <FontAwesomeIcon className='rounded-full' icon="fa-solid fa-user" />
                        }
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;