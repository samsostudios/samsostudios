// eslint-disable-next-line simple-import-sort/imports
import { getTime } from '$utils/time';
import { gsap } from 'gsap';

export const statusComponent = () => {
  const status = [...document.querySelectorAll('.info-module_status')];

  status &&
    (() => {
      // Check if current time is within standard business hours (9 AM to 5 PM)
      const newTime = getTime();
      const businessHoursStart = 9; // 9 AM
      const businessHoursEnd = 17; // 5 PM (24-hour format)
      const lastBusinessHourStart = 16; // 4 PM
      const currentHour24 = parseInt(newTime[1].split(':')[0]);

      for (const i in status) {
        const temp = status[i] as HTMLElement;

        const geoStatus = temp.querySelector('.info-module_status-icon');

        if (currentHour24 >= businessHoursStart && currentHour24 < lastBusinessHourStart) {
          // console.log('in business', newTime);
          gsap.set(geoStatus, { backgroundColor: 'var(--status--active)' });
        } else if (currentHour24 >= lastBusinessHourStart && currentHour24 < businessHoursEnd) {
          // console.log('last hour of business', newTime);
          gsap.set(geoStatus, { backgroundColor: 'var(--status--limited)' });
        } else {
          // console.log('outside business', newTime);
          gsap.set(geoStatus, { backgroundColor: 'var(--status--offline)' });
        }
      }
    })();
};

export const timeComponent = () => {
  const timeModule = [...document.querySelectorAll('.info-module_time')];

  timeModule &&
    (() => {
      update();
    })();

  function update() {
    const newTime = getTime()[0];

    for (const i in timeModule) {
      const temp = timeModule[i] as HTMLElement;
      temp.innerHTML = newTime;
    }

    setTimeout(update, 1000);
  }
};

// Mix Components
export const statTimeComponent = () => {
  statusComponent();
  timeComponent();
};
