import React, { Component } from 'react';
import moment from 'moment';

class Meeting extends Component {
  render() {
    const { date, topic, message, hosts, isTakingPlace } = this.props;

    const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    const statusClass = isTakingPlace ? 'active' : 'inactive' 

    return (
      <div className="meeting">
        <div className="meeting__container">
          <div className="meeting__header">
            <h2>{topic}</h2>
          </div>
          <div className="meeting__date">{formattedDate}</div>
          <div className="meeting__message">
            <p>{message}</p>
          </div>
          <div className="meeting__hosts">
            <ol>
            {hosts.map((host, index) => (
              <li key={index}>{host}</li>
              ))}
            </ol>
          </div>
          <div className={`meeting__status ${statusClass}`}>
            <label htmlFor="is-taking-place">
              {isTakingPlace ? 'Meeting will take place' : 'Meeting will not take place'}
              <input className="meeting__checkbox" type="checkbox" name="is-taking-place" disabled checked={isTakingPlace} />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Meeting;
