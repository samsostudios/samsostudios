import { frame } from '$components/frame';
import { statTimeComponent } from '$components/infoComponents';
import { nav } from '$components/nav';
import { preload } from '$components/preload';
import { tempFrame } from '$components/tempFrame';
import { tickerTape } from '$components/ticker';
import { colorMode } from '$modules/colorMode';
import { cursor } from '$modules/cursor';
import { imageTracking } from '$modules/imageTracking';
import { home } from '$pages/home';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('// 🌎 -- v0.0.1  //');

  // Global Modules

  // ------------------
  // Standby Page Setup
  // ------------------
  preload();
  tempFrame();
  statTimeComponent();
  cursor();
  imageTracking();
  tickerTape();
  // getDenverTime();
  // ------------------
  // ------------------

  // frame();
  // colorMode();
  // nav();

  // Page Routing
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    // home();
  }
});
