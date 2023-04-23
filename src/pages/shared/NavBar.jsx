import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className='my-container'>
            <div className='md:hidden p-2' onClick={()=> setOpen(!open)}>
            {
                open ? 
                <FaTimes className='h-6 w-6'/>
                :
                <FaBars className='h-6 w-6'/>
            }
            </div>

            <nav className={`absolute md:static    mt-2 w-1/2 mx-auto md:w-full md:mt-0  md:flex justify-between items-center p-3  ${open ? 'top-10' : '-top-36'} `}>

                <h4 className='text-2xl font-bold'>kothopokothon</h4>
                <button  className='px-8 py-3 border border-2 border-gray-500 rounded-lg font-semibold'>Sign In</button>

            </nav>
        </div>
    );
};

export default NavBar;