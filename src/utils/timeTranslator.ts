interface IOptions {
  weekday?: 'short';
  month: 'long';
  day: 'numeric';
}

export const timeTranslator = (time: string): string[] => {
  const day = new Date(time.split(' ')[0]);

  const options: IOptions = {
    month: 'long',
    day: 'numeric',
  };

  if (day.getDay() === new Date().getDay())
    return ['Сегодня', day.toLocaleString('ru', options)];

  options.weekday = 'short';

  return day
    .toLocaleString('ru', options)[0]
    .toUpperCase()
    .concat(day.toLocaleString('ru', options).slice(1))
    .split(', ');
};
