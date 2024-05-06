// eslint-disable-next-line simple-import-sort/imports
import { breakpoints } from '$utils/breakpoints';
import { gsap } from 'gsap';

export const frame = () => {
  const siteFrame = document.querySelector('.site_frame') as HTMLElement;

  siteFrame !== null &&
    (() => {
      const frameFill = siteFrame.querySelector('.frame_fill') as HTMLElement;
      const frameBorder = siteFrame.querySelector('.frame_stroke') as HTMLElement;

      const scaleData = frameFill.dataset.frameScale as string;
      const defaultScale = parseFloat(scaleData);
      const mobileScale = defaultScale * 2;
      let frameScale = defaultScale;

      setup();

      window.addEventListener('resize', (e) => {
        setup();
      });

      function setup() {
        const deviceInfo = breakpoints();
        console.log(`${deviceInfo[0]} [w: ${deviceInfo[1]}  h: ${deviceInfo[2]}]`);

        if (deviceInfo[0] === 'mobile-landscape' || deviceInfo[0] === 'mobile-portrait') {
          frameScale = mobileScale;
        } else {
          frameScale = defaultScale;
        }

        const frameTarget = window.innerWidth * frameScale;
        const frameMaxWidth = window.innerWidth - frameTarget;
        const frameMaxHeight = window.innerHeight - frameTarget;

        const ogFrame = `polygon(0% 0%, 0% 100%, 1% 100%, 1% 1%, 99% 1%, 99% 99%, 1% 99%, 0% 100%, 100% 100%, 100% 0%)`;
        const frameClip = `polygon(0% 0%, 0% 100%, ${frameTarget}px 100%, ${frameTarget}px ${frameTarget}px, ${frameMaxWidth}px ${frameTarget}px, ${frameMaxWidth}px ${frameMaxHeight}px, ${frameTarget}px ${frameMaxHeight}px, ${frameTarget}px 100%, 100% 100%, 100% 0%)`;

        // hSet(frameMaxHeight - frameTarget);
        gsap.set(frameFill, { duration: 0, clipPath: frameClip });
        gsap.set(frameBorder, {
          duration: 0,
          width: `${frameMaxWidth - frameTarget}px`,
          height: `${frameMaxHeight - frameTarget}px`,
        });

        // guides(frameTarget);
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
    })();
};
