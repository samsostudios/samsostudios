import { gsap } from 'gsap';

export const imageTracking = () => {
  const mask = document.querySelector('.standby_bg-mask') as HTMLElement;
  const maskedImage = document.querySelector('.standby_bg-mask-image');
  const bgImage = document.querySelector('.standby_image.is-bg');
  const maskWidth = parseInt(getComputedStyle(mask).width);
  const maskHeight = parseInt(getComputedStyle(mask).height);

  let offsetWidth = maskWidth / 2;
  let offsetHeight = maskHeight / 2;

  const cursorSpeed = 0.4;
  gsap.set(mask, { xPercent: -50, yPercent: -50 });
  gsap.set(maskedImage, { x: offsetWidth, y: offsetHeight });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const normalizeMouse = { x: 0, y: 0 };
  const speed = 0.2;

  const xSet = gsap.quickSetter(mask, 'x', 'px');
  const xSetM = gsap.quickSetter(maskedImage, 'x', 'px');
  const ySet = gsap.quickSetter(mask, 'y', 'px');
  const ySetM = gsap.quickSetter(maskedImage, 'y', 'px');

  const setScaleX = gsap.quickSetter(bgImage, 'scaleX', 'transform');
  const setScaleY = gsap.quickSetter(bgImage, 'scaleY', 'transform');

  mask.style.setProperty('--before-x', '0.5px');
  mask.style.setProperty('--before-y', '0.5px');

  mask.style.setProperty('--before-width', 'calc(100% - 2px)');
  mask.style.setProperty('--before-height', 'calc(100% - 2px)');

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    normalizeMouse.x = e.x / window.innerWidth;
    normalizeMouse.y = e.y / window.innerHeight;

    // console.log(normalizeMouse.y);
    scaleMouse(normalizeMouse.y);
  });

  document.addEventListener('mousemove', handleFirstMove);

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * cursorSpeed * dt;
    pos.y += (mouse.y - pos.y) * cursorSpeed * dt - 0.5;

    // console.log(offsetWidth);

    xSet(pos.x);
    xSetM(-pos.x + offsetWidth);
    ySet(pos.y);
    ySetM(-pos.y + offsetHeight);

    // setScaleX(1 + pos.y);
    // setScaleY(1 + pos.y);
  });

  let isLarge = false;
  window.addEventListener('dblclick', (e) => {
    isLarge = !isLarge;
    if (isLarge) {
      // console.log('make large');
      const tl = gsap.timeline();
      tl.to(mask, {
        duration: 0.5,
        '--before-bg': 'radial-gradient(circle, rgba(13, 15, 20, 1) 5%, rgba(13, 15, 20, 1) 90%)',
        ease: 'power4.inOut',
      });
      tl.to(mask, { width: maskWidth * 2, height: maskHeight * 2, ease: 'power4.inOut' });
      tl.to(mask, {
        duration: 0.5,
        '--before-bg': 'radial-gradient(circle, rgba(13, 15, 20, 0) 5%, rgba(13, 15, 20, 0.5) 90%)',
        ease: 'power4.inOut',
      });
      setTimeout(() => {
        offsetWidth = (maskWidth * 2) / 2;
        offsetHeight = (maskHeight * 2) / 2;
      }, 500);
    } else {
      // console.log('make small');
      const tl = gsap.timeline();
      tl.to(mask, {
        duration: 0.5,
        '--before-bg': 'radial-gradient(circle, rgba(13, 15, 20, 1) 5%, rgba(13, 15, 20, 1) 90%)',
        ease: 'power4.inOut',
      });
      tl.to(mask, { width: maskWidth, height: maskHeight, ease: 'power4.inOut' });
      tl.to(mask, {
        duration: 0.5,
        '--before-bg': 'radial-gradient(circle, rgba(13, 15, 20, 0) 5%, rgba(13, 15, 20, 0.5) 90%)',
        ease: 'power4.inOut',
      });
      setTimeout(() => {
        offsetWidth = maskWidth / 2;
        offsetHeight = maskHeight / 2;
      }, 1000);
    }
  });

  function handleFirstMove() {
    const mobileInstuct = document.querySelector('.standby_instuctions') as HTMLElement;

    gsap.to(mask, { duration: 1, opacity: 1, ease: 'power4.inOut' });
    gsap.to(mobileInstuct, { duration: 1, opacity: 0, display: 'none', ease: 'power4.inOut' });

    document.removeEventListener('mousemove', handleFirstMove);
  }

  function scaleMouse(scaleFactor: number) {
    gsap.to(bgImage, { scale: 1 + 0.2 * scaleFactor, ease: 'linear' });
    gsap.to(maskedImage, { scale: 1 + 0.2 * scaleFactor, ease: 'linear' });
  }
};
