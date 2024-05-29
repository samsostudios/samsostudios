import { gsap } from 'gsap';

export const imageTracking = () => {
  const mask = document.querySelector('.standby_bg-mask') as HTMLElement;
  const maskedImage = document.querySelector('.standby_bg-mask-image');
  const maskWidth = parseInt(getComputedStyle(mask).width);
  const maskHeight = parseInt(getComputedStyle(mask).height);

  const beforeContent = mask;

  const cursorSpeed = 0.4;
  gsap.set(mask, { xPercent: -50, yPercent: -50 });
  gsap.set(maskedImage, { x: maskWidth / 2, y: maskHeight / 2 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const normalizeMouse = { x: 0, y: 0 };
  const speed = 0.2;

  const xSet = gsap.quickSetter(mask, 'x', 'px');
  const xSetM = gsap.quickSetter(maskedImage, 'x', 'px');
  const ySet = gsap.quickSetter(mask, 'y', 'px');
  const ySetM = gsap.quickSetter(maskedImage, 'y', 'px');
  const ySetB = gsap.quickSetter('--before-y', 'top', 'px');

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    normalizeMouse.x = e.x / window.innerWidth;
    normalizeMouse.y = e.y / window.innerHeight;
  });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * cursorSpeed * dt;
    pos.y += (mouse.y - pos.y) * cursorSpeed * dt - 0.5;

    normalizeMouse.x += normalizeMouse.x * cursorSpeed * dt;

    xSet(pos.x);
    xSetM(-pos.x + maskWidth / 2);
    ySet(pos.y);
    ySetM(-pos.y + maskHeight / 2);
    ySetB(normalizeMouse.x);
  });
};
