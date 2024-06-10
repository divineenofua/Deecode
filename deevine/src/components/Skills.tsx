import { FaHtml5, FaCss3, FaReact , FaVuejs , FaFigma } from "react-icons/fa";
 
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

interface ChildProps {
  toggle: boolean;
}
const Skills: React.FC<ChildProps> = (props)  => {
    
  return (
    <div className=" sm:m-6 pb-20 border-t border-b border-gray-400 m-10"> 
      <h3 className=  { ` bg ${props. toggle ?"purp text-center pt-3 font-sans italic text-5xl" : 'blue text-center pt-3 font-sans italic   text-5xl'}` }  >Skills</h3>
    <div id="skills" className=" grid grid-cols-2 gap-7 sm:grid-cols-3   widthe:grid-cols-8 w sm:gap-4 pt-10 m-4 ">
     <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 widthe:border-none pl-5  ">
      <FaHtml5 className="hover:animate-ping   text-5xl" />  <h4 className="hover:animate-pulse text-[14px]" >HTML5</h4>
        </div>
        <div className="flex gap-2   items-center  text-xl border-l-2 border-gray-400 pl-5">
      <FaCss3 className="hover:animate-ping  text-5xl" />  <h4 className="hover:animate-pulse text-[14px]" >CSS</h4>
        </div>
         
        <div className="flex gap-2   items-center text-xl   border-l-2 border-gray-400 pl-5">
      <SiJavascript className="hover:animate-ping    text-5xl"  />      <h4 className="hover:animate-pulse text-[14px]" >JAVASCRIPT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
      <FaReact className="hover:animate-ping  text-5xl " />  <h4 className="hover:animate-pulse text-[14px]" >REACT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
      <FaVuejs className="hover:animate-ping  text-5xl" />  <h4 className="hover:animate-pulse text-[14px]" >VUE</h4>
        </div>
        <div  className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
       <FaFigma className="hover:animate-ping  text-5xl  " /> <h4 className="hover:animate-pulse text-[14px]" >FIGMA</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">   <SiTypescript className="hover:animate-ping  text-5xl "/>
        <h4 className="hover:animate-pulse text-[14px] " >TYPESCRIPT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">   <SiTailwindcss className="hover:animate-ping  "/>
        <h4 className="hover:animate-pulse text-[14px]" >TAILWIND</h4>
        </div>
    </div>
    </div>
  )
}

export default Skills