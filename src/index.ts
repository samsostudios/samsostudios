import { siteFrame } from '$components/siteFrame';
import { formattedTime } from '$utils/fomattedTime';

window.Webflow ||= [];
window.Webflow.push(() => {
  const time = formattedTime();
  console.log('// 🌎 -- ' + time + ' //');

  // Global Modules
  siteFrame();
});
