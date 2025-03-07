import React from 'react'
import SignIn from '@/components/signin'


const Login = () => {
    return (
        <section className='min-h-[90vh] flex flex-col items-center justify-center '>
            <h1 className='text-xl font-bold'>Login</h1>
            <div className='bg-white shadow-lg shadow-gray-200 text-lg font-semibold p-5 '>
                <SignIn/>
            </div>
        </section>
    )
}

export default Login
