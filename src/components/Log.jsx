import React from 'react';


function Log() {
    return (


        <div className="min-h-screen flex items-center justify-center bg-violet-300">
            <div className='flex items-center justify-center bg-white h-[600px] w-6xl rounded-3xl shadow-md overflow-hidden'>
                <div className=' w-1/2  bg-gray-400 h-full  flex 
                     bg-[url(https://i.pinimg.com/736x/0c/29/5e/0c295e9e684ee4cd6723511b4cccde04.jpg)] bg-no-repeat bg-cover bg-center px-3 py-3'>
                        <div className="text-white font-bold text-xl">AMU</div>
          <div className='flex items-center justify-center'>
            <h1 className='text-5xl text-white font-semibold mt-[100px]'>capturing moments creating memories</h1>
          </div>
                </div>
                <div className=' w-1/2  bg-indigo-800 h-full flex flex-col  '>
                    <h2 className='text-5xl my-1 text-center font-extrabold mb-7 mt-4 text-white'>Create a account</h2>
                    <p className="text-lg  text-red-400 mb-6 px-7 cursor-pointer">
                       i have no account? <span className="text-gray-400 cursor-pointer border-b-1">Log in</span>
                    </p>
                    <form className='flex flex-col items-center justify-center gap-4 px-7'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className='border-b border-gray-300 placeholder-gray-300 w-full bg-transparent focus:outline-none my-4' />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className='border-b border-gray-400 placeholder-gray-300 w-full bg-transparent focus:outline-none my-3' />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className='border-b border-gray-400 placeholder-gray-300 w-full bg-transparent focus:outline-none my-3' />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className='border-b border-gray-400 placeholder-gray-300 w-full bg-transparent focus:outline-none my-3' />
                    </form>
                </div>
            </div>
        </div>

    );
}
export default Log;
