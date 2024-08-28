import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import myimage from '../assets/myimage.jpg'

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around items-center'>
          <div className='sm:px-16 px-2 text-center'>
            {/* Circular Image Section */}
            <div className='flex justify-center mt-8'>
              <div className='w-40 h-40 rounded-full overflow-hidden border-4 border-green-500'>
                <img
                  src={myimage}  // replace 'your-image-url.jpg' with the actual path to your image
                  alt='Sourav Bhattacharyya'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <h2 className='text-4xl sm:text-5xl font-extrabold mt-6'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Sourav Bhattacharyya, a 2026 graduate🎓 with a passion for finding simple solutions to complex problems. I love working in the field of cybersecurity, blockchain, and AI/ML. As a seasoned{' '}
              <a
                className='text-green-300 hover:text-green-500 duration-300'
                href='https://www.linkedin.com/in/sourav-bhattacharyya-97210a264/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Software Developer
              </a>
              , I specialize in both Cybersecurity and Software Engineering🚀.
              <br />
              Besides coding, I love exploring the world of cinema and diving deep into its vast universe, gaining deep insights from it.
            </p>
            <ButtonLink
              url='https://drive.google.com/file/d/1BObHE6ircGDvosFFeTTO1Hc0bmsrz2Oc/view?usp=sharing'
              text='View Resume →'
              padding='p-3'
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
