import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between md:px-28 sm:px-10 px-5 items-center mb-10 sm:mt-10 mt-5'>
        <button className='bg-gray-200 text-gray-900 px-6 py-2 rounded-3xl'>My CV</button>

        <ul className='flex sm:space-x-4 space-x-2'>
            <li><a href='https://linkedin.com/in/itshamzaaziz' target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>/</li>
            <li><a href='https://github.com/ItsHamzaAziz' target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
    </header>
  )
}

export default Header