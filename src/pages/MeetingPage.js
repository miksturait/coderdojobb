import React,{useEffect,useState} from 'react'
import{useParams} from 'react-router-dom'

import {fetchMeeting} from '../client'

const MeetingPage = () => {

  const [meetingDetails, setMeetingDetails] = useState()
  const {id} = useParams()

  useEffect(()=>{
    fetchMeeting(id).then(response=>setMeetingDetails(response.data))
  },[id])

  return (
    <div>
      <h1>Meeting page</h1>
      {meetingDetails&&(
        <div className="meeting-details">
          <h1 className="meeting-details__topic">{meetingDetails.topic}</h1>
          <ol>
          {meetingDetails.resources && meetingDetails.resources.map((resource, index)=>
            <li key={resource}>
            <a href={resource} target="_blank" rel="noopener noreferrer">{resource}</a>
            </li>)}
          </ol>
        </div>
      )}
    </div>
  )
}

export default MeetingPage
