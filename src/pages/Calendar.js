import React from 'react'

import Meeting from '../components/Meeting'
import { calendar } from '../data/dataMock.json'

class Calendar extends React.Component {
  state = {
    filteredMeetings: calendar
  };

  filterMeetings = event => {
    const inputValue = event.target.value;

    const filteredMeetings = calendar.filter(meeting =>
        (meeting.topic.includes(inputValue) || meeting.date.includes(inputValue)));
    this.setState({
      filteredMeetings
    })
  };

  render () {
    return (
      <div>
        <input onChange={this.filterMeetings}/>
        <h1>Calendar page!! </h1>
        {this.state.filteredMeetings.map((meeting, index) => <Meeting {...meeting} key={index}/>)}
      </div>
    )
  }
}

export default Calendar
