import React, { useEffect, useState } from 'react'
import { useShopContext } from '../context/ShopContext'
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, navigate, currency, getCartAmount, userAddress, setUserAddress } = useShopContext();

    const [paymentMethod, setPaymentMethod] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const addressFound = localStorage.getItem('address');
        if (addressFound) {
            const parsedAddress = JSON.parse(addressFound);
            setUserAddress(parsedAddress);
        }
    }, [location.key])
    function handlePlaceOrder() {
        if (cartItems.length == 0) {
            toast.error('Cart is Empty');
            return;
        }

        if (!userAddress) {
            toast.error('Please Add Address');
            return;
        }

        if (paymentMethod !== 'COD') {
            toast.error('Select Payment Mode');
            return;
        }


        const orderData = {
            cartItems: JSON.parse(JSON.stringify(cartItems)),
            userAddress: { ...userAddress },
            total: getCartAmount() + (2 * cartItems.length) + ((getCartAmount() / 100) * 2),
            createdAt: new Date().toISOString(),
        };

        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const updatedOrders = [...existingOrders, orderData];

        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        localStorage.setItem("latestOrder", JSON.stringify(orderData));

        navigate("/orders");
        toast.success('Order Placed Successfully')
    }

    function handlePaymentMode(paymentMode) {
        if (paymentMode === 'cod') {
            setPaymentMethod('COD')
        } else {
            toast.error('Online Payment Not Available')
        }
    }

    return (
        <div className='mt-4'>
            <div className='flex flex-col gap-4 ml-5 sm:ml-10 lg:ml-20 '>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Shopping Cart</h1>
                <p className='text-md text-gray-700'>Product Details</p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 px-5 sm:px-10 lg:px-20'>
                <div className='min-w-[280px] min-h-[250px] md:w-full md:h-full border border-gray-300 flex flex-col  mt-8 p-2'>
                    <div className='flex justify-evenly'>
                        <p>Product Image</p>
                        <p>Product Name</p>
                        <p>Sub Total</p>
                        <p>Action</p>
                    </div>
                    {cartItems.length > 0 && cartItems.map((item) => (
                        <div key={item.id} className='w-full h-[60px]  md:h-[100px] border border-gray-300 rounded mt-4  flex  items-center justify-evenly p-2'>
                            <img src={item.image} alt='product_image' className='w-14 h-14' />
                            <div className='flex flex-col md:gap-1'>
                                <p>{item.name}</p>
                                <p>Quantity : {item.quantity}</p>
                            </div>
                            <p>{item.price * item.quantity}</p>
                            <MdDeleteForever className='text-red-500 cursor-pointer w-6 h-6' onClick={() => removeFromCart(item.id)} />
                        </div>
                    ))}
                    <p onClick={() => { navigate('/products'); scrollTo(0, 0); }} className='text-green-600 font-medium text-md mt-4 ml-10 cursor-pointer'>Continue Shopping</p>
                </div>
                <div className='min-w-[280px] min-h-[250px] md:w-[600px] md:h-[520px] border border-gray-300 flex flex-col  mt-8 p-10'>
                    <h1 className='text-lg md:text-xl lg:text-2xl text-gray-700 px-8'>Order Summary</h1>
                    <hr className='w-250px' />
                    <div className='mt-4 flex items-center gap-4 md:gap-10 xl:gap-20'>
                        <p className='text-sm md:text-md text-gray-700 lg:text-lg'>Delivery Address</p>
                        <p onClick={() => { navigate('/add-address'); scrollTo(0, 0); }} className='text-green-700 text-xs md:text-md xl:text-lg cursor-pointer'>{userAddress !== null ? 'Change' : 'Add Address'}</p>
                    </div>
                    <div className='border border-gray-400  h-10 md:h-10 flex items-center px-2 mt-2 text-gray-600'>
                        {userAddress !== null ? <p className='p-2 text-xs lg:text-lg'>{userAddress.street}<span className='ml-4'>{userAddress.city}<span className='ml-4 mr-2'>{userAddress.pincode}.....</span></span></p> : <p>No Address Found</p>}
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg text-gray-700'>Payment Method</p>
                        <div className='border border-gray-300 flex flex-col justify-center gap-2 w-[200px] sm:w-[250px] xl:w-full p-1'>
                            <p><input type='checkbox' value={paymentMethod} onClick={() => handlePaymentMode('cod')} className='mr-2' />Cash on Delivery</p>
                            <p><input className='mr-2' value={paymentMethod} onClick={() => handlePaymentMode('online')} type='checkbox' />Online Payment</p>
                        </div>
                    </div>
                    <hr className='mt-6 border border-gray-300' />
                    {cartItems.length > 0 && (<div className='mt-6 text-gray-600 md:text-xl'>
                        <div className='flex justify-between'>
                            <p>Price:</p>
                            <p className='mr-4'>{currency}{getCartAmount()}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping Fees:</p>
                            <p className='mr-4'>{currency}{2 * cartItems.length}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax (2%):</p>
                            <p className='mr-4'>{currency}{(getCartAmount() / 100) * 2}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Total Amount:</p>
                            <p className='mr-4'>{currency}{getCartAmount() + (2 * cartItems.length) + ((getCartAmount() / 100) * 2)}</p>
                        </div>
                    </div>)}
                    <div onClick={handlePlaceOrder} className='mt-4 text-center'>
                        <button className='outline-none cursor-pointer  border bg-green-600 hover:bg-green-500 text-white px-4 py-2 w-full'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
