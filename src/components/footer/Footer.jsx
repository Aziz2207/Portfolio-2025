import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const listNavbar = [
    { name: t("footer.home"), link: '/' },
    { name: t("footer.projects"), link: '/projects' },
    { name: t("footer.courses"), link: '/courses' },
    { name: t("footer.blog"), link: '/blog' }
  ]

  return (
    <footer className='bg-gray-700 rounded-lg shadow mt-auto'>
      <div className='w-full mx-auto max-w-screen-xl p-4 flex justify-center'>
        <ul className='flex flex-wrap items-center justify-center text-sm font-medium text-gray-100'>
          {listNavbar.map((item, index) => (
            <li key={index} className='mx-4'>
              <Link to={item.link} className='hover:text-teal-400'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
