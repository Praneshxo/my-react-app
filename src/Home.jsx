// src/App.jsx (Renamed from Home.jsx based on common practice)
import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline'; // Keep if you're using it elsewhere or in a dedicated component
import gsap from 'gsap';

import { Canvas } from '@react-three/fiber';

// Import your custom hooks
import useMouseMoveEffect from './useMouseMoveEffect';
import useBallAnimation from './useBallAnimation';
import useTextAnimation from './useTextAnimation';
import useLineAnimation from './useLineAnimation';
// import use3DObjectAnimation from './ObjectAnimation';

// Import your components
import ProjectsSection from './Components/ProjectsSection';
import TechStack from './Components/TechStack';
import WorkExperience from './Components/WorkExperience';
import Slime from './slime'; // Import the Slime component
import Scene from './Scene'; // Your Three.js scene

import './Home.css'; // Keep your main styling, but also use component-specific CSS

const App = () => {
  const blurryBackgroundRef = useRef(null);
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  // const splineRef = useRef(null); // Keep if Spline is used in a specific section/component

  // Call the hooks here
  // use3DObjectAnimation();
  useMouseMoveEffect(blurryBackgroundRef);
  useBallAnimation();
  useTextAnimation([titleRef1, titleRef2]);
  useLineAnimation();

  // You can move the Spline animation logic into a dedicated SplineModel component if it becomes complex
  // useEffect(() => {
  //   if (splineRef.current) {
  //     // Rotate the model continuously
  //     const model = splineRef.current;
  //     gsap.to(splineRef.current.rotation, {
  //       y: "+=6.28", // 360 degrees (2π radians)
  //       duration: 10, // Time for one full rotation
  //       repeat: -1, // Repeat indefinitely
  //       ease: "linear", 
  //       autoRotate: true,// Constant speed
  //     });

  //     // Move the model from left to right continuously
  //     gsap.to(splineRef.current.position, {
  //       x: 5, // Move to the right (adjust as necessary)
  //       duration: 5, // Duration of movement to the right
  //       repeat: -1, // Repeat indefinitely
  //       yoyo: true, // Move back and forth
  //       ease: "power1.inOut",
  //       autoRotate: true, // Smooth easing
  //     });
  //   }
  // }, []);

  return (
    <div>
       {/* Header */}
      <header className="header">
        <div className="logo">Pranesh</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      

      <div className="grain"></div>

      {/* Blurry Background Effect */}
      <div className="blurry-background" ref={blurryBackgroundRef}></div>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <h1>Pranesh</h1>
          <div className="ball" id="ball-b"></div>
          <h2>Full Stack Web Developer</h2>
          <div className="line" id="line">
            <p className="title" ref={titleRef1}>
              Currently &nbsp; designing &nbsp; UI &nbsp; like &nbsp; Picasso
            </p>
          </div>

          <img src="src/assets/hand.png" alt="hand" className="hand" />

 <div id='slime'>
      <div className="slime-c"  style={{
      height: '50rem',
      width: 'auto',
      position: 'relative',
      background: 'transparent', // Make the canvas background transparent
      overflow: 'hidden', // Hide overflow to prevent scrollbars
      
    }} >
         <div
         style={{ background: 'transparent' }} // Make the canvas background transparent
         
         >
          <Slime />
        </div>
      </div>
    </div>
          {/* If Spline is only for one section, you can wrap it in its own component */}
          {/* <Spline scene="your-spline-scene-url" ref={splineRef} /> */}

          <h2 className="abm">About Me</h2>
          <p className="abp">
            I'm a passionate developer with over 5 years of experience crafting elegant solutions to complex problems. My journey began when I built my first website at 15, and since then, I've been constantly learning and evolving.
          </p>

          <img src="src/assets/eyes.png" className="eyes" />

          <h2 className="ctext" ref={titleRef2}>Create</h2>
          <p className="jojo">
            My journey in tech started when I built my first website at 15, and since then, I've been constantly learning and evolving. I've worked with startups and established companies, helping them transform their ideas into reality through clean, efficient code and intuitive design.
          </p>

          <div className="ladder">
            <div className="rung"></div>
            <div className="rung"></div>
            <div className="rung"></div>
            <div className="rung"></div>
            <div className="rung"></div>
            <div className="rung"></div>
            <div className="rung"></div>
          </div>

          <img src="src/assets/cloud.png" className="cloud1" />
          <img src="src/assets/cloud.png" className="cloud2" />
          <img src="src/assets/cloud.png" className="cloud3" />
          <img src="src/assets/cloud.png" className="cloud4" />
          <img src="src/assets/cloud.png" className="cloud5" />
        </div>
      </section>

      <div id='scroll-container'>
        <div className="eva" style={{ height: '20rem', width: 'auto', position: 'relative' }}>
          <Canvas style={{ background: 'transparent' }} gl={{ alpha: true }}>
            <Scene />
          </Canvas>
        </div>
      </div>

      <TechStack /> {/* Your new Tech Stack section */}
      <WorkExperience /> {/* Your new Work Experience section */}
      <ProjectsSection /> {/* Your refactored Projects section */}

      
    </div>
  );
};

export default App;