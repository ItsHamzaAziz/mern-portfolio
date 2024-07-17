import React from 'react'
import SingleProject from '../components/SingleProject'

const Projects = () => {
  return (
    <div className='mt-16'>
        <h1 className='text-4xl flex justify-center items-center space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-kanban h-10 w-10"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>
            <span>Key Projects</span>
        </h1>

        <div className='grid grid-cols-3 mt-16'>
            <SingleProject />
            <SingleProject />
            <SingleProject />
        </div>
    </div>
  )
}

export default Projects