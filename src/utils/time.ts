export const getTime = () => {
  const now: Date = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

  const militaryTime = `${now.getHours().toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // console.log('mil:', militaryTime);

  return [formattedTime, militaryTime];
};
