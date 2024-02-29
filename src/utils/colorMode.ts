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
      localStorage.setItem('cmode', targetMode);
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

    setColor();
  }

  function setColor() {
    console.log('SET', colorSetup);
    const body = document.querySelector('[data-cmode-main]');
    const glassElements = [...document.querySelectorAll('.mode_glass-effect')];

    gsap.to(body, {
      duration: 0.5,
      backgroundColor: colorSetup['primary'],
      color: colorSetup['invert-p'],
      ease: 'power4.out',
    });
    gsap.to(glassElements, {
      duration: 0.5,
      backgroundColor: colorSetup['glass'],
      borderColor: colorSetup['invert-p'],
      ease: 'power4.out',
    });
  }
};
