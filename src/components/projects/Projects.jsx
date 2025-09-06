import React from 'react';
import { useTranslation } from "react-i18next";
import image from '../../assets/image.png';
import image_2 from '../../assets/image_cnn.png';

export default function Projects() {
  const { t } = useTranslation();

  const listProjects = [
    {
      id: 1,
      image: image,
      title: t("projects.tactical_title"),
      stack: t("projects.tactical_stack"),
      description: [
        t("projects.tactical_desc1"),
        t("projects.tactical_desc2")
      ],
      link: 'https://github.com/Aziz2207/RPG-Platform'
    },
    {
      id: 2,
      image: image_2,
      title: t("projects.melanoma_title"),
      stack: t("projects.melanoma_stack"),
      description: [
        t("projects.melanoma_desc1"),
        t("projects.melanoma_desc2")
      ],
      link: 'https://github.com/Aziz2207/Melanoma-Image-Classification'
    }
  ];

  return (
    <section data-aos="fade-up" data-aos-delay="400" id="projects" className="relative overflow-hidden flex flex-col text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">{t("projects.title")}</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {listProjects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="h-full border-2 border-purple-400 shadow-[0_0_15px_teal] border-opacity-60 rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-teal-400 mb-2">{project.title}</h2>
                  <p className="italic text-gray-300 mb-2">{project.stack}</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}