import React from 'react';

import Meeting from '../components/Meeting';
import { fetchCalendar } from '../client';

class Calendar extends React.Component {
  state = {
    filteredMeetings: [],
    allMeetings: []
  };

  componentDidMount() {
    fetchCalendar().then(({ data }) =>
      this.setState(() => ({ allMeetings: data, filteredMeetings: data }))
    );
  }

  updateState = data => {
    this.setState(() => ({ allMeetings: data }));
  };

  filterMeetings = event => {
    const inputValue = event.target.value;

    const filteredMeetings = this.state.allMeetings.filter(
      meeting =>
        meeting.topic.includes(inputValue) || meeting.date.includes(inputValue)
    );
    this.setState({
      filteredMeetings,
    });
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar__container">
          <div className="calendar__filters">
            <div className="calendar__filter">Home</div>
            <div className="calendar__filter">
              <label htmlFor="filter">
                Filter by date or title:
                <input
                  type="text"
                  name="filter"
                  placeholder="Your search query..."
                  onChange={this.filterMeetings}
                  />
              </label>
            </div>
          </div>
          {this.state.filteredMeetings.map((meeting, index) => (
            <Meeting {...meeting} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
