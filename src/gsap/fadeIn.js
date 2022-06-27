import { gsap } from 'gsap';

const fadeIn = (elt, duration, delay) => {
  gsap.fromTo(
    elt,
    { opacity: 0, display: 'none' },
    { opacity: 1, display: 'flex', duration: 1, delay: `${delay}` }
  );
};

export default fadeIn;
