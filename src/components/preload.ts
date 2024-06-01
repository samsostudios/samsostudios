// eslint-disable-next-line simple-import-sort/imports
import { breakpoints } from '$utils/breakpoints';
import { gsap } from 'gsap';

export const preload = () => {
  const deviceInfo = breakpoints();

  const preload = document.querySelector('.preload_component');
  const bg = document.querySelector('.standby_image.is-bg');
  const bgMask = document.querySelector('.standby_bg-mask-image');
  const frame = document.querySelector('.site_frame');
  const top = document.querySelector('.standby_top');
  const main = document.querySelector('.standby_main');
  const bottom = document.querySelector('.standby_bottom');
  const mobile = document.querySelector('.standby_mobile');
  const mobileInstuct = document.querySelector('.standby_instuctions') as HTMLElement;

  const tl = gsap.timeline();
  tl.to(preload, { duration: 1, display: 'none', opacity: 0, ease: 'power4.out' });
  tl.to(bg, { duration: 1.2, scale: 1.2, ease: 'power4.out' }, '<');
  tl.to(bgMask, { duration: 1.2, scale: 1.2, ease: 'power4.out' }, '<');
  tl.to(frame, { duration: 1, display: 'block', opacity: 1, y: 0, ease: 'power4.inOut' }, '<0.2');
  tl.to(top, { duration: 1, display: 'block', opacity: 1, y: 0, ease: 'power4.inOut' }, '<0.2');
  tl.to(bottom, { duration: 1, display: 'block', opacity: 1, y: 0, ease: 'power4.inOut' }, '<');
  tl.to(main, { duration: 1, display: 'flex', opacity: 1, y: 0, ease: 'power4.inOut' }, '<');
  tl.to(mobile, { duration: 1, opacity: 1, y: 0, ease: 'power4.inOut' }, '<');
  if (deviceInfo[0] === 'mobile-portrait') {
    console.log('mob');
    const instuctVis = getComputedStyle(mobileInstuct).display;
    console.log(instuctVis);
    tl.to(mobileInstuct, { duration: 1, opacity: 1, y: 0, ease: 'power4.inOut' }, '<5');
  }
};
