<<<<<<< HEAD
import React from 'react';

import Meeting from '../components/Meeting';
import { fetchCalendar } from '../client';
=======
import React from 'react'
import Meeting from '../components/Meeting'
import axios from 'axios'

const url = "http://localhost:3000/calendar";
>>>>>>> Added extra property for state to hold data from API

class Calendar extends React.Component {
  state = {
    filteredMeetings: [],
    allMeetings:[]
  }

  componentDidMount() {
    axios.get(url)
    .then(res => {
      const allMeetings = res.data;
      this.setState({
        allMeetings,
        filteredMeetings: allMeetings
      })
    })
  }
  filterMeetings = event => {
    const inputValue = event.target.value
    const filteredMeetings = this.state.allMeetings.filter(meeting => meeting.topic.includes(inputValue))
    this.setState({
      filteredMeetings
    })
  }
  filterDate = event => {
    const inputValue = event.target.value
    const filteredMeetings = this.state.allMeetings.filter(meeting => meeting.date.includes(inputValue))
    this.setState({
      filteredMeetings
    })
  }
  render () {
    console.log(this.state.filteredMeetings)
    return (
      <div>
        Filter by title:
        <input onChange={this.filterMeetings}/>
        <br/><br/>
        Filter by date:
        <input onChange={this.filterDate}></input>
        <h1>Calendar page!! </h1>
        {this.state.filteredMeetings.map((meeting, index) => <Meeting {...meeting} key={index}/>)}
      </div>
    );
  }
}
export default Calendar
