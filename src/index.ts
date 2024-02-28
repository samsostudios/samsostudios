import { siteFrame } from '$components/siteFrame';
import { home } from '$pages/home';
import { colorMode } from '$utils/colorMode';
import { formattedTime } from '$utils/fomattedTime';

window.Webflow ||= [];
window.Webflow.push(() => {
  const time = formattedTime();
  console.log('// 🌎 -- ' + time + ' //');
  console.log('test');

  // Global Modules
  siteFrame();
  colorMode();

  // Page Routing
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  }
});
