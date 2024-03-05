import { gsap } from 'gsap';

export const colorMode = () => {
  type Mode = {
    [index: string]: string;
  };
  const colorSetup: Mode = {
    primary: '',
    secondary: '',
    'invert-p': '',
    'invert-s': '',
    glass: '',
  };
  const curMode = getCurrentColorMode();
  const modeToggles = [...document.querySelectorAll('.mode-toggle_indicator')];
  updateColorSetup(curMode);

  //setup toggles
  for (let i = 0; i < modeToggles.length - 1; i++) {
    const temp = modeToggles[i] as HTMLElement;
    temp.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetMode = target.dataset.xmode as string;

      updateColorSetup(targetMode);
    });
  }

  function getCurrentColorMode() {
    let defaultMode = 'd';
    const modeHistory = localStorage.getItem('cmode');

    if (modeHistory === null) {
      console.log('setting default mode');
      localStorage.setItem('cmode', defaultMode);
    } else if (modeHistory !== defaultMode) {
      console.log('switch initial mode');
      defaultMode = modeHistory;
    }

    return defaultMode;
  }

  function updateColorSetup(mode: string) {
    const style = getComputedStyle(document.body);
    for (const item in colorSetup) {
      const getVar = style.getPropertyValue(`--xmode-${mode}--${item}`);
      colorSetup[item] = getVar;
    }
    localStorage.setItem('cmode', mode);
    setColor();
  }

  function setColor() {
    console.log('SET', colorSetup, localStorage.getItem('cmode'));
    const body = document.querySelector('body');
    const secondaryElements = [...document.querySelectorAll('.mode_secondary')];
    const glassElements = [...document.querySelectorAll('.mode_glass-effect')];
    const borderElements = [...document.querySelectorAll('.mode_border')];
    const buttonElements = [...document.querySelectorAll('a')];
    const glyphElements = [...document.querySelectorAll('.ss-glyph_path')];

    console.log(buttonElements);

    gsap.to(body, {
      backgroundColor: colorSetup['primary'],
      color: colorSetup['invert-p'],
      ease: 'power4.out',
    });

    if (secondaryElements.length > 0) {
      gsap.to(secondaryElements, { backgroundColor: colorSetup['secondary'], ease: 'power4.out' });
    }

    if (glassElements.length > 0) {
      gsap.to(glassElements, {
        backgroundColor: colorSetup['glass'],
        ease: 'power4.out',
      });
    }

    if (borderElements.length > 0) {
      gsap.to(borderElements, {
        borderColor: colorSetup['invert-p'],
        ease: 'power4.out',
      });
    }

    if (buttonElements.length > 0) {
      console.log(buttonElements);
      gsap.to(buttonElements, {
        color: colorSetup['invert-p'],
        ease: 'power4.out',
      });

      for (const i in buttonElements) {
        if (buttonElements[i].classList.contains('nav_link')) {
          if (buttonElements[i].classList.contains('w--current')) {
            gsap.to(buttonElements[i], { borderColor: colorSetup['invert-p'], ease: 'power4.out' });
          } else {
            const createHover = ``;
            buttonElements[i].classList.add('mode_dark');
          }
        }
      }
    }

    if (glyphElements.length > 0) {
      gsap.to(glyphElements, { fill: colorSetup['invert-p'], ease: 'power4.out' });
    }
  }
};
