import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from '../context/ShopContext'
import {toast} from 'react-toastify'

const Register = () => {

    const { navigate, setUser } = useShopContext();

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleRegisterChange(e) {
        const { name, value } = e.target;
        setRegister((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
       e.preventDefault();
        setUser(true);
        toast.success('Registration Successfull');
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mt-10">
            <div className='flex items-center gap-2 justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Signup</h1>
            </div>
            <div className="w-full ">
                <p>Name</p>
                <input value={register.name} name="name" onChange={handleRegisterChange} placeholder="Enter Name" className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500" type="text" />
            </div>
            <div className="w-full ">
                <p>Email</p>
                <input value={register.email} name="email" onChange={handleRegisterChange} placeholder="Enter Email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500" type="email" />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input value={register.password} name="password" onChange={handleRegisterChange} placeholder="Enter Password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500" type="password" />
            </div>

            <Link to='/login'>
                Already have account? <span className="text-green-400 cursor-pointer">click here</span>
            </Link>

            <button className="bg-green-500 hover:bg-green-400 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Signup
            </button>
        </form>
    );
};

export default Register