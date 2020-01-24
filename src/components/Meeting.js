import React, { Component } from 'react'
import moment from 'moment';

class Meeting extends Component {
  render () {

    const { date, topic, message, hosts, isTakingPlace } = this.props
    const formattedDate = moment(date).format('DD-MMMM-YYYY')
    const now = moment(new Date())
    const daysToMeeting = now.to(date)
    
    return (
      <div>
        <h2>
          {topic} will start in {daysToMeeting}
        </h2>
        <small>
          {formattedDate}
        </small>
        <p>
          {message}
        </p>
        <ol>
          {hosts.map((host, index) => <li key={index}>{host}</li>)}
        </ol>
        <input type="checkbox" disabled checked={isTakingPlace}/>
      </div>
    )
  }
}

export default Meeting
