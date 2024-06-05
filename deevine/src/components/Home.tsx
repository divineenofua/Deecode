
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import GirlImageAnime from "../assets/Animation - 1711391569191.json";
 import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { useState } from "react";
  
interface ChildProps {
  toggle:boolean
}


const Home: React.FC<ChildProps>  = (props) => {
  const imageRef = useRef<LottieRefCurrentProps>(null);
  const [viewText, setViewText] = useState(false);
  const HandleHideText2 = () => {
    setViewText(!viewText);
  };

   return (
    <> 
     
    <div className="flex flex-col-reverse md:flex-row mx-auto   md:gap-11  p-10 items-center justify-around">
      <div className="  md:w-[70%]    text-left  ">
        <h1 className=" text-[24px] md:text-3xl font-semibold py-5  leading-10 ">Hi there ,
        I'M ENOFUA DIVINE, Front End <span className=" text-purple-300">  developer  </span>and student.
        </h1>
            <p className="  text-left text-[14px]     leading-8" >

Growing up, I've always been fascinated by electronics and other displays of technology. I would try to comprehend with my young mind how these things worked. I recall studying my TV and its remote control, or a car and its key, and wondering how the remote could control the TV and how the car key could open the car doors even from a distance. How did it all work? This curiosity motivated me to study Electrical and Electronics Engineering.
        </p>
        <span onClick={HandleHideText2} className=" cursor-pointer italic text-[13px] text-purple-400">{ viewText ? 'Read More' : 'Read Less'}</span>
        { viewText &&  <p className="  text-left pt-6 text-[13px]  leading-8" >
        My first experience with programming was when I was 15, but it didn't last. I attended a summer camp where I was introduced to Python. Later, I dabbled in HTML and CSS, but then took a break until two years ago. Writing code, observing the results, making adjustments, brainstorming to fix bugs, and curating logic is very satisfying to me.
I recently graduated as a Front-End Engineer with a Diploma from Altschool Africa. I'm seeking a full-time role where I can help a company achieve their
goals.
        </p> }
        

         
        
      </div>

      <div className="  mt-28">
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
    <Projects  toggle={props.toggle} />
 
    <Contact toggle={props.toggle} />
    </>
  );
};

export default Home;
