//  import DeeImage from '../assets/deeimage.png'
import {   FaGithubSquare , FaLinkedin , FaTwitterSquare, FaInstagramSquare, FaFreeCodeCamp} from "react-icons/fa";
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
                <li className=" hover:bg-slate-400 hover:text-purple-900  bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="#"><FaLinkedin />Linkedin</a></li>
                <li className="  hover:bg-slate-400 hover:text-purple-900 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="#"><FaGithubSquare />Github</a></li>
                <li className="  bg-darkMode-lighterlayer rounded-xl  hover:bg-slate-400 hover:text-purple-900 shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="#"><FaInstagramSquare />Instagram</a></li>
                <li className="  hover:bg-slate-400 hover:text-purple-900 bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="#"><FaTwitterSquare />Twitter</a></li>
                <li className=" hover:bg-slate-400 hover:text-purple-900  bg-darkMode-lighterlayer rounded-xl shadow-2xl mb-5 p-3"><a className="flex  items-center gap-3 text-xl justify-center" href="#"><FaFreeCodeCamp /> FreeCodeCamp</a></li>


           
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Contact 