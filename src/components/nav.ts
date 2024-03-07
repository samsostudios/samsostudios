import { gsap } from 'gsap';

export const nav = () => {
  const nav = document.querySelector('.nav_component') as HTMLElement;
  const linkHoverElement = nav.querySelector('.nav_hover') as HTMLElement;

  hover();

  function hover() {
    const navLinks = [...nav.querySelectorAll('.nav_link')];

    for (const i in navLinks) {
      const setLink = navLinks[i] as HTMLElement;

      setLink.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const bounds = target.getBoundingClientRect();
        console.log(bounds.left);
      });
    }
    // const linkWrap = nav.querySelector('.nav_main') as HTMLElement;
    // const linkHoverElement = nav.querySelector('.nav_hover') as HTMLElement;
    // const bounds = linkWrap.getBoundingClientRect();
    // const boundOffset = linkHoverElement.clientWidth / 2;
    // console.log('movement range', bounds.right - bounds.left);
    // // console.log(linkHoverElement.clientWidth);
    // // gsap.set(linkHoverElement, { xPercent: -50 });
    // // gsap.to(linkHoverElement, { x: linkHoverElement.clientWidth / 2 });
    // linkWrap.addEventListener('mousemove', (e: MouseEvent) => {
    //   //   console.log(e.x);
    //   console.log('cur x', e.x - bounds.left);
    //   gsap.to(linkHoverElement, { x: e.x - bounds.left - boundOffset });
    // });
  }
};
