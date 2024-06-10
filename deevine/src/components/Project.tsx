import {
  
  FaGithub,
  FaLink,

} from "react-icons/fa";
// import chatter from "../assets/chatter.png";
import { useState } from "react";
interface ChildProps {
  title: string;
  image: string;
  giturl: string;
  liveurl: string;
  toggle: boolean;
  text: string;
  text2: string;
  date: string;
  icon: Array<React.ReactNode>; // Specify the type of elements in the array
}

const Project: React.FC<ChildProps> = (props) => {
  const [text, setText] = useState(false);
  const [para, setPara] = useState(false);

  const HandleClickPara = () => {
    setPara(!para);
  };
  const HandleShowText = () => {
    setText(true);
  };
  const HandleHideText = () => {
    setText(false);
  };
  const [text2, setText2] = useState(false);

  const HandleShowText2 = () => {
    setText2(true);
  };
  const HandleHideText2 = () => {
    setText2(false);
  };
  return (
    <div
      className={  
        props.toggle
          ? " hover:border-gray-700 border border-darkMode-background   shadow-lg  bg-darkMode-layer p-6 mb-10 rounded-xl flex items-center justify-center"
          : "hover:border-purple-200 shadow-md border   bg-lightMode-layer  p-6 mb-10 rounded-xl flex items-center  project justify-center"
      }
    >
      <div className=" relative">
        <div className=" w-full mt-10 rounded-lg img shadow-lg bg-white p-1">
          <img className=" rounded-lg " src={props.image} alt="image of project" />
        </div>

        <div className=" p-2 flex justify-between items-center">
          <div className= { ` bg ${props. toggle ?"purp flex items-center gap-1   text-2xl font-bold" : 'blue flex items-center gap-1   text-2xl font-bold'}` } >
           {props.icon.map((icon, index) => ( <span key={index}>{icon}</span>))}
          </div>
          <span>{props.date}</span>
        </div>
        <div className="text ">
          <h5 className="text-center pb-4 pt-4 ">{props.title}</h5>
          <p className=" italic text-[14px]   ">{props.text}</p>
          {para ? (
            <p className="pt-5 pb-10 text-[14px]   italic">{props.text2}</p>
          ) : (
            "......."
          )}{" "}
          <br />
          <span
            onClick={HandleClickPara}
            className= { ` bg ${props. toggle ?"purp  font-serif  pt-5   text-xl cursor-pointer" : 'blue  font-serif  pt-5   text-xl cursor-pointer'}` } 
          >
            {para ? " View less" : "View more"}
          </span>
        </div>
        <div className= { ` bg ${props. toggle ?"purp text-xl  flex pt-5 justify-end gap-3" : 'blue    text-xl  flex pt-5 justify-end gap-3'}` }>
          <div onMouseEnter={HandleShowText} onMouseLeave={HandleHideText}>
            <a href={props.giturl}>
              <FaGithub />{" "}
            </a>{" "}
            {text && (
              <span className="absolute  sm:left-80   left-40 rounded-xl p-3 bg-darkMode-background text-darkMode-text text-sm">
                
                { props.giturl === '' ? 'Private repo' :'View Github Site'}
              </span>
            )}
          </div>
          <div onMouseEnter={HandleShowText2} onMouseLeave={HandleHideText2}>
            <a   href={props.liveurl}>
              {" "}
              <FaLink />
            </a>
            {text2 && (
              <span className="absolute sm:left-80   left-40 rounded-xl p-3 bg-darkMode-background text-darkMode-text text-sm">
                { props.liveurl === '' ? 'no Link' :'View Live Site'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
