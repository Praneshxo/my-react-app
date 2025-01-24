import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const App = () => {
  const blurryBackgroundRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(blurryBackgroundRef.current, {
        duration: 2,
        x: e.clientX - 240,
        y: e.clientY - 240,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  useEffect(() => {
    const ball = document.querySelector(".ball");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ball", // The section or element to track scrolling
        start: "top 9%", // Start when the top of the element is 10% from the viewport
        end: "+=600", // End when the bottom of the element reaches 40% of the viewport
        scrub: true, // Enable smooth scrubbing based on scroll
        toggleActions: "restart none reverse pause", // Control the animation during scroll
        markers: true, // Show markers for debug (can be removed later)
      }
    });
  
    // startght bounce 
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 0, y: 312 },
        ],
        autoRotate: true, 
      },
      duration: 4,
      ease: "power2.inOut",
    });
    // to tha hand
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 0, y: 300 },
          { x: 200, y: 150 },
          { x: 290, y: 200 },
          { x: 490, y: 370 },
          { x: 1000, y: 799 },
          
          // { x: 860, y: 810 },
        ],
        autoRotate: true, // Keep the ball rotating along the path
        ease: "power2.inOut", // Smooth transition after the bounce
      },
      duration: 10,
    });
    // to the left agaiin
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 770, y: 640 },
          { x: -160, y: 760 }, // Move diagonally (45-degree)
          
        ],
        autoRotate: true, // Keep the ball rotating along the path
        ease: "power2.inOut", // Smooth transition after the bounce
      },
      duration: 10,
    });

    // to the eye

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: -160, y: 760 }, 
          { x: -160, y: 1060 }, 
          
        ],
        autoRotate: true, // Keep the ball rotating along the path
        ease: "power2.inOut", // Smooth transition after the bounce
      },
      duration: 10,
    });

  }, []);
  useEffect(() => {
    const line = document.querySelector(".line");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ball", // The section or element to track scrolling
        
        scrub: true, // Enable smooth scrubbing based on scroll
        toggleActions: "restart none reverse pause", // Control the animation during scroll
        markers: true, // Show markers for debug (can be removed later)
      }
    });
    timeline.to(line, {
      motionPath: {
        path: [
          { x: -30, y: 0 },
          { x: 900, y: 0 },
          
        ],
      },
      duration: 4,
      ease: "power2.inOut",
    });
  }, []);
  const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            const element = titleRef.current;
            const text = element.textContent;
            element.textContent = '';

            // Split text into characters
            const chars = text.split('').map((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.display = 'inline-block';
                span.style.position = 'relative';
                element.appendChild(span);
                return span;
            });

            // Animate characters
            gsap.from(chars, {
              duration: 1,
              y: 80,
              autoAlpha: 0,
              stagger: 0.05,
              scrollTrigger: {
                  trigger: element,
                  start: "top 110%", // Adjust as needed
                  end: "bottom 37%", // Adjust as needed
                  scrub: true, // Smooth scrubbing
                  markers: true // Optional for debugging
              }
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
          <div className="ball" id="ball-b" ></div>
          <h2>Full Stack Web Developer</h2>
          <div className="line">
          <p className='title' ref={titleRef}>Currently&nbsp;designing&nbsp;UI&nbsp;like&nbsp;Picasso</p>
          </div>
          <img src="src/assets/hand.png" alt="hand" className="hand"/>
          <div>
          <h2 className="abm">About Me</h2>
        <p className="abp">
          I'm a passionate developer with over 5 years of experience crafting
          elegant solutions to complex problems. My journey began when I built
          my first website at 15, and since then, I've been constantly learning
          and evolving.
        </p>
        <img src="src/assets/cloud.png" className="cloud1" />
        <img src="src/assets/cloud1.png" className="cloud2" />
        <img src="src/assets/cloud1.png" className="cloud3" />
        </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about" className="about">
  
        
      </div>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/assets/react-icon.png" alt="React" />
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <img src="/assets/nodejs-icon.png" alt="Node.js" />
            <h3>Node.js</h3>
          </div>
          <div className="skill-item">
            <img src="/assets/python-icon.png" alt="Python" />
            <h3>Python</h3>
          </div>
          <div className="skill-item">
            <img src="/assets/aws-icon.png" alt="AWS" />
            <h3>AWS</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/assets/placeholder1.jpg" alt="Dashboard UI" />
            <h3>Dashboard UI</h3>
          </div>
          <div className="project-card">
            <img src="/assets/placeholder2.jpg" alt="E-commerce App" />
            <h3>E-commerce App</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? Let’s create something amazing.</p>
        <div className="contact-icons">
          <a href="#" title="GitHub">🔗</a>
          <a href="#" title="LinkedIn">🔗</a>
          <a href="#" title="Twitter">🔗</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with ❤️ by <a href="#">Pranesh</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
