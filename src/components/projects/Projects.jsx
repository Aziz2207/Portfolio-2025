import React from 'react';
import image from '../../assets/image.png';
import image_2 from '../../assets/image_cnn.png'

export default function Projects() {
    const listProjects = [
        {id:1, image:image, title:'Tactical RPG Platform', link:'https://github.com/Aziz2207/RPG-Platform'},
        {id:2, image:image_2, title:'Melanoma Classification', link: 'https://github.com/Aziz2207/Melanoma-Image-Classification'},
    ];

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12 text-teal-400'>My Projects</h2>
                <div className='flex flex-wrap justify-center'>
                    {
                        listProjects.map((project) => {
                            return (
                                <div key={project.id} className='p-4'>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                        <div className='h-full border-2 border-purple-400 shadow-[0_0_15px_teal] border-opacity-60 rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-shadow duration-300'>
                                            <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                            <div className='p-6'>
                                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}
