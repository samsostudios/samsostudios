export const colorMode = () => {
  const curMode = getCurrentColorMode();
  const colorSetup = { primary: '', secondary: '', accent: '' };

  const style = getComputedStyle(document.body);

  console.log('yo', style, style.getPropertyValue('--xmode-l--priamry'));

  colorSetup['primary'] = 'hello';

  console.log('here', colorSetup);

  function getCurrentColorMode() {
    let defaultMode = 'l';
    const modeHistory = localStorage.getItem('cmode');

    if (modeHistory === null) {
      localStorage.setItem('cmode', defaultMode);
    } else {
      console.log('switch initial mode');
      defaultMode = 'd';
    }

    return defaultMode;
  }
};
