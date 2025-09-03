import React from 'react'
import Navbar from '../navbar/Navbar'
import CV from './CV.pdf'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-2/3 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative max-w-3xl w-full'>
    <h1 className='title-font sm:text-5xl text-4xl mb-6 font-bold text-teal-400'>Hi! I'm Aziz</h1>
    <p className='mb-10 leading-relaxed text-lg'>
    I am a third-year Software Engineering student at Polytechnique Montréal with a strong passion for system design, artificial intelligence, and mathematics. Previously, I was a web developer at PolyOrbite, a technical society where I contributed to the organization’s website. More recently, I completed a software engineering internship at Poslik, a company offering innovative point-of-sale (POS) solutions tailored for restaurants. During this internship, I developed an inventory management module by analyzing functional requirements, designing the technical architecture, and implementing core features such as quantity input, stock comparison, and automatic adjustments. Working with PHP, Symfony, and PostgreSQL, I contributed to improving the consistency between physical and digital inventories and streamlining restaurant operations. My experience reflects my enthusiasm for building innovative and impactful solutions.
    </p>
    <div className='flex justify-center'>
        <a href={CV} download> 
            <button className='inline-flex text-white bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 hover:shadow-[0_0_40px_teal] rounded-full text-lg'>
                Download my resume
            </button>
        </a>
    </div>
</div>


<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto'>
    <img src={img} alt="hero" className='object-cover object-center border-2 border-purple-400 shadow-[0_0_15px_teal] border-opacity-60 rounded-full w-80 h-80' />
</div>


            </div>
        </section>
    </div>
  )
}
