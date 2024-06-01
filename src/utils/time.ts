interface ExtendedDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
}

export const getTime = () => {
  const now: Date = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = now.getHours() >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

  const militaryTime = `${now.getHours().toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return [formattedTime, militaryTime];
};

export const getDenverTime = () => {
  const denverTimeOffset = getDenverTimeOffset();
  const now = new Date();
  const denverTime = new Date(now.getTime() + denverTimeOffset);
  const options12Hour: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  // Options for 24-hour format (military time)
  const options24Hour: any = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  };

  const formattedDenverTime12Hour = denverTime.toLocaleString('en-US', options12Hour);
  const formattedDenverTime24Hour = denverTime.toLocaleString('en-US', options24Hour);

  return [formattedDenverTime12Hour, formattedDenverTime24Hour];

  function getDenverTimeOffset() {
    // Denver is in the Mountain Time Zone (MST/MDT)
    // MST is UTC-7, MDT is UTC-6 (considering daylight saving time)
    const denverTimeZone = 'America/Denver';
    const now = new Date();
    const denverTime = new Date().toLocaleString('en-US', { timeZone: denverTimeZone });
    const localTime = now.getTime();
    const denverTimeInMillis = new Date(denverTime).getTime();

    return denverTimeInMillis - localTime;
  }
};
