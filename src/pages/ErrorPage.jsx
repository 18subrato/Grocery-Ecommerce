import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div class="flex flex-col items-center justify-center text-sm h-[400px]">
            <p class="font-medium text-lg lg:text-xl text-gray-600">404 Error</p>
            <h2 class="md:text-6xl text-4xl font-semibold text-green-600">Page Not Found</h2>
            <p class="text-base mt-4 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="flex items-center gap-4 mt-6">
                <Link to='/'><button type="button" class="bg-green-600 hover:bg-green-500 px-7 py-2.5 text-white rounded active:scale-95 transition-all cursor-pointer">
                    Go back home
                </button></Link>
            </div>
        </div>
    )
}

export default ErrorPage


