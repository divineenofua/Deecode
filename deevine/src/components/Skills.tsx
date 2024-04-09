import { FaHtml5, FaCss3, FaReact , FaVuejs, FaJs , FaFigma } from "react-icons/fa";
 


const Skills = () => {
    
  return (
    <div className=" sm:m-6 pb-20 border-t border-b border-gray-400 m-10"> 
      <h3 className=" text-center pt-3 font-sans italic text-purple-400 text-5xl">Skills</h3>
    <div id="skills" className=" grid grid-cols-2 gap-7 sm:grid-cols-3  md:grid-cols-8 sm:gap-4 pt-10 m-4 ">
     <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 md:border-none pl-5  ">
      <FaHtml5 className="hover:animate-ping  text-5xl" />  <h4 className="hover:animate-pulse" >HTML5</h4>
        </div>
        <div className="flex gap-2   items-center  text-xl border-l-2 border-gray-400 pl-5">
      <FaCss3 className="hover:animate-ping  text-5xl" />  <h4 className="hover:animate-pulse" >CSS</h4>
        </div>
         
        <div className="flex gap-2   items-center text-xl   border-l-2 border-gray-400 pl-5">
      <FaJs className="hover:animate-ping  text-5xl"  />      <h4 className="hover:animate-pulse" >JAVASCRIPT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
      <FaReact className="hover:animate-ping  text-5xl " />  <h4 className="hover:animate-pulse" >REACT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
      <FaVuejs className="hover:animate-ping  text-5xl" />  <h4 className="hover:animate-pulse" >VUE</h4>
        </div>
        <div  className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">
       <FaFigma className="hover:animate-ping  text-5xl " /> <h4 className="hover:animate-pulse" >FIGMA</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">   <FaJs className="hover:animate-ping  text-5xl "/>
        <h4 className="hover:animate-pulse " >TYPESCRIPT</h4>
        </div>
        <div className="flex gap-2 items-center text-xl border-l-2 border-gray-400 pl-5">   <FaJs className="hover:animate-ping  text-5xl "/>
        <h4 className="hover:animate-pulse " >TAILWIND</h4>
        </div>
    </div>
    </div>
  )
}

export default Skills