import { gsap } from 'gsap';

export const siteFrame = () => {
  const siteFrame = document.querySelector('.frame_fill') as HTMLElement;

  const frameTarget = window.innerWidth * 0.01;
  const frameWidth = window.innerWidth - frameTarget;
  const frameHeight = window.innerHeight - frameTarget;

  console.log(window.innerWidth, frameWidth, frameHeight);

  const temp = `polygon(0% 0%, 0% 100%, ${frameTarget}px 100%, ${frameTarget}px ${frameTarget}px, ${frameWidth}px ${frameTarget}px, 75% 75%, 33% 75%, 33% 100%, 100% 100%, 100% 0%)`;

  gsap.to(siteFrame, { clipPath: temp });

  guides(frameTarget);

  function guides(calc: number) {
    const frameGuides = [...document.querySelectorAll('.frame_guide')];

    for (const i in frameGuides) {
      if (frameGuides[i].classList.contains('horizontal')) {
        gsap.to(frameGuides[i], { width: calc });
      } else if (frameGuides[i].classList.contains('vertical')) {
        frameGuides[i].classList.contains('right')
          ? gsap.to(frameGuides[i], { right: calc })
          : gsap.to(frameGuides[i], { left: calc });
        gsap.to(frameGuides[i], { height: calc });
      }
    }
  }
};
