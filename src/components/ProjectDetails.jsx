import React from 'react';
import '../App.css';
import Footer from './Footer';
import ButtonLink from './ButtonLink';

export const ProjectDetails = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='project-details'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Projects</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              <strong>Details about project coming soon</strong>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
            <ButtonLink
              url='https://github.com/Sourav-Bhattacharyya'
              text='Visit GitHub Profile →'
              padding={`p-3`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

