import React from 'react';

import Meeting from '../components/Meeting';
import { fetchCalendar } from '../client';

class Calendar extends React.Component {
  state = {
    filteredMeetings: [],
    allMeetings: []
  };

  componentDidMount() {
    fetchCalendar().then(({ data }) => this.setState(() => ({
      filteredMeetings: data,
      allMeetings: data
    })));
  }

  updateState = data => {
    this.setState(() => ({ filteredMeetings: data }));
  };

  filterMeetings = event => {
    const inputValue = event.target.value;

    const filteredMeetings = this.state.allMeetings.filter(
      meeting => meeting.topic.includes(inputValue) || meeting.date.includes(inputValue),
    );
    this.setState({
      filteredMeetings,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">
          Filter by date or title:
          <input
            type="text"
            name="filter"
            placeholder="Your search query..."
            onChange={this.filterMeetings}
          />
        </label>
        <h1>Calendar page!!</h1>
        {this.state.filteredMeetings.map((meeting, index) => (
          <Meeting {...meeting} key={index} />
        ))}
      </div>
    );
  }
}

export default Calendar;
