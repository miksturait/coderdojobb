import React, { Component } from 'react'

class Meeting extends Component {
  render () {

    const { date, topic, message, hosts, isTakingPlace } = this.props

    return (
      <div>
        <h2>
          {topic}
        </h2>
        <small>
          {date}
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
