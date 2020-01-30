import React, { Component } from 'react'
import moment from "moment";

class Meeting extends Component {
  render () {

    const { date, topic, message, hosts, isTakingPlace } = this.props;

    const formattedDate = moment(date).format("DD/MM/YYYY HH:mm");

    return (
      <div>
        <h2>
          {topic}
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
