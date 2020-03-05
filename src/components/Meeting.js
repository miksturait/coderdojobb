import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'


const Meeting = ({ id, date, topic, message, hosts, isTakingPlace }) => {
    const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    const statusClass = isTakingPlace ? 'active' : 'inactive'

    return (
      <div className="meeting">
        <div className="meeting__container">
          <Link to={`meetings/${id}`}>
          <div className="meeting__header">
            <h2>{topic}</h2>
          </div>
          </Link>
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

export default Meeting;
