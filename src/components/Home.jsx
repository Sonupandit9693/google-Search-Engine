import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import logo from '../assets/yt-logo-mobile.png'
// import {BsYoutube} from 'react-icons/bs'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24  ">
              
              <div className="flex flex-wrap -m-4 md:ml-60 md:mr-60 md:mt-0">
              

               
                <div className="xl:w-1/5 md:w-1/2 p-2">
                  <div className=" flex justify-between border border-gray-200 bg-[#ffffffea] p-2 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-1 cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-6 h-6 justify-center items-center md:mr-[-2px] md:mt-[-2px]"
                        viewBox="0 0 18 15"
                      >
                        {/* <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path> */}
                        <Link to="https://www.youtube.com/">
                          <FaYoutube className="items-center justify-center" />
                        </Link>
                      </svg>
                    </div>
                    <h2 className="text-lg text-gray-900 justify-start font-medium title-font mt-2">
                      youtube
                    </h2>
                  </div>
                </div>
                <div className="xl:w-1/5 md:w-1/2 p-2">
                  <div className=" flex justify-between border border-gray-200 bg-[#ffffffea] p-2 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-600 mt-1 cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-6 h-6 md:mr-[-2px] md:mt-[-2px]"
                        viewBox="0 0 18 15"
                      >
                        <Link to="https://www.github.com/">
                          <FaGithub className="items-center" />
                        </Link>
                      </svg>
                    </div>
                    <h2 className="text-lg text-gray-900 justify-start font-medium title-font mt-2">
                      Github
                    </h2>
                  </div>
                </div>
                <div className="xl:w-1/5 md:w-1/2 p-2">
                  <div className=" flex justify-between border border-gray-200 bg-[#ffffffea] p-2 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-yellow-500 mt-1 cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-12 h-6 md:mr-[-2px] md:mt-[2px] justify-center "
                        viewBox="0 0 20 20"
                      >
                        <Link to="https://www.facebook.com/">
                          <FaFacebookF className="items-center justify-center" />
                        </Link>
                      </svg>
                    </div>
                    <h2 className="text-lg text-gray-900 justify-start font-normal title-font mt-2 mr-10">
                      facebook
                    </h2>
                  </div>
                </div>
                <div className="xl:w-1/5 md:w-1/2 p-2">
                  <div className=" flex justify-between border border-gray-200 bg-[#ffffffea] p-2 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-600 mt-1 cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-6 h-4 md:mr-[-1px] md:mt-[-2px]"
                        viewBox="0 0 15 15"
                      >
                        <Link to="https://www.linkedin.com/">
                          <FaLinkedinIn className="items-center" />
                        </Link>
                      </svg>
                    </div>
                    <h2 className="text-lg text-gray-900 justify-start font-medium title-font mt-2">
                      LinkedIn
                    </h2>
                  </div>
                </div>
                <div className="xl:w-1/5 md:w-1/2 p-2">
                  <div className=" flex justify-between border border-gray-200 bg-[#ffffffea] p-2 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-500 mt-1 cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-6 h-6 md:mr-[-6px] md:mt-[2-px]"
                        viewBox="0 0 18 15"
                      >
                        <Link to="https://www.twitter.com/">
                          <FaTwitter className="items-center" />
                        </Link>
                      </svg>
                    </div>
                    <h2 className="text-lg text-gray-900 justify-start font-medium title-font mt-2">
                      Twitter
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
