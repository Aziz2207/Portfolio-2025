import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const listNavbar = [
    { name: t("navbar.home"), link: "/" },
    { name: t("navbar.projects"), link: "/projects" },
    { name: t("navbar.courses"), link: "/courses" },
    { name: t("navbar.blog"), link: "/blog" },
  ];

  return (
    <header className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white border border-white hover:border-teal-300 hover:text-teal-300">
          <a href="#contact">{t("navbar.contact")}</a>
        </button>

        <nav className="md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center">
          {listNavbar.map((item, index) => (
            <Link key={index} to={item.link} className="mr-5 hover:text-teal-300">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-2">
          <button
            onClick={() => changeLanguage("en")}
            className="px-2 py-1 border border-teal-400 text-white hover:bg-teal-400 hover:text-black"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className="px-2 py-1 border border-teal-400 text-white hover:bg-teal-400 hover:text-black"
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
}
