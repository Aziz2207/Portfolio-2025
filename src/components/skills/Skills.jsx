import React from 'react'
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
      <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
        <div 
          data-aos='fade-up' 
          data-aos-delay='200' 
          className='md:w-1/2 md:pr-12 md:py-8'
        >
          <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-4 text-teal-400'>
            {t("skills.title")}
          </h1>

          <div className='mb-6'>
            <h2 className='text-xl font-semibold mb-2 text-teal-300'>{t("skills.languages")}</h2>
            <p className='leading-relaxed text-base'>
              <strong>{t("skills.proficient")}:</strong> C++, Python, JavaScript/TypeScript, PHP, SQL<br/>
              <strong>{t("skills.familiar")}:</strong> Java, R, Assembly
            </p>
          </div>

          <div className='mb-6'>
            <h2 className='text-xl font-semibold mb-2 text-teal-300'>{t("skills.math")}</h2>
            <p className='leading-relaxed text-base'>
              {t("skills.math_desc")}
            </p>
          </div>

          <div className='mb-6'>
            <h2 className='text-xl font-semibold mb-2 text-teal-300'>{t("skills.ai")}</h2>
            <p className='leading-relaxed text-base'>
              {t("skills.ai_desc")}
            </p>
          </div>

          <div className='mb-6'>
            <h2 className='text-xl font-semibold mb-2 text-teal-300'>{t("skills.other")}</h2>
            <p className='leading-relaxed text-base'>
              {t("skills.other_desc")}
            </p>
          </div>
        </div> 
      </div>
    </section>
  )
}
