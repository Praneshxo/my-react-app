import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

const use3DObjectAnimation = () => {
  useEffect(() => {
    const object = document.querySelector(".spline-container"); // The 3D object element

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".spline-container", // The section or element to track scrolling
        scrub: true,
        toggleActions: "restart none reverse pause",
        markers: true, // Show markers for debugging (can be removed later)
      }
    });

    // Move the 3D object from x: -490 to x: 490 and move it down (along y-axis)
   
    timeline.to(object, {
        motionPath: {
          path: [
            { x: -300, y: 0 },
            { x: 150, y: 0 },
          ],
          
        },
        duration: 1.5,
        
      }); 
      timeline.to(object, {
        motionPath: {
          path: [
            { x: 150, y: 0 },
            { x: 150, y: 600 },
          ],
          
        },
        duration: 1.5,
        
      });   
  }, []);
};

export default use3DObjectAnimation;
