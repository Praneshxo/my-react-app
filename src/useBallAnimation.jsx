import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const useBallAnimation = () => {
  useEffect(() => {
    const ball = document.querySelector(".ball");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ball",
        start: "top 9%",
        end: "+=2390",
        scrub: true,
        toggleActions: "restart none reverse pause",
        markers: true,
      }
    });

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

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 0, y: 300 },
          { x: 200, y: 150 },
          { x: 290, y: 200 },
          { x: 490, y: 370 },
          { x: 1000, y: 799 },
        ],
        autoRotate: true,
      },
      duration: 10,
    });

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 770, y: 640 },
          { x: -160, y: 760 },
        ],
        autoRotate: true,
      },
      duration: 10,
    });

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: -160, y: 760 },
          { x: -160, y: 1160 },
        ],
        autoRotate: true,
      },
      duration: 10,
    });

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: -160, y: 1160 },
          { x: -160, y: 1470 },
        ],
        autoRotate: true,
      },
      duration: 10,
    });

    timeline.to(ball, {
      motionPath: {
        path: [
          { x: -7, y: 1534 },
          { x: 700, y: 1704 },
        ],
        autoRotate: true,
      },
      duration: 10,
    });
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 790, y: 1764 },
          { x: 880, y: 1900 },
        ],
        autoRotate: true,
      },
      duration: 10,
      
    });
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 880, y: 1900 },
          { x: 880, y: 1961 }, // Slight vertical drop for the first rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for a smoother effect
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 880, y: 1961 },  // Upward movement to the second rung
          { x: 880, y: 2021 },  // Slight bounce on the second rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the second rung
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2021 },
          { x: 884, y: 2090 }, // Bounce up to the third rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the third rung
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2090 },
          { x: 884, y: 2160 }, // Bounce up to the fourth rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the fourth rung
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2160 },
          { x: 884, y: 2232 }, // Bounce to the fifth rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the fifth rung
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2232 },
          { x: 888, y: 2301 }, // Bounce to the sixth rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the sixth rung
    });
    
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2302 },
          { x: 888, y: 2371 }, // Bounce to the seventh rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the seventh rung
    }); 
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2372 },
          { x: 888, y: 2471 }, // Bounce to the seventh rung
        ],
        autoRotate: true,
      },
      duration: 1.5,
      ease: "bounce.out", // Bounce easing for the seventh rung
    });
    timeline.to(ball, {
      motionPath: {
        path: [
          { x: 884, y: 2471 },
          { x: 888, y: 3100 }, // Bounce to the eva
        ],
        autoRotate: true,
      },
      duration: 20,
      ease: "power2.inOut",
    });   
  }, []);
};

export default useBallAnimation;
