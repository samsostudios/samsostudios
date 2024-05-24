import { gsap } from 'gsap';

export const imageTracking = () => {
  const maskedImage = document.querySelector('.section_mask-image');
  const mask = document.querySelector('.section_hero-mask') as HTMLElement;
  const maskWidth = parseInt(getComputedStyle(mask).width);
  const maskHeight = parseInt(getComputedStyle(mask).height);

  const cursorSpeed = 0.4;
  gsap.set(mask, { xPercent: -50, yPercent: -50 });
  gsap.set(maskedImage, { x: maskWidth / 2, y: maskHeight / 2 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(mask, 'x', 'px');
  const xSetB = gsap.quickSetter(maskedImage, 'x', 'px');
  const ySet = gsap.quickSetter(mask, 'y', 'px');
  const ySetB = gsap.quickSetter(maskedImage, 'y', 'px');

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * cursorSpeed * dt;
    pos.y += (mouse.y - pos.y) * cursorSpeed * dt - 0.5;
    xSet(pos.x);
    xSetB(-pos.x + maskWidth / 2);
    ySet(pos.y);
    ySetB(-pos.y + maskHeight / 2);
  });
};
