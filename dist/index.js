"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/components/siteFrame.ts
  var siteFrame = () => {
    const siteFrame2 = document.querySelector(".site_frame");
  };

  // src/utils/fomattedTime.ts
  var formattedTime = () => {
    const now = /* @__PURE__ */ new Date();
    function isDST(date) {
      const year = date.getUTCFullYear();
      const secondSundayOfMarch = new Date(Date.UTC(year, 2, 8));
      while (secondSundayOfMarch.getUTCDay() !== 0) {
        secondSundayOfMarch.setUTCDate(secondSundayOfMarch.getUTCDate() + 1);
      }
      const firstSundayOfNovember = new Date(Date.UTC(year, 10, 1));
      while (firstSundayOfNovember.getUTCDay() !== 0) {
        firstSundayOfNovember.setUTCDate(firstSundayOfNovember.getUTCDate() + 1);
      }
      return date >= secondSundayOfMarch && date < firstSundayOfNovember;
    }
    const offset = isDST(now) ? 6 * 60 * 60 * 1e3 : 7 * 60 * 60 * 1e3;
    const nowInMT = new Date(now.valueOf() - offset);
    let hours = nowInMT.getUTCHours();
    const minutes = String(nowInMT.getUTCMinutes()).padStart(2, "0");
    const seconds = String(nowInMT.getUTCSeconds()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedTime2 = `${formattedHours}:${minutes}:${seconds} ${period}`;
    return formattedTime2;
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const time = formattedTime();
    console.log("// \u{1F30E} -- " + time + " //");
    siteFrame();
  });
})();
//# sourceMappingURL=index.js.map
