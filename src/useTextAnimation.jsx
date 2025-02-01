import { useEffect } from 'react';
import { gsap } from 'gsap';

const useTextAnimation = (titleRefs) => {
  useEffect(() => {
    titleRefs.forEach((titleRef) => {
      if (titleRef.current) {
        const element = titleRef.current;
        const text = element.textContent;
        element.textContent = '';

        const chars = text.split('').map((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.position = 'relative';
          element.appendChild(span);
          return span;
        });

        gsap.from(chars, {
          duration: 1,
          y: 80,
          autoAlpha: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 110%",
            end: "bottom 37%",
            scrub: true,
            markers: true,
          }
        });
      }
    });
  }, [titleRefs]);
};

export default useTextAnimation;
