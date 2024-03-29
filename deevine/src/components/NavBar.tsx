import   { useState, useRef } from 'react';
import { FaEarlybirds} from 'react-icons/fa';
import Lottie, {LottieRefCurrentProps}   from 'lottie-react'
import lighModeAnime from '../assets/Animation - 1711390148326.json'

const NavBar = () => {
  const [setMode , showSetMode] = useState(false);
  const toggleRef = useRef<LottieRefCurrentProps>(null);
  const [position, setPosition] = useState(0);  

  const handleClick = () => {
    const newPosition = position === 0 ? 45 : 0; 
    toggleRef.current?.goToAndStop(newPosition, true);
    setPosition(newPosition); 
    showSetMode(!setMode) 
    
   };

  return (
    <div className={setMode ? 'darkMode' : 'lightMode'}>
    
    <nav className='px-6 py-4 max-w-screen-xl mx-auto max-h-20 bg-transparent content-center  rounded-xl shadow-lg flex items-center justify-between '>
        <div className="logo flex items-center cursor-pointer">
        <FaEarlybirds className='inline-block mr-2' />
        <h2 className='text-xl font-semibold '>DEEVINE</h2>
        </div>
        <div className="flex content-center justify-center ">
          <ul className='flex space-x-4'>
            <li className=" hover:text-purple-900  cursor-pointer hover:animate-bounce">About</li>
            <li className=" hover:text-purple-900 cursor-pointer hover:animate-bounce" >Project</li>
            <li className=" hover:text-purple-900 cursor-pointer hover:animate-bounce">Certifications</li>
            <li className=" hover:text-purple-900 cursor-pointer hover:animate-bounce">Contact</li>
     
          </ul>
          
        </div>
          
        <Lottie className=' max-w-12.7 cursor-pointer' onClick={handleClick} style={{ width: '100px', height: '100px' }}   loop={false} autoplay={false} lottieRef={toggleRef}  
          animationData={lighModeAnime} /> 
 
    </nav>
     </div>
  )
}

export default NavBar