import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import GirlImageAnime from "../assets/Animation - 1711391569191.json";
 import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
  
interface ChildProps {
  toggle:boolean
}


const Home: React.FC<ChildProps>  = (props) => {
  const imageRef = useRef<LottieRefCurrentProps>(null);
   return (
    <> 
     
    <div className="flex flex-col-reverse md:flex-row mx-auto     p-10 items-center justify-around">
      <div className=" sm:text-center md:text-left  ">
        <h1 className=" text-3xl font-semibold p-5 ">
        I'M ENOFUA DIVINE
        </h1>
        <p >
            I'm an Electrical Electronics Engineer student and a front-End Engineer with a Diploma from <a className="text-purple-900" href="https://www.altschoolafrica.com/">  Altschool Africa .  </a> 
             I'm all about Engineering  and technology. Beyond Tech i love reading and that include novels, Biographies and Autobiogrphies of significant people  and also funny tweets . </p>
      </div>

      <div className="w-3/4 mt-28">
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
