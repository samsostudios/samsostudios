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
    accent: '',
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
      localStorage.setItem('cmode', defaultMode);
    } else if (modeHistory !== defaultMode) {
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
    const body = document.querySelector('body');
    const navHover = document.querySelector('.nav_hover');

    const modePrimary = [...document.querySelectorAll('.mode_primary')];
    const modeSecondary = [...document.querySelectorAll('.mode_secondary')];
    const modePrimaryInvert = [...document.querySelectorAll('.mode_primary-invert')];
    const modeSecondaryInvert = [...document.querySelectorAll('.mode_secondary-invert')];
    const modeAccent = [...document.querySelectorAll('.mode_accent')];
    const modeGlass = [...document.querySelectorAll('.mode_glass-effect')];
    const modeBorder = [...document.querySelectorAll('.mode_border')];
    // const secondaryElements = [...document.querySelectorAll('.mode_secondary')];
    // const accentElements = [...document.querySelectorAll('.mode_accent')];

    // const bgInvertElements = [...document.querySelectorAll('.mode_bg-invert')];
    // const textInvertElements = [...document.querySelectorAll('.mode_text-invert')];

    // const glassElements = [...document.querySelectorAll('.mode_glass-effect')];
    // const borderElements = [...document.querySelectorAll('.mode_border')];
    // const buttonElements = [...document.querySelectorAll('a')];
    // const glyphElements = [...document.querySelectorAll('.ss-glyph_path')];
    // const logoElements = [...document.querySelectorAll('.mode_logo')];
    // const cursorElement = document.querySelector('.cursor_component') as HTMLElement;

    // Global
    const body = document.querySelector('body');
    const navHover = document.querySelector('.nav_hover');

    gsap.to(body, {
      backgroundColor: colorSetup['primary'],
      color: colorSetup['invert-p'],
    });
    gsap.to(navHover, { borderColor: colorSetup['invert-p'] });

    // Colors
    const modePrimary = [...document.querySelectorAll('.mode_primary')];
    const modeSecondary = [...document.querySelectorAll('.mode_secondary')];
    const modePrimaryInvert = [...document.querySelectorAll('.mode_primary-invert')];
    const modeSecondaryInvert = [...document.querySelectorAll('.mode_secondary-invert')];
    const modeAccent = [...document.querySelectorAll('.mode_accent')];

    if (modePrimary.length !== 0) {
      gsap.to(modePrimary, { backgroundColor: colorSetup['primary'] });
    }
    if (modeSecondary.length !== 0) {
      gsap.to(modeSecondary, { backgroundColor: colorSetup['secondary'] });
    }
    if (modePrimaryInvert.length !== 0) {
      gsap.to(modePrimaryInvert, { backgroundColor: colorSetup['invert-p'] });
    }
    if (modeSecondaryInvert.length !== 0) {
      gsap.to(modeSecondaryInvert, { backgroundColor: colorSetup['invert-s'] });
    }
    if (modeAccent.length !== 0) {
      gsap.to(modeAccent, { backgroundColor: colorSetup['accent'] });
    }

    // Typography

    // UI ELements

    // if (modeGlass.length !== 0) {
    //   gsap.to(modeGlass, { backgroundColor: colorSetup['glass'] });
    // }

    // if (modeBorder.length !== 0) {
    //   gsap.to(modeBorder, { borderColor: colorSetup['invert-p'] });
    // }

    // if (secondaryElements.length > 0) {
    //   gsap.to(secondaryElements, { backgroundColor: colorSetup['secondary'] });
    // }

    // if (accentElements.length > 0) {
    //   gsap.to(accentElements, { backgroundColor: colorSetup['accent'] });
    // }

    // if (bgInvertElements.length > 0) {
    //   gsap.to(bgInvertElements, { backgroundColor: colorSetup['invert-p'] });
    // }

    // if (textInvertElements.length > 0) {
    //   console.log(colorSetup['primary']);
    //   gsap.to(textInvertElements, { color: colorSetup['primary'] });
    // }

    // if (glassElements.length > 0) {
    //   gsap.to(glassElements, {
    //     backgroundColor: colorSetup['glass'],
    //   });
    // }

    // if (borderElements.length > 0) {
    //   gsap.to(borderElements, {
    //     borderColor: colorSetup['invert-p'],
    //   });
    // }

    // if (buttonElements.length > 0) {
    //   gsap.to(buttonElements, {
    //     color: colorSetup['invert-p'],
    //   });

    //   for (const i in buttonElements) {
    //     if (buttonElements[i].classList.contains('nav_link')) {
    //       if (buttonElements[i].classList.contains('w--current')) {
    //         gsap.to(buttonElements[i], {
    //           backgroundColor: colorSetup['primary'],
    //           borderColor: colorSetup['invert-p'],
    //         });
    //       } else {
    //       }
    //     } else if (buttonElements[i].classList.contains('button')) {
    //       gsap.to(buttonElements[i], {
    //         backgroundColor: colorSetup['glass'],
    //         borderColor: colorSetup['invert-p'],
    //       });
    //     }
    //   }
    // }

    // if (glyphElements.length > 0) {
    //   gsap.to(glyphElements, { fill: colorSetup['invert-p'], ease: 'power4.out' });
    // }

    // if (logoElements.length > 0) {
    //   for (const i in logoElements) {
    //     const logoFill = logoElements[i].querySelector('.is-fill');
    //     const logoOutline = logoElements[i].querySelector('.is-outline');
    //     const logoLetters = [...logoElements[i].querySelectorAll('.is-letter')];
    //     gsap.to(logoFill, { fill: colorSetup['accent'] });
    //     gsap.to(logoLetters, { fill: colorSetup['invert-p'] });
    //   }
    // }

    // if (cursorElement !== undefined) {
    //   gsap.to(cursorElement.children[0], { borderColor: colorSetup['invert-p'] });
    //   gsap.to(cursorElement.children[1], { backgroundColor: colorSetup['invert-p'] });
    // }
  }
};
