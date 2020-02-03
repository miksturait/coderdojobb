import React, { Component } from 'react';
import moment from 'moment';

class Meeting extends Component {
  render() {
    const { date, topic, message, hosts, isTakingPlace } = this.props;

    const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');

    return (
      <div>
        <h2>{topic}</h2>
        <small>{formattedDate}</small>
        <p>{message}</p>
        <ol>
          {hosts.map((host, index) => (
            <li key={index}>{host}</li>
          ))}
        </ol>
        <label htmlFor="is-taking-place">
          {isTakingPlace ? 'Meeting will take place' : 'Meeting will not take place'}
          <input type="checkbox" name="is-taking-place" disabled checked={isTakingPlace} />
        </label>
      </div>
    );
  }
}

export default Meeting;
