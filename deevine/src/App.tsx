import { useState ,useRef} from 'react'
import Lottie  from 'lottie-react'
import lighModeAnime from './assets/Animation - 1711390148326.json'
import GirlImageAnime from './assets/Animation - 1711391569191.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const imageRef = useRef(null);
  const toggleRef = useRef(null);
  const [position, setPosition] = useState(0);  

  const handleClick = () => {
    const newPosition = position === 0 ? 45 : 0; 
    toggleRef.current?.goToAndStop(newPosition, true);
    setPosition(newPosition);  
    
   };
  return (
    <>
      <div>
       
        <Lottie onClick={handleClick} loop={false} autoplay={false} lottieRef={toggleRef}  
          animationData={lighModeAnime} />         
        <Lottie onComplete={() => {
          imageRef.current?.goToAndPlay(45, true)
        }} loop={false} lottieRef={imageRef} animationData={GirlImageAnime}  
         />
         
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
