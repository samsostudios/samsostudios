export const colorMode = () => {
  const curMode = getCurrentColorMode();
  const colorSetup = { primary: '', secondary: '', accent: '' };

  const style = getComputedStyle(document.body);

  console.log('yo', style.getPropertyValue('--xmode-l--priamry'));
  console.log(`--xmode-${curMode}`);

  for (const item in colorSetup) {
    console.log(item);
  }

  // colorSetup['primary'] = 'hello';

  function getCurrentColorMode() {
    let defaultMode = 'l';
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
};
