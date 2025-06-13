import React from 'react'
import fresh_basket_logo from '../assets/fresh_basket_logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="px-6 pt-4 md:px-16 lg:px-36 w-full bg-green-200 text-gray-800 mt-16">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src={fresh_basket_logo} alt="logo" />
                    <p className="mt-6 text-sm">
                       Your one-stop online grocery store, delivering fresh fruits, vegetables, and essentials straight to your doorstep, every day.
                    </p>
                    
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2 flex flex-col">
                            <Link to='/'>Home</Link>
                            <Link to='/contact-us'>Contact us</Link>
                            <Link to='privacy-policy'>Privacy policy</Link>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91 6393925797</p>
                            <p>subratoverma7@gmail.com</p>
                            <p> Made With ❤️ Subrato Verma</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © Fresh Basket. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
