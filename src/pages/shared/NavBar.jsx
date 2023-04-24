import React, { useState } from 'react';
import { useContext } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('successfully logout');
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='my-container'>
            <div className='md:hidden p-2' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <FaTimes className='h-6 w-6' />
                        :
                        <FaBars className='h-6 w-6' />
                }
            </div>

            <nav className={`absolute md:static    mt-2 w-1/2 mx-auto md:w-full md:mt-0  md:flex justify-between items-center p-3  ${open ? 'top-10' : '-top-36'} `}>

                <Link to='/'><h4 className='text-2xl font-bold'>kothopokothon</h4></Link>

                {
                    user ?
                        <Link to='/logout'> <button onClick={handleSignOut} className=' font-semibold text-white  px-5 py-2 rounded-lg bg-[#00A655]'>Sign Out</button></Link>
                        :
                        <Link to='/login'> <button className=' font-semibold text-white  px-5 py-2 rounded-lg bg-[#00A655]'>Sign In</button></Link>
                }

            </nav>
        </div>
    );
};

export default NavBar;