import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import GirlImageAnime from "../assets/Animation - 1711391569191.json";
 import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import {  Link }   from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const imageRef = useRef<LottieRefCurrentProps>(null);
   return (
    <> 
     
    <div className="flex flex-col-reverse md:flex-row mx-auto  p-10 items-center justify-around">
      <div className=" sm:text-center md:text-left  ">
        <h1 className=" text-3xl font-semibold p-5 ">
        I'm ENOFUA DIVINE
        </h1>
        <p >
            I'm an Electrical Electronics Engineer and a front-End Engineer with a Diploma from <a className="text-purple-900" href="http://">Altschool Africa</a>
             I guess You can say i have a Knack for anything Engineering and technological Development </p>
      </div>

      <div className="w-3/4">
        <Lottie
          onComplete={() => {
            imageRef.current?.goToAndPlay(45, true);
          }}
        //   loop={false}
          lottieRef={imageRef}
          animationData={GirlImageAnime}
        />
      </div>
     
    </div>
    <Skills />
    <Projects />
    <Link to='/projects'>  <button className=" animate-bounce bg-purple-900 hover:bg-purple-400 rounded-md p-4 flex items-center gap-1 ">View More <FaArrowRight /></button></Link>  

    <Contact />
    </>
  );
};

export default Home;
