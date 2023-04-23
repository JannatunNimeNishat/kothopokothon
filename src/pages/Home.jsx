import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='bg-[#D1D1D1] h-[calc(100vh-64px)]   flex justify-center items-center'>
            <div className=' '>
                <h3 className='text-5xl'>Welcome to</h3>
                <h1 className='text-7xl font-bold'>kothopokothon</h1>
                <Link to='chat'>
                    <button className=' font-bold text-white mt-7 px-7 py-3 rounded-lg bg-[#00A655]'>
                        Start Chatting
                        <FaArrowCircleRight className='inline w-6 h-5 ml-3' />
                    </button></Link>
            </div>
        </div>
    );
};

export default Home;