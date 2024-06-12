//  import DeeImage from '../assets/deeimage.png'
import {
  FaGithubSquare,
  FaMedium,
  FaLinkedin,
  FaBook,
  FaTwitterSquare,
  FaCodepen,
} from "react-icons/fa";
import GirlImageAnim from "../assets/Animation - 1711389945340.json";
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ChildProps {
  toggle: boolean;
}

const Contact: React.FC<ChildProps> = (props) => {
  const imgeRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div id="contact" className=" m-10 pb-40 mb-0">
      <div
        className={
          props.toggle
            ? "flex-col p-5 bg-darkMode-layer justify-center items-center mt-0"
            : "flex-col p-5  bg-lightMode-layer justify-center items-center mt-0 border-purple-100 shadow-md border "
        }
      >
        <div className="text-center">
          {/* <img className=' w-15  mt-0' src={DeeImage} alt="" /> */}
          <span className="text-xl">CONTACT ME</span>
          <Lottie
            className="w-20 "
            lottieRef={imgeRef}
            animationData={GirlImageAnim}
          />

          <ul className="m-5">
            <li
              className={` ${
                props.toggle
                  ? " hover:bg-slate-400 hover:text-fuchsia-300 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"
                  : " border-sky-200  hover:border   text-sky-300   bg-lightMode-layer rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 text-xl justify-center"
                href="https://www.linkedin.com/in/divine-enofua-etue-07373b231"
              >
                <FaLinkedin />
                Linkedin
              </a>
            </li>
            <li
              className={`${
                props.toggle
                  ? " hover:bg-slate-400 hover:text-fuchsia-300 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"
                  : " border-sky-200  hover:border   text-sky-300   bg-lightMode-layer rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 text-xl justify-center"
                href="https://github.com/divineenofua"
              >
                <FaGithubSquare />
                Github
              </a>
            </li>
            <li
              className={` ${
                props.toggle
                  ? " hover:bg-slate-400 hover:text-fuchsia-300 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"
                  : " border-sky-200  hover:border   text-sky-300   bg-lightMode-layer rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 text-xl justify-center"
                href="https://medium.com/@divineenofua"
              >
                <FaMedium />
                Instagram
              </a>
            </li>
            <li
              className={`${
                props.toggle
                  ? " hover:bg-slate-400 hover:text-fuchsia-300 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"
                  : " border-sky-200  hover:border   text-sky-300   bg-lightMode-layer rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 text-xl justify-center"
                href="https://twitter.com/etue_divine?t=O7nlaFJMqMFnNHAMDoawhQ&s=09"
              >
                <FaTwitterSquare />
                Twitter
              </a>
            </li>
            <li
              className={` ${
                props.toggle
                  ? " hover:bg-slate-400 hover:text-fuchsia-300 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"
                  : " border-sky-200  hover:border   text-sky-300   bg-lightMode-layer rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 text-xl justify-center"
                href="https://replit.com/@divineenofua"
              >
                <FaCodepen /> FreeCodeCamp
              </a>
            </li>
            <li
              className={` bg ${
                props.toggle
                  ? " animate-pulse hover:bg-slate-400 hover:text-fuchisa-100 bg-fuchsia-300 rounded-xl shadow-2xl mb-5 p-3"
                  : "animate-pulse hover:bg-slate-400 hover:text-purple-900 text-white  bg-sky-200 rounded-xl shadow-2xl mb-5 p-3"
              }`}
            >
              <a
                className="flex  items-center gap-3 md:text-xl text-[17px] justify-center"
                href="https://drive.google.com/file/d/1BoZU3SfVyWJ4NV0fsj8tY-9uK_rkRNsj/view?usp=drivesdk"
              >
                <FaBook /> Check Out My CV
              </a>
            </li>
          </ul>
          <div>
            <span className=" font-serif ">Etue Divine 2024 @deeVine</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
