import { gsap } from 'gsap';

export const siteFrame = () => {
  const siteFrame = document.querySelector('.frame_fill') as HTMLElement;
  const frameBorder = document.querySelector('.frame_stroke') as HTMLElement;

  setup();

  window.addEventListener('resize', () => {
    setup();
  });

  function setup() {
    const scaleData = siteFrame.dataset.frameScale as string;
    const frameScale = parseFloat(scaleData);
    const frameTarget = window.innerWidth * frameScale;
    const frameMaxWidth = window.innerWidth - frameTarget;
    const frameMaxHeight = window.innerHeight - frameTarget;

    const ogFrame = `polygon(0% 0%, 0% 100%, 1% 100%, 1% 1%, 99% 1%, 99% 99%, 1% 99%, 0% 100%, 100% 100%, 100% 0%)`;
    const frameClip = `polygon(0% 0%, 0% 100%, ${frameTarget}px 100%, ${frameTarget}px ${frameTarget}px, ${frameMaxWidth}px ${frameTarget}px, ${frameMaxWidth}px ${frameMaxHeight}px, ${frameTarget}px ${frameMaxHeight}px, ${frameTarget}px 100%, 100% 100%, 100% 0%)`;

    gsap.to(siteFrame, { duration: 0, clipPath: frameClip });
    gsap.to(frameBorder, {
      duration: 0,
      width: `${frameMaxWidth - frameTarget}px`,
      height: `${frameMaxHeight - frameTarget}px`,
    });

    guides(frameTarget);
  }

  function guides(calc: number) {
    const frameGuides = [...document.querySelectorAll('.frame_guide')];

    for (const i in frameGuides) {
      if (frameGuides[i].classList.contains('horizontal')) {
        frameGuides[i].classList.contains('top')
          ? gsap.set(frameGuides[i], { top: calc })
          : gsap.set(frameGuides[i], { bottom: calc });
        gsap.set(frameGuides[i], { width: calc });
      } else if (frameGuides[i].classList.contains('vertical')) {
        frameGuides[i].classList.contains('right')
          ? gsap.set(frameGuides[i], { right: calc })
          : gsap.set(frameGuides[i], { left: calc });
        gsap.set(frameGuides[i], { height: calc });
      }
    }
  }
};
