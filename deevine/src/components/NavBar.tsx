import { useState, useRef } from "react";
 import { FaEarlybirds, FaBars, FaTimes, FaDashcube } from "react-icons/fa";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import lighModeAnime from "../assets/Animation - 1711390148326.json";
 interface ChildProps {
  toggleState: () => void;}


const NavBar: React.FC<ChildProps>  = (props) => {
 
 
   
  const [setMode, showSetMode] = useState(false);
  const toggleRef = useRef<LottieRefCurrentProps>(null);
  const [position, setPosition] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    const newPosition = position === 0 ? 45 : 0;
    toggleRef.current?.goToAndStop(newPosition, true);
    setPosition(newPosition);
    showSetMode(!setMode);
    props.toggleState();
     };
  const showMenu = () => {
    setMenu(!menu);
  };
  const myList = ["Home", "Projects", "Skills", "Contact"];
 

  return (
    <div className="h-11   "> 
     <div className= {`bg ${setMode ?  ' bodyBg fixed  z-50 w-full' : 'lgBg fixed  z-50 w-full' } `} > 
      <nav className="px-6 py-4       relative  bg-transparent  rounded-xl shadow-lg flex items-center  justify-between ">
        <div className= { ` bg  ${ setMode ? "purp logo flex items-center cursor-pointer " : 'blue logo flex items-center cursor-pointer'}` }>
          <FaEarlybirds className="inline-block mr-2" />
          <h2 className="text-xl font-semibold ">DEEVINE</h2>
        </div>
        <div className="md:flex  hidden content-center justify-center ">
          <ul className="flex space-x-4">
            {myList.map((item) => (  
              item ==='Home' ? <a key={item} href='/' >
              <li className=" hover:text-purple-900  cursor-pointer hover:animate-bounce flex">
              <FaDashcube /> {item}
             </li></a> :
            <a key={item} href={`#${item.toLowerCase()}`}> 
                <li className=" hover:text-purple-900  cursor-pointer hover:animate-bounce flex">
                 <FaDashcube /> {item}
                </li> </a> 
                //  </Link>
              ))}
          </ul>
         </div>
        <div className=" flex items-center">
          <Lottie
            className="cursor-pointer mr-0 ml-0 w-14 p-0"
            onClick={handleClick}
            loop={false}
            autoplay={false}
            lottieRef={toggleRef}
            animationData={lighModeAnime}
          />{" "}
          {menu ? (
            <FaTimes
              className="md:hidden cursor-pointer w-14 "
              onClick={showMenu}
            />
          ) : (
            <FaBars
              className="md:hidden cursor-pointer w-14 "
              onClick={showMenu}
            />
          )}
        </div>
        {/* right-0 left-0 top-20  transition-all bg-gray-800 p-10 z-50 absolute  md:hidden  */}
         
          
        
      </nav>
      <div className={`Menu ${setMode ? 'darkbg' : 'lightbg'}    ${menu ? 'openMenu' : ''    }`}>
            <ul className="flex-column items-center justify-center   text-xl      ">
              {myList.map((item) => (
                 item ==='Home' ? <a key={item}href='/' >
                 <li  className= {setMode ?" hover:text-purple-900 pb-5 text-white cursor-pointer transition duration-700 hover:animate-bounce flex" : 'hover:text-purple-900 pb-5 text-black cursor-pointer transition duration-700 hover:animate-bounce flex'}>
                 <FaDashcube /> {item}
                </li></a> :
                            <a href={`#${item.toLowerCase()}`}> 
                <li className={setMode ?" hover:text-purple-900 pb-5 text-white cursor-pointer transition duration-700 hover:animate-bounce flex" : 'hover:text-purple-900 pb-5 text-black cursor-pointer transition duration-700 hover:animate-bounce flex'}>
                 <FaDashcube /> {item}
                </li></a>
              ))}
            </ul>
          </div>
    </div>
     
    </div>
  );
};

export default NavBar;
