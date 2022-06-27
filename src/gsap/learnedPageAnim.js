import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const learnedPageAnim = () => {
  gsap.fromTo(
    '.text-2020',
    { xPercent: '-120' },
    { xPercent: 0, duration: 1, delay: 0.5 }
  );
  gsap.fromTo('.date-2020', { xPercent: '100' }, { xPercent: 0, duration: 1 });
  gsap.fromTo(
    '.text-2021',
    { xPercent: '120' },
    {
      scrollTrigger: {
        trigger: '.text-2021',
        toggleAction: 'restart none none none',
      },
      xPercent: 0,
      duration: 1,
    }
  );
  gsap.fromTo(
    '.date-2021',
    { xPercent: '-100' },
    {
      scrollTrigger: {
        trigger: '.date-2021',
        toggleAction: 'restart none none none',
      },
      xPercent: 0,
      duration: 1,
    }
  );
  gsap.fromTo(
    '.text-2022',
    { xPercent: '-120' },
    {
      scrollTrigger: {
        trigger: '.text-2022',
        toggleAction: 'restart none none none',
      },
      xPercent: 0,
      duration: 1,
    }
  );
  gsap.fromTo(
    '.date-2022',
    { xPercent: '100' },
    {
      scrollTrigger: {
        trigger: '.date-2022',
        toggleAction: 'restart none none none',
      },
      xPercent: 0,
      duration: 1,
    }
  );
};

export default learnedPageAnim;
