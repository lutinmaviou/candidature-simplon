import { gsap } from 'gsap';

const fadeIn = () => {
  gsap.fromTo('.cards-container', { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
};

export default fadeIn;
