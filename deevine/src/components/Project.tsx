import { FaCss3, FaVuejs, FaJs, FaFigma, FaGithub, FaLink } from "react-icons/fa";
// import chatter from "../assets/chatter.png";
import { useState } from "react";
interface ChildProps {
  title: string,
  image: string,
  giturl: string,
  liveurl: string
}

const Project: React.FC<ChildProps> = (props) => {
  const [text, setText] = useState(false)
    const HandleShowText = () => {
    setText(true)
    }
    const HandleHideText = () => {
        setText(false)
        }
        const [text2, setText2] = useState(false)

        const HandleShowText2 = () => {
        setText2(true)
        }
        const HandleHideText2 = () => {
            setText2(false)
            }
  return (
     
      <div className=" hover:border-purple-700 hover:border cursor-pointer  bg-darkMode-layer p-6 mb-0 rounded-xl flex items-center justify-center">
        <div className="">
          <div className=" w-full mt-10 rounded-lg bg-gradient-to-r from-blue-900  via-slate-950 to-purple-900  p-1">
            <img className="" src={props.image} alt="image of project" />
          </div>

          <div className=" p-2 flex justify-between items-center">
            
            <div className="flex items-center gap-1 text-purple-400 text-2xl font-bold">
              <FaVuejs />
              <FaJs />
              <FaCss3 />
              <FaFigma />
            </div>
            <span>MARCH 2024</span>
          </div>
          <div className="text">
            <h5 className="text-center pb-4 pt-4 text-2xl">{props.title}</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nemo! Cumque libero ipsum rem officiis.</p>
          </div>
          <div className=" text-purple-400 text-xl  flex pt-5 justify-end gap-3">
 <div onMouseEnter={HandleShowText} onMouseLeave={HandleHideText} ><a href={props.giturl}><FaGithub /> </a> {text && <span className="absolute sm:static  lef left-80 rounded-xl p-3 bg-darkMode-background text-darkMode-text text-sm"> View Github Site </span> }</div>
 <div onMouseEnter={HandleShowText2} onMouseLeave={HandleHideText2} ><a href={props.liveurl}> <FaLink /></a>{text2 && <span className="absolute sm:static  left-80 rounded-xl p-3 bg-darkMode-background text-darkMode-text text-sm">View Live Site</span> }</div>
          </div>
        </div>
      </div>

  
     
      
  );
};

export default Project;
