import { gsap } from 'gsap';

export const tickerTape = () => {
  setTimeout(() => {
    const tickerComponent = document.querySelector('.ticker_component') as HTMLElement;
    const tickerMask = tickerComponent.querySelector('.ticker_mask') as HTMLElement;
    const tickerWrap = tickerComponent.querySelector('.ticker_wrapper') as HTMLElement;

    const wrapWidth = tickerWrap.clientWidth;
    const maskPad = parseFloat(getComputedStyle(tickerMask).paddingLeft);
    const offsetWidth = wrapWidth / 4;

    const calcMovement = wrapWidth - 2 * offsetWidth + maskPad - 6;
    const dur = 15;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(tickerWrap, { duration: dur, x: -calcMovement, ease: 'linear' });
  }, 1000);
};
