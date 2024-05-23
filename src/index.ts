import { frame } from '$components/frame';
import { statTimeComponent } from '$components/infoComponents';
import { nav } from '$components/nav';
import { tempFrame } from '$components/tempFrame';
import { colorMode } from '$modules/colorMode';
import { cursor } from '$modules/cursor';
import { home } from '$pages/home';
import { getTime } from '$utils/time';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('// 🌎 -- v0.0.1  //');

  // Global Modules
  tempFrame();
  statTimeComponent();
  cursor();
  // frame();
  // colorMode();
  // nav();

  // Page Routing
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  }
});
