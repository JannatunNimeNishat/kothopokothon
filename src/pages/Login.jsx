import React from 'react';
import groupImg from '../assets/group.png'
//
//
import Lottie from "lottie-react";
import groupLotti from '../assets/groupLotti.json'

import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='bg-[#D1D1D1] h-[calc(100vh-64px)] '>

            <div className='flex justify-center items-center gap-8 my-container'>
    
               
               <Lottie className='md:w-[600px]' animationData={groupLotti} loop={true} />
                <form className='p-5 text-center  rounded-lg  bg-white md:h-[472px]  md:w-[472px]'>
                    <h3 className=' mb-8 mt-2 font-semibold text-2xl'>Sign In</h3>
                    <input className='border rounded-lg w-full py-3 pl-2 mb-3' type="email" name="email" id="" required placeholder='Email' />
                    <input className='border rounded-lg w-full py-3 pl-2 mb-3' type="password" name="password" id="" required placeholder='Password' />
                    <p className='mb-2'><small>show password</small></p>
                    <button className='mt-3 font-semibold text-white  px-5 py-2 rounded-lg bg-[#00A655]'>
                        Sign In
                        <FaArrowRight className='inline ml-2' />
                    </button>
                  
                   
                    <div className='mt-3 flex justify-center items-center'>
                        <hr  className=' w-1/3'/>
                        <p className='mx-1'><small>Or Sign in with</small></p>
                        <hr  className='  w-1/3'/>
                    </div>
                   <button className='mt-5 flex py-3 justify-center items-center w-full border rounded-lg'>
                    <FaGoogle className='h-5 w-5 mr-2'/> 
                    Google
                    </button>
                    <p className='mt-3'><small>Don't have an account? Please </small><Link className='border-b-4 border-green-600 ' to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;