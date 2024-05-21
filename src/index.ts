import { frame } from '$components/frame';
import { nav } from '$components/nav';
import { tempFrame } from '$components/tempFrame';
import { colorMode } from '$modules/colorMode';
import { cursor } from '$modules/cursor';
import { home } from '$pages/home';
import { getTime } from '$utils/fomattedTime';

window.Webflow ||= [];
window.Webflow.push(() => {
  const time = getTime();
  console.log('// 🌎 -- ' + time + ' //');

  // Global Modules
  // tempFrame();
  // frame();
  colorMode();
  cursor();
  nav();

  // Page Routing
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  }
});
