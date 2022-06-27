import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const subnavScroll = () => {
  gsap.fromTo(
    '.career-subnav',
    { position: 'absolute', left: '20%' },
    {
      position: 'fixed',
      left: '20%',
      top: '11.5%',
      scrollTrigger: {
        trigger: '.career-subnav',
        start: 'top +=10.5%',
        end: 'top +=50.5%',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.subnav-container',
    { position: 'absolute', width: '100%' },
    {
      position: 'fixed',
      top: '10%',
      scrollTrigger: {
        trigger: '.subnav-container',
        start: 'top +=10.5%',
        end: 'top +=50.5%',
        scrub: true,
      },
    }
  );
};

export default subnavScroll;
