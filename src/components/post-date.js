import { general } from '@/lib/fonts';

export function PostDate(props) {
  const { date } = props;

  return (
    <time className={`text-lg ${general.className} block`} dateTime={date}>
      {formatDate(date)}
    </time>
  );
}

function formatDate(date) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateInstance = new Date(date);
  const UTCMonth = dateInstance.getUTCMonth();
  const UTCDate = dateInstance.getUTCDate();
  const UTCYear = dateInstance.getUTCFullYear();

  return `${months[UTCMonth]} ${UTCDate}, ${UTCYear}`;
}
