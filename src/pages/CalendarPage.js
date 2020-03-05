import React,{useState, useEffect} from 'react';

import Meeting from '../components/Meeting';
import { fetchCalendar } from '../client';

const Calendar = () => {
  const [filteredMeetings, setFilteredMeetings] = useState([])
  const [allMeetings, setAllMeetings] = useState([])

  useEffect(()=>{
    fetchCalendar().then(({ data }) =>{
      setAllMeetings(data)
      setFilteredMeetings(data)
    }
  )
  },[])

  const filterMeetings = event => {
    const inputValue = event.target.value.toLowerCase()

    const filteredMeetings = allMeetings.filter(
      ({topic, date}) =>
        topic.toLowerCase().includes(inputValue) || date.toLowerCase().includes(inputValue)
    );
    setFilteredMeetings(filteredMeetings)
  };

    return (
      <div className="calendar">
        <div className="calendar__container">
          <div className="calendar__filters">
            <div className="calendar__filter">
              <label htmlFor="filter">
                Filter by date or title:
                <input
                  type="text"
                  name="filter"
                  placeholder="Your search query..."
                  onChange={filterMeetings}
                  />
              </label>
            </div>
          </div>
          {filteredMeetings.map((meeting, index) => (
            <Meeting {...meeting} key={index} />
          ))}
        </div>
      </div>
    );
}

export default Calendar;
