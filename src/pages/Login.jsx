import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from '../context/ShopContext'
import { toast } from "react-toastify";

const Login = () => {

    const { setUser, navigate } = useShopContext(); 
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginUser((prev) => ({ ...prev, [name]: value }));
    }

    function handleLogin(e) {
        e.preventDefault();
        if(!loginUser.email || !loginUser.password){
            toast.error('All fields are required');
            return;
        }
        localStorage.setItem('Login',JSON.stringify(loginUser));
        setUser(true);
        toast.success('Login Successfull');
        navigate('/');
    }

    return (

        <form onSubmit={handleLogin} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mt-20 mb-30">
            <div className='flex items-center gap-2 justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Login</h1>
            </div>
            <div className="w-full ">
                <p>Email</p>
                <input className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500" type="email" value={loginUser.email} name="email" placeholder="Your Email" onChange={handleChange} />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input value={loginUser.password} name="password" placeholder="Your Password" onChange={handleChange} className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500" type="password" />
            </div>

            <Link to='/signup'>
                Create account? <span className="text-green-400 cursor-pointer" onClick={() => loginUser({ name: '', email: '' })}>click here</span>
            </Link>

            <button type="submit" className="bg-green-500 hover:bg-green-400 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Login
            </button>

        </form>
    );
};

export default Login