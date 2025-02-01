import { useEffect } from 'react';
import { gsap } from 'gsap';

const useMouseMoveEffect = (blurryBackgroundRef) => {
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
  }, [blurryBackgroundRef]);
};

export default useMouseMoveEffect;
