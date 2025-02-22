import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import useMouseMoveEffect from './useMouseMoveEffect';
import useBallAnimation from './useBallAnimation';
import useTextAnimation from './useTextAnimation';
import useLineAnimation from './useLineAnimation';
import use3DObjectAnimation from './ObjectAnimation'; 
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import './Home.css';

const App = () => {
  const blurryBackgroundRef = useRef(null);
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const splineRef = useRef(null);

  // Call the hooks here
  use3DObjectAnimation();
  useMouseMoveEffect(blurryBackgroundRef);
  useBallAnimation();
  useTextAnimation([titleRef1, titleRef2]);
  useLineAnimation(); // Use the line animation hook

  useEffect(() => {
    if (splineRef.current) {
      // Rotate the model continuously
      const model = splineRef.current;
      gsap.to(splineRef.current.rotation, {
        y: "+=6.28", // 360 degrees (2π radians)
        duration: 10, // Time for one full rotation
        repeat: -1, // Repeat indefinitely
        ease: "linear", 
        autoRotate: true,// Constant speed
      });

      // Move the model from left to right continuously
      gsap.to(splineRef.current.position, {
        x: 5, // Move to the right (adjust as necessary)
        duration: 5, // Duration of movement to the right
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Move back and forth
        ease: "power1.inOut",
        autoRotate: true, // Smooth easing
      });
    }
  }, []);


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
          {/* Add the Spline 3D model */}
          <div className="spline-container">
            <Spline
              ref={splineRef}
              scene="public/untitled.spline"
            />
          </div>
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
      <div className="eva"  style={{
      zIndex: 22,
      height: '19rem',
      width: 'auto',
      position: 'relative',
    }} >
         <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
      {/* About Section */}
      <div id="about" className="about"></div>
    
      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="mypro">
          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card__content">
              <div className="project-card-1">
                <img src="src/assets/Home Page.png" className="Agape" />
                <h3>Dashboard UI</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card__content">
              <div className="project-card-2">
                <img src="src/assets/Landing Page.png" className="E-commerce" />
                <h3>E-commerce App</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card__content">
              <div className="project-card-3">
                <img src="src/assets/recipie.png" className="recipie" />
                <h3>Recipe App</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <form action="" className="form">
          <p>
            Let's Chat<span>Have a project in mind? Let’s create something amazing.</span>
          </p>
          <input type="email" placeholder="Email" className="email"></input>
          <input type="chat" placeholder="Chat with me" className="chat"></input>
          <button className="oauthButton">
            Continue
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </button>
          <div className="contact-icons">
            <a href="#" title="GitHub">🔗</a>
            <a href="#" title="LinkedIn">🔗</a>
            <a href="#" title="Twitter">🔗</a>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default App;
