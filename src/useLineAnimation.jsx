import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const useLineAnimation = () => {
  useEffect(() => {
    const line = document.querySelector(".line");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ball", // The section or element to track scrolling
        scrub: true,
        toggleActions: "restart none reverse pause",
        markers: true, // Show markers for debugging (can be removed later)
      }
    });

    timeline.to(line, {
      motionPath: {
        path: [
          { x: -490, y: 0 },
          { x: 900, y: 0 },
        ],
      },
      duration: 4,
      ease: "power2.inOut",
    });

  }, []);
};

export default useLineAnimation;
