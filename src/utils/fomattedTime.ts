export const getTime = () => {
  const now: Date = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

  return formattedTime;
};

export const timeModule = () => {
  const timeModule = document.querySelector('.info-module_component.is-time') as HTMLElement;

  timeModule &&
    (() => {
      updateModule();
    })();

  function updateModule() {
    const now: Date = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = now.getHours() >= 12 ? 'PM' : 'AM';

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

    // timeModule !== null && (() => {});
    timeModule.children[0].innerHTML = formattedTime;
    setTimeout(updateModule, 1000);
  }
};
