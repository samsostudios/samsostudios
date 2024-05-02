// eslint-disable-next-line simple-import-sort/imports
import { timeModule } from '$utils/fomattedTime';
import { gsap } from 'gsap';

export const nav = () => {
  const nav = document.querySelector('.nav_component') as HTMLElement;

  nav !== null &&
    (() => {
      timeModule();
      hover();
    });

  function hover() {
    const linkWrap = nav.querySelector('.nav_main') as HTMLElement;
    const navLinks = [...nav.querySelectorAll('.nav_link')];
    const linkHoverElement = nav.querySelector('.nav_hover') as HTMLElement;

    const wrapBounds = linkWrap.getBoundingClientRect();

    gsap.set(linkHoverElement, { opacity: 0, width: navLinks[0].clientWidth });

    for (const i in navLinks) {
      const setLink = navLinks[i] as HTMLElement;
      console.log('set', setLink);
      setLink.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const bounds = target.getBoundingClientRect();
        gsap.to(linkHoverElement, { opacity: 0.5 });
        gsap.to(linkHoverElement, {
          width: target.clientWidth,
          x: bounds.left - wrapBounds.left - 16,
          ease: 'back.inOut(1.7)',
        });
      });
    }

    linkWrap.addEventListener('mouseleave', () => {
      const tl = gsap.timeline();
      tl.to(linkHoverElement, { opacity: 0 });
      tl.to(linkHoverElement, { width: navLinks[0].clientWidth, x: 0 });
    });
  }
};
