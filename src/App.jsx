import './App.css';
import './background.scss';
import Header from './components/header';
import malith from './assets/malith.jpg';
import { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node Developer",
  "Express Developer",
  "MongoDB Developer",
  "MERN Stack Developer"
];
function App() {
  
  
  const [role, setRole] = useState(roles[0]);
  const [currentRoleID, setCurrentRoleID] = useState(0);
  

  useEffect(() => {
    let currentRole = roles[currentRoleID];
    let currentIndex = 0;
    let typeHeadOn = true;

    const typingEffectInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setRole(currentRole.substring(0, currentIndex)+`${typeHeadOn ? '-' : '_'}`);
        typeHeadOn = !typeHeadOn;
        if(typeHeadOn)
          currentIndex++;
      } else {
        setRole(currentRole);
        clearInterval(typingEffectInterval);
        if(currentRoleID === roles.length-1) 
          setTimeout(() => setCurrentRoleID(0), 1000);
        else
          setTimeout(() => setCurrentRoleID(currentRoleID+1), 1000);
      }
    }, 100); // Change the typing speed here (milliseconds)

    return () => clearInterval(typingEffectInterval);
  }, [currentRoleID]);

  return (
    <div className='min-w-[100%] max-w-[100%]  min-h-[100vh] max-h-[100vh] relative overflow-hidden'>  
      <Header />    
      <div className='absolute z-10 w-full h-full' id="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className='absolute z-50 top-0 left-0 w-full min-h-[100vh] flex flex-wrap items-center justify-around '>
        <div className='relative h-[60vh] lg:h-[60vh] flex justify-center items-center'>
          <img src={malith} alt="malith" className='lg:h-full rounded-full border-4 border-white ' />
          <div className='absolute bottom-[-70px] left-0 w-full flex justify-center items-center flex-row '>
          <a href='https://linkedin.com'><FaLinkedin className='text-5xl text-white mx-2' /></a>
          <a href='https://facebook.com'><FaFacebook className='text-5xl text-white mx-2'/></a>
          <a href='https://twitter.com'><FaTwitter className='text-5xl text-white mx-2'/></a>
          <a href='https://github.com'><FaGithub className='text-5xl text-white mx-2'/></a>
            
          </div>
        </div>
        <div className='relative text-white w-[30%] h-[100vh] text-2xl lg:text-6xl font-serif flex justify-center items-center flex-col  mt-5 lg:mt-0'>
          <h1 className='top-0 text-6xl w-full mb-8'>I am a</h1>
          <p className=' h-[200px] w-full'>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
