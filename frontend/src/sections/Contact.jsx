import React from 'react'

const Contact = () => {
    return (
        <div className='py-20 border-b border-gray-700 rounded-ee-[50px] rounded-es-[50px] sm:rounded-ee-[125px] sm:rounded-es-[125px]'>
            <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-text h-7 w-7 sm:h-10 sm:w-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
                <span>Contact Me</span>
            </h1>

            <form className='w-3/4 md:w-1/2 mx-auto mt-10'>
                <input
                    type="text"
                    placeholder='Your Name'
                    className='mt-5 w-full px-6 py-2 rounded-lg focus:outline-none text-black'
                />
                <input
                    type="email"
                    placeholder='Your Email'
                    className='mt-5 w-full px-6 py-2 rounded-lg focus:outline-none text-black'
                />
                <textarea
                    placeholder='Your Message'
                    className='mt-5 w-full px-6 py-2 rounded-lg focus:outline-none text-black'
                />

                <button type='submit' className='mt-5 bg-blue-700 text-gray-200 w-full px-6 py-2 rounded-lg flex items-center justify-center space-x-2'>
                    <span>Send</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
                </button>
            </form>
        </div>
    )
}

export default Contact