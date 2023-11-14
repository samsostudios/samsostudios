import { gsap } from 'gsap';

export const siteFrame = () => {
  const siteFrame = document.querySelector('.site_frame') as HTMLElement;

  // init();
  // resize();

  // function init() {
  //   const tFrame = siteFrame.querySelector('.frame_verical.is-top') as HTMLElement;
  //   const bFrame = siteFrame.querySelector('.frame_verical.is-bottom') as HTMLElement;
  //   const tHeight = tFrame.clientHeight;

  //   console.log(tFrame.clientHeight, bFrame.clientHeight);

  //   const lrFrames = gsap.utils.toArray('.frame_horizontal');
  //   lrFrames.forEach((element) => {
  //     const temp = element as HTMLElement;
  //     //   gsap.set(temp, { height: window.innerHeight - 2 * tbHeight });
  //   });

  //   // console.log('height', tbHeight, window.innerHeight);
  // }

  // function resize() {
  //   window.addEventListener('resize', () => {
  //     init();
  //   });
  // }
};
