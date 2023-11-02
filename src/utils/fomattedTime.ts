export const formattedTime = () => {
  const now: Date = new Date();

  function isDST(date: Date): boolean {
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

  const offset: number = isDST(now) ? 6 * 60 * 60 * 1000 : 7 * 60 * 60 * 1000;

  const nowInMT: Date = new Date(now.valueOf() - offset);

  let hours: number = nowInMT.getUTCHours();
  const minutes: string = String(nowInMT.getUTCMinutes()).padStart(2, '0');
  const seconds: string = String(nowInMT.getUTCSeconds()).padStart(2, '0');

  const period: string = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours: string = String(hours).padStart(2, '0');

  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${period}`;

  return formattedTime;
};
