import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import fresh_basket_logo from '../assets/fresh_basket_logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const NavBar = () => {
    const [openList, setOpenList] = useState(false);
    const { navigate, setSearch, user, setUser, cartItems } = useShopContext();
    const location = useLocation();

    async function logout() {
        localStorage.removeItem('Login');
        setUser(null);
        toast.success('Logged Out');
    }

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <nav className='bg-white flex justify-between md:px-15 px-2 mt-2 py-2 md:py-4 items-center '>
                <div>
                    <Link to='/' className='cursor-pointer'><img src={fresh_basket_logo} className='w-32 lg:w-40' alt='logo' /></Link>
                </div>
                <div className='hidden md:flex gap-12'>
                    <Link className='hover:text-green-500' to='/'>Home</Link>
                    <Link className='hover:text-green-500' to='/products'>All Product</Link>
                    <Link className='hover:text-green-500' to='/contact-us'>Contact</Link>
                </div>

                <div className='hidden md:flex items-center gap-12'>
                    {location.pathname === '/products' ? <div className='hidden lg:block'>
                        <input onChange={(e) => handleSearch(e)} type='text' placeholder='Search' className='outline-none border border-gray-400 rounded p-2' />
                    </div> : ''}
                    <div className='flex items-center gap-8'>
                        <span className='flex  items-center gap-2'><IoCart onClick={() => navigate('/cart')} className='w-9 h-9 cursor-pointer' />{user && cartItems?.length || 0}</span>
                        {!user ? (<button onClick={() => navigate('/login')} className='border px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white cursor-pointer'>LogIn</button>) : (
                            <div className="relative group inline-block">
                                <div className="w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer">
                                    <span className="font-bold"> <FaRegUserCircle className='h-7 w-7' /></span>
                                </div>
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Orders</Link>
                                    <p onClick={logout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='md:hidden flex items-center gap-8'>
                    <div className='flex items-center gap-2'><IoCart onClick={() => { navigate('/cart'), scrollTo(0, 0) }} className='w-6 h-6 cursor-pointer' />{user && cartItems?.length || 0}</div>
                    <FaListUl onClick={() => setOpenList((p) => !p)} className='w-6 h-6 cursor-pointer' />
                </div>
            </nav>
            <div className='flex mt-4 gap-2 ml-4 justify-center'>
                {openList && (
                    <div className='md:hidden px-4 py-3 bg-white'>
                        <div className='flex flex-col gap-2'>
                            <Link to='/' onClick={() => setOpenList(false)} className='text-gray-700 hover:text-green-600'>Home</Link>
                            <Link to='/products' onClick={() => setOpenList(false)} className='text-gray-700 hover:text-green-600'>All Products</Link>
                            <Link to='/contact-us' onClick={() => setOpenList(false)} className='text-gray-700 hover:text-green-600'>Contact</Link>

                            {user ? (
                                <>
                                    <Link to='/orders' onClick={() => setOpenList(false)} className='text-gray-700 hover:text-green-600'>My Orders</Link>
                                    <button onClick={() => { setOpenList(false); logout(); }} className='text-left text-gray-700 hover:text-red-600'>Logout</button>
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        setOpenList(false);
                                        navigate('/login');
                                    }}
                                    className='bg-green-500 text-white py-1 rounded mt-2'
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default NavBar
