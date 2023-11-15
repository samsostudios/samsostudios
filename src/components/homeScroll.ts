import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const homeScroll = () => {
  const viewSwitch = document.querySelector('.info-module_component') as HTMLElement;
  init();
  handleSwitch();

  function init() {
    const viewTypes = ['slide', 'grid'];
    const defaultView = viewTypes[0];

    if (defaultView === 'slide') {
      slideScroll();
    } else {
      gridScroll();
    }
  }

  function handleSwitch() {
    let viewToggled = false;
    viewSwitch.addEventListener('click', () => {
      viewToggled = !viewToggled;

      if (viewToggled) {
        console.log('show grid');
      } else {
        console.log('show slide');
      }
    });
  }
};

export const slideScroll = () => {
  init();
  slideScroller();

  window.addEventListener('resize', () => {
    init();
  });

  function init() {
    const nav = document.querySelector('.nav_component') as HTMLElement;
    const slideHeader = document.querySelector('.home-header_component') as HTMLElement;
    const slideWrapper = document.querySelector('.home-slide_component');
    const slideList = document.querySelector('.home-slide_list') as HTMLElement;
    const slideItems = [...document.querySelectorAll('.home-slide_item')];
    const slideGap = 16;
    const slideActiveRatio = 0.7;

    const slideHeight =
      nav.getBoundingClientRect().top - slideHeader.getBoundingClientRect().bottom - slideGap * 2;
    const slideActiveWidth = slideList.clientWidth * slideActiveRatio - slideGap / 2;
    const slideNextWidth = slideList.clientWidth * (1 - slideActiveRatio) - slideGap / 2;

    gsap.set(slideWrapper, { height: slideHeight });

    slideItems.forEach((e, i) => {
      const isFirst = i === 0;

      gsap.set(e, { position: 'absolute' });

      if (isFirst) {
        gsap.set(e, { width: slideActiveWidth });
      }
      if (!isFirst) {
        gsap.set(e, { width: slideNextWidth, right: 0 });
      }
    });
  }

  function slideScroller() {
    // let stObserver =
  }
};

export const gridScroll = () => {
  console.log('gridScroll');
};
