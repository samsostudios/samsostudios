import { gsap } from 'gsap';

export const cursor = () => {
  const cursor = document.querySelector('.cursor_component') as HTMLElement;

  console.log(cursor);

  cursor &&
    (() => {
      console.log('Cursor');
    })();

  // const cursorSpeed = parseFloat(cursor.dataset['cursorSpeed'] as string);
  // console.log('HERE', cursorSpeed);
  // gsap.set(cursor, { xPercent: -50, yPercent: 0 });

  // const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  // const mouse = { x: pos.x, y: pos.y };
  // const speed = 0.2;

  // const xSet = gsap.quickSetter(cursor, 'x', 'px');
  // const ySet = gsap.quickSetter(cursor, 'y', 'px');

  // window.addEventListener('mousemove', (e) => {
  //   // console.log('e');
  //   mouse.x = e.x;
  //   mouse.y = e.y;
  // });

  // gsap.ticker.add(() => {
  //   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  //   pos.x += (mouse.x - pos.x) * cursorSpeed * dt;
  //   pos.y += (mouse.y - pos.y) * cursorSpeed * dt - 0.5;
  //   xSet(pos.x);
  //   ySet(pos.y);
  // });
};
