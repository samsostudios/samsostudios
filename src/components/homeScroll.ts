import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, Observer);

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
  const nav = document.querySelector('.nav_component') as HTMLElement;
  const slideHeader = document.querySelector('.home-header_component') as HTMLElement;
  const slideWrapper = document.querySelector('.home-slide_component');
  const slideList = document.querySelector('.home-slide_list') as HTMLElement;
  const slideItems = [...document.querySelectorAll('.home-slide_item')];
  const slideScale = parseFloat(slideList.dataset.listScale as string);

  console.log('ITEMS', slideItems);

  let currentIndex = 0;
  const maxIndex = slideItems.length - 1;
  let allowScroll = true;
  const scrollTimeout = gsap
    .delayedCall(1, () => {
      console.log('timeout done');
      allowScroll = true;
    })
    .pause();

  const sliderProps = {
    activeWidth: 0,
    inactiveWidth: 0,
    height: 0,
    scale: slideScale,
    duration: 1,
    ease: 'power4.inOut',
  };

  updateSliderProps();
  init();
  slideController();

  window.addEventListener('resize', () => {
    updateSliderProps();
    // init();
  });

  function init() {
    gsap.set(slideWrapper, { height: sliderProps['height'] });
    gsap.set(slideList, { height: sliderProps['height'] * slideScale });
    gsap.set(slideItems, { height: '100%' });
    slideItems.forEach((e, i) => {
      const isFirst = i === 0;
      const isSecond = i === 1;
      // console.log('here', i, isFirst, isSecond);
      gsap.set(e, { position: 'absolute' });
      if (isFirst) {
        gsap.set(e, { width: sliderProps['activeWidth'], zIndex: 1 });
      } else if (isSecond) {
        gsap.set(e, { width: sliderProps['inactiveWidth'], right: 0, zIndex: 0 });
      } else {
        gsap.set(e, { width: 0, right: 0, opacity: 0, zIndex: -1 });
      }
    });
  }

  function updateSliderProps() {
    const slideGap = 16;
    const slideActiveRatio = 0.7;

    const slideHeight =
      nav.getBoundingClientRect().top - slideHeader.getBoundingClientRect().bottom - slideGap * 2;
    const slideActiveWidth = slideList.clientWidth * slideActiveRatio - slideGap / 2;
    const slideNextWidth = slideList.clientWidth * (1 - slideActiveRatio) - slideGap / 2;

    sliderProps['activeWidth'] = slideActiveWidth;
    sliderProps['inactiveWidth'] = slideNextWidth;
    sliderProps['height'] = slideHeight;
  }

  function slideController() {
    Observer.create({
      target: window,
      type: 'wheel,touch',
      // onUp: () => allowScroll && regressScroll(),
      // onDown: () => allowScroll && advanceScroll(),
      onWheel: (e) => {
        // console.log('wheel', e.deltaY);
        if (allowScroll && e.deltaY > 20) {
          advanceScroll();
        } else if (allowScroll && e.deltaY < -20) {
          regressScroll();
        }
      },
    });
  }

  function advanceScroll() {
    console.log('advance', currentIndex);
    allowScroll = false; // disable scroll observer

    const trackIndex = { cur: currentIndex, next: currentIndex + 1, preload: currentIndex + 2 };
    if (trackIndex['preload'] > maxIndex) {
      trackIndex['preload'] = 0;
    } else if (trackIndex['next'] > maxIndex) {
      console.log('YOOOOOOOOOOOOOOOOOOOOO');
      trackIndex['next'] = 0;
    }
    console.log('TRACKED', trackIndex, maxIndex);

    const current = slideItems[trackIndex['cur']];
    const next = slideItems[trackIndex['next']];
    const preload = slideItems[trackIndex['preload']];

    console.log(current, next, preload);

    const tl = gsap.timeline({
      onComplete: () => {
        scrollTimeout.restart(true); // reset scroll observer
      },
    });

    // tl.to(current, { width: '0%' });
    // tl.to(next, { width: '100%' }, '<');
    // tl.set(current, { opacity: 0, zIndex: -1, right: 0 });
    // tl.set(next, { right: 'auto', zIndex: 1 });
    // tl.set(preload, { opacity: 1, zIndex: 0 });
    // tl.to(next, { width: sliderProps['activeWidth'] }, '<');
    // tl.to(preload, { width: sliderProps['inactiveWidth'] }, '<');

    if (currentIndex === maxIndex) {
      console.log('at end');
      currentIndex = 0;
    } else {
      // tl.to(slideItems[currentIndex], { width: '0%' });
      // tl.to(
      //   slideItems[currentIndex + 1],
      //   {
      //     width: '100%',
      //   },
      //   '<'
      // );
      // tl.set(slideItems[currentIndex], { opacity: 0, zIndex: -1, right: 0 });
      // tl.set(slideItems[currentIndex + 1], { right: 'auto', zIndex: 1 });
      // tl.set(slideItems[currentIndex + 2], { opacity: 1, zIndex: 0 });
      // tl.to(slideItems[currentIndex + 1], { width: sliderProps['activeWidth'] }, '<');
      // tl.to(slideItems[currentIndex + 2], { width: sliderProps['inactiveWidth'] }, '<');
      currentIndex += 1;
    }
  }

  function regressScroll() {
    // console.log('regress', currentIndex);
    // allowScroll = false; // disable scroll observer
    // // console.log(slideItems[currentIndex]);
    // const tl = gsap.timeline({
    //   onComplete: () => {
    //     scrollTimeout.restart(true); // reset scroll observer
    //   },
    // });
    // if (currentIndex === 0) {
    //   console.log('at begining');
    //   currentIndex = maxIndex;
    // } else {
    //   currentIndex -= 1;
    // }
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
