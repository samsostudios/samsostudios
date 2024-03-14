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
    const slideScale = slideGap * 6;

    const slideHeight =
      nav.getBoundingClientRect().top - slideHeader.getBoundingClientRect().bottom - slideGap * 2;
    const slideActiveWidth = slideList.clientWidth * slideActiveRatio - slideGap / 2;
    const slideNextWidth = slideList.clientWidth * (1 - slideActiveRatio) - slideGap / 2;

    console.log(nav.getBoundingClientRect().top - slideHeader.getBoundingClientRect().bottom);

    gsap.set(slideWrapper, { height: slideHeight });
    gsap.set(slideList, { height: slideHeight - slideScale });
    gsap.set(slideItems, { height: '100%' });

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

  init();

  function init() {
    const gridItems = [...document.querySelectorAll('.home-grid_item')];
    // const gridList = document.querySelector('.home-grid_list') as HTMLElement;
    const itemTotal = gridItems.length;
    const itemPerRow = 4;

    console.log('MOD', itemTotal / 2);

    const spacerArrangments = [
      [1, 0, 0, 1],
      [0, 0, 1, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 0],
    ];

    const spacerItem = document.createElement('div');
    spacerItem.classList.add('home-grid_item', 'is-spacer');

    // gridList.appendChild(spacerItem);
    // const rowTotal = itemTotal / itemPerRow;

    for (let i = 0; i < itemTotal / 2; i++) {
      console.log('ROW', i, spacerArrangments[i]);

      const rowLayout = spacerArrangments[i];

      // console.log('HERE', rowArrangment);

      for (let j = 0; j < rowLayout.length; j++) {
        // console.log('value', rowLayout[j]);
        const layoutValue = rowLayout[j];

        if (layoutValue === 0) {
          const gridList = document.querySelector('.home-grid_list') as HTMLElement;
          const spacerItem = document.createElement('div');
          spacerItem.classList.add('home-grid_item', 'is-spacer');

          const insertIndex = itemPerRow * i + j;

          // console.log('insert before', insertIndex, i, j);
          // console.log('LB', gridList);

          gridList.insertBefore(spacerItem, gridList.childNodes[insertIndex]);
          // console.log('LA', gridList);
        }
      }
    }

    // for (let i = 0; i < itemTotal; i++) {
    //   const tempSpacer = spacerItem;

    //   const setArragament = spacerArrangments[i];

    //   for (let j = 0; j < setArragament.length; j++) {
    //     if (setArragament[j] === 0) {
    //       const checkItems = [...document.querySelectorAll('.home-grid_item')];
    //       console.log('items', checkItems);
    //       const insertIndex = 4 * i + j;
    //       console.log('insert spacer before', insertIndex);

    //       gridList.insertBefore(tempSpacer, gridList.childNodes[insertIndex]);
    //     }
    //   }

    //   console.log('--------');
    // }
  }

  // function generateGrid() {}
};
