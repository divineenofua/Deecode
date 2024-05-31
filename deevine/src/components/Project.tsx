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
          ? " hover:border-purple-700 hover:border cursor-pointer  bg-darkMode-layer p-6 mb-10 rounded-xl flex items-center justify-center"
          : "border-purple-100 shadow-md border cursor-pointer  bg-lightMode-layer  p-6 mb-10 rounded-xl flex items-center justify-center"
      }
    >
      <div className=" relative">
        <div className=" w-full mt-10 rounded-lg bg-gradient-to-r from-blue-900  via-slate-950 to-purple-900  p-1">
          <img className="" src={props.image} alt="image of project" />
        </div>

        <div className=" p-2 flex justify-between items-center">
          <div className="flex items-center gap-1 text-purple-400 text-2xl font-bold">
           {props.icon.map((icon, index) => ( <span key={index}>{icon}</span>))}
          </div>
          <span>{props.date}</span>
        </div>
        <div className="text">
          <h5 className="text-center pb-4 pt-4 ">{props.title}</h5>
          <p className=" italic ">{props.text}</p>
          {para ? (
            <p className="pt-5 pb-10 italic">{props.text2}</p>
          ) : (
            "......."
          )}{" "}
          <br />
          <span
            onClick={HandleClickPara}
            className=" font-serif  pt-5 text-purple-500 text-xl cursor-pointer  "
          >
            {para ? " View less" : "View more"}
          </span>
        </div>
        <div className=" text-purple-400 text-xl  flex pt-5 justify-end gap-3">
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
