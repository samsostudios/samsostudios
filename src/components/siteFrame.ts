import { gsap } from 'gsap';

export const siteFrame = () => {
  const siteFrame = document.querySelector('.frame_fill') as HTMLElement;

  const temp = `polygon(0vw 0vh, 0vw 100vh, 1vw 100vh, 1vh 1vh, 99vh 1vh, 99vw 99vh, 1vw 99vh, 1vw 100vh, 100vw 100vh, 100vw 0vh)`;

  gsap.to(siteFrame, { clipPath: temp });
};
