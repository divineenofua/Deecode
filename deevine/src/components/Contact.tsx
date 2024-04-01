//  import DeeImage from '../assets/deeimage.png'
import {   FaGithubSquare ,FaMedium , FaLinkedin , FaBook, FaTwitterSquare, FaCodepen} from "react-icons/fa";
import GirlImageAnim from "../assets/Animation - 1711389945340.json";
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const Contact = () => {
    const imgeRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className=' m-10 pb-40  '> 
        <div className='flex-col p-5  bg-darkMode-layer
         justify-center items-center mt-0'> 
        <div className="text-center">
            {/* <img className=' w-15  mt-0' src={DeeImage} alt="" /> */}
            <span className='text-xl'>CONTACT ME</span>
            <Lottie className="w-20 "
        lottieRef={imgeRef}
        animationData={GirlImageAnim} />
      
            <ul className="m-5">
                 <li className="   hover:bg-slate-400 hover:text-purple-900  bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://www.linkedin.com/in/divine-enofua-etue-07373b231"><FaLinkedin />Linkedin</a></li>
                <li className="  hover:bg-slate-400 hover:text-purple-900 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://github.com/divineenofua"><FaGithubSquare />Github</a></li>
                <li className="  bg-darkMode-lighterlayer rounded-xl  hover:bg-slate-400 hover:text-purple-900 shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://medium.com/@divineenofua"><FaMedium />Instagram</a></li>
                <li className="  hover:bg-slate-400 hover:text-purple-900 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://twitter.com/etue_divine?t=O7nlaFJMqMFnNHAMDoawhQ&s=09"><FaTwitterSquare />Twitter</a></li>
                <li className=" hover:bg-slate-400 hover:text-purple-900  bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://replit.com/@divineenofua"><FaCodepen /> FreeCodeCamp</a></li>
                <li className="animate-pulse hover:bg-slate-400 hover:text-purple-900  bg-purple-600 rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="https://drive.google.com/file/d/1BoZU3SfVyWJ4NV0fsj8tY-9uK_rkRNsj/view?usp=drivesdk"><FaBook /> Check Out My CV</a></li>
           
            </ul>
            <div>
                <span className=" font-serif ">Etue Divine 2024 @deeVine</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact 