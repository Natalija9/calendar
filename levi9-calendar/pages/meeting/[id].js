import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

const Id = () => {
  const [meeting, setMeeting] = useState([]);


  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`http://localhost:5000/api/meetings/${id}`)
      .then((res) => res.json())
      .then((data) => setMeeting(data))
  }, []);

  const deleteMeeting = () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      query: JSON.stringify(id),
    };

    fetch(`http://localhost:5000/api/meetings/${id}`, options)
      .then(router.back());
  };


  return (
    <div>
      <h1>Meeting details</h1>


      <div className='show-details'>
        <div className='details'>
          <h2>Title:</h2>
          <p>{meeting.title}</p>
        </div>

        <div className='details'>
          <h2>Description:</h2>
          <p>{meeting.description}</p>
        </div>

        <div className='details'>
          <h2>Date and time:</h2>
          <p>{meeting.date}.01.2022.</p>
          <p>{meeting.time}</p>

        </div>

        <div className='details'>
          <h2>Participants:</h2>
          {meeting.participants?.map((x, i) => <li key={i}>{x}</li>)}
        </div>

        <div className='details'>
          <Button onClick={() => deleteMeeting()}>Delete meeting</Button>

          <Button onClick={() => router.back()}>Go back</Button>
        </div>


      </div>

    </div>);
};

export default Id;