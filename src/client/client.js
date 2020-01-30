import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchCalendar = () => axios.get(`${URL}/calendar`);

export const filterCalendar = (topic, date) =>
  axios.get(`${URL}/calendar?calendar.topic=${topic}&calendar.date=${date}`);
