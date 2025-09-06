import React from 'react';
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-teal-400'>{t("contact.title")}</h2>

        <div className='mt-8'>
          <h3 className='text-xl font-medium text-white text-center'>{t("contact.email")}</h3>
          <p className='text-center text-lg text-gray-300'>
            <a href='mailto:aziz.hidri.2000@gmail.com' className='hover:text-teal-400'>aziz.hidri.2000@gmail.com</a>
          </p>
        </div>

        <div className='mt-12 text-center'>
          <h3 className='text-xl font-medium text-white'>{t("contact.links")}</h3>
          <div className='flex justify-center mt-4 space-x-6'>
            <a href='https://github.com/Aziz2207' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-teal-400 text-3xl'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/aziz-hidri-648600229/' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-teal-400 text-3xl'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}