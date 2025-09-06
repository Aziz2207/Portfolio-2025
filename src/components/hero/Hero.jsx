import { useTranslation } from "react-i18next";
import Navbar from "../navbar/Navbar";
import CV from "./CV.pdf";
import img from "../../assets/img.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <section data-aos="fade-up" data-aos-delay="250" className="text-white body-font z-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-2/3 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative max-w-3xl w-full">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-teal-400">
              {t("hero.title")}
            </h1>
            <p className="mb-10 leading-relaxed text-lg">
              {t("hero.description")}
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button className="inline-flex text-white bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 hover:shadow-[0_0_40px_teal] rounded-full text-lg">
                  {t("hero.resume")}
                </button>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center border-2 border-purple-400 shadow-[0_0_15px_teal] border-opacity-60 rounded-full w-80 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}