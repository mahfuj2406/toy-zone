
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className='bg-teal-800'>
            <div className="navbar bg-teal-800 mx-auto container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Toys</a></li>
                            <li><a>My Toys</a></li>
                            <li><a>Add a Toy</a></li>
                            <li><a>Blogs</a></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl border rounded-sm p-2">
                        <img className='w-[150px]' src="../../../../public/toyZone-2.png" alt="" />
                    </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add a Toy</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Login</a></li>
                    </ul>
                        <label tabIndex={0} className="btn btn-circle avatar bg-slate-700 hover:bg-slate-500 hover:border-purple-900 text-2xl">
                            <FontAwesomeIcon icon={faUser} />
                        </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;