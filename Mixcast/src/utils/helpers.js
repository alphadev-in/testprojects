import axios from 'axios';

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const accessToken = localStorage.getItem('auth_token');
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const padStart = (num) => {
  let s = num.toString();
  while (s.length < 2) s = `0${s}`;
  return s;
};

export const msToHMS = (ms) => {
  // 1- Convert to seconds:
  let seconds = ms / 1000;
  // 2- Extract hours:
  const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  seconds = Math.round(seconds % 60);

  return {
    hours: padStart(hours),
    minutes: padStart(minutes),
    seconds: padStart(seconds)
  };
};

export const MMDDYYYToMonthDayYear = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
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
    'December'
  ];
  const now = new Date(date);

  return {
    day: days[now.getDay()],
    month: months[now.getMonth()],
    date: now.getDate(),
    year: now.getFullYear()
  };
};

export const paginate = (array, page_size, page_number) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
