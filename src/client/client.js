import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchCalendar = () => axios.get(`${URL}/calendar`);

export const filterCalendar = (topic, date) =>
  axios.get(`${URL}/calendar?calendar.topic=${topic}&calendar.date=${date}`);

export const fetchMeeting = (id) => axios.get(`${URL}/calendar/${id}`);

export const saveUser = user => {
  axios.post(`${URL}/users`, user)
  console.log('register user')
}

export const loginUser = async (userEmail, userPassword) => {
  const response = await axios.get(`${URL}/users?email=${userEmail}&password=${userPassword}`)
  console.log(response, 'response')
  if (response.data.length !== 0) {
    const { data: [{ email, password }] } = response
    if (email === userEmail && password === userPassword) {
      return {
        token: email + '_' + Date.now()
      }
    }  
  }
  else console.log('User does not exist')
}