import React from 'react';

import Meeting from '../components/Meeting';
import { fetchCalendar } from '../client';

class Calendar extends React.Component {
  state = {
    filteredMeetings: [],
  };

  componentDidMount() {
    fetchCalendar().then(({ data }) => this.setState(() => ({ filteredMeetings: data })));
  }

  updateState = data => {
    this.setState(() => ({ filteredMeetings: data }));
  };

  filterMeetings = event => {
    const inputValue = event.target.value;

    const filteredMeetings = this.state.filteredMeetings.filter(
      meeting => meeting.topic.includes(inputValue) || meeting.date.includes(inputValue),
    );
    this.setState({
      filteredMeetings,
    });
  };

  filterByDate = e => {
    const inputSelectedDate = e.target.value;
    const filteredMeetings = calendar.filter(meeting => meeting.date.includes(inputSelectedDate))
    this.setState({
      filteredMeetings
    })
  }

  render () {
    return (
      <div>
        <input onChange={this.filterMeetings}/>
        <input type="date" onChange={this.filterByDate}/>
        <h1>Calendar page!! </h1>
        {this.state.filteredMeetings.map((meeting, index) => <Meeting {...meeting} key={index}/>)}
      </div>
    );
  }
}

export default Calendar;
