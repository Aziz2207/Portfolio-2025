import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const CATEGORIES = {
  ALL: "all",
  AI: "ai",
  SE: "se",
};

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);

  const filters = [
    { key: CATEGORIES.ALL, label: t("projects.filter_all") },
    { key: CATEGORIES.AI, label: t("projects.filter_ai") },
    { key: CATEGORIES.SE, label: t("projects.filter_se") },
  ];

  const listProjects = [
    {
      id: 1,
      title: t("projects.rpg_title"),
      stack: t("projects.rpg_stack"),
      description: [t("projects.rpg_desc1"), t("projects.rpg_desc2"), t("projects.rpg_desc3")],
      link: "https://github.com/Aziz2207/Tactical-RPG-Platform",
      category: CATEGORIES.SE,
    },
    {
      id: 2,
      title: t("projects.melanoma_title"),
      stack: t("projects.melanoma_stack"),
      description: [t("projects.melanoma_desc1"), t("projects.melanoma_desc2")],
      link: "https://github.com/Aziz2207/Melanoma-Image-Classification-model",
      category: CATEGORIES.AI,
    },
    {
      id: 3,
      title: t("projects.ecoli_title"),
      stack: t("projects.ecoli_stack"),
      description: [t("projects.ecoli_desc1"), t("projects.ecoli_desc2")],
      link: "https://github.com/Aziz2207/Predicting-Antimicrobial-Resistance-in-E.-coli",
      category: CATEGORIES.AI,
    },
    {
      id: 4,
      title: t("projects.bert_title"),
      stack: t("projects.bert_stack"),
      description: [t("projects.bert_desc1"), t("projects.bert_desc2")],
      link: "https://github.com/Aziz2207/BERT-for-Medical-NER-ADE",
      category: CATEGORIES.AI,
    },
    {
      id: 5,
      title: t("projects.gpt2_title"),
      stack: t("projects.gpt2_stack"),
      description: [t("projects.gpt2_desc1"), t("projects.gpt2_desc2")],
      link: "https://github.com/Aziz2207/GPT2-from-Scratch-for-Machine-Translation",
      category: CATEGORIES.AI,
    },
    {
      id: 6,
      title: t("projects.rag_title"),
      stack: t("projects.rag_stack"),
      description: [t("projects.rag_desc1"), t("projects.rag_desc2")],
      link: "https://github.com/Aziz2207/RAG-for-Temporal-Question-Answering",
      category: CATEGORIES.AI,
    },
  ];

  const filtered =
    activeFilter === CATEGORIES.ALL
      ? listProjects
      : listProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
          {t("projects.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === filter.key
                  ? "bg-purple-500 border-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                  : "border-purple-400 border-opacity-60 text-gray-300 hover:border-purple-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-full border-2 border-purple-400 border-opacity-60 rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-shadow duration-300 p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-xl font-bold text-teal-400">
                    {project.title}
                  </h2>
                  <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-purple-400 border-opacity-60 text-purple-300">
                    {filters.find((f) => f.key === project.category)?.label}
                  </span>
                </div>
                <p className="italic text-gray-300 text-sm mb-3">
                  {project.stack}
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}