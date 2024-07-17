import React from 'react'

const SingleProject = ({ title, description, githubLink, className }) => {
  return (
    <div className={className}>
      <div className='space-y-5'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-justify'>{description}</p>
      </div>

      <button className='mt-5 bg-gray-200 text-gray-900 w-full px-6 py-2 rounded-3xl'>
        <a href={githubLink} target='_blank' className='flex items-center justify-center space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          <span>Source Code</span>
        </a>
      </button>
    </div>
  )
}

export default SingleProject