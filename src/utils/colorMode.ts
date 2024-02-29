import { gsap } from 'gsap';

export const colorMode = () => {
  const curMode = getCurrentColorMode();
  const colorSetup = { primary: '' };
  const modeToggles = [...document.querySelectorAll('.mode-toggle_indicator')];

  updateColorSetup(curMode);

  //setup toggles
  for (let i = 0; i < modeToggles.length - 1; i++) {
    const temp = modeToggles[i] as HTMLElement;
    temp.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetMode = target.dataset.xmode as string;

      console.log(targetMode);
      updateColorSetup(targetMode);
    });
  }
  // colorSetup['primary'] = 'hello';

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
    // setup colors
    const style = getComputedStyle(document.body);
    for (const item in colorSetup) {
      const getVar = style.getPropertyValue(`--xmode-${mode}--${item}`);

      colorSetup.primary = getVar;

      console.log('set mode', getVar);

      setColor();
    }
  }

  function setColor() {
    const body = document.querySelector('body');

    gsap.to(body, { duration: 0.5, backgroundColor: colorSetup.primary, ease: 'power4.out' });
    console.log('SET', colorSetup);
  }
};
