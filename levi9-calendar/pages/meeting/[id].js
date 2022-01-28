import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

const Id = () => {
  const [meeting, setMeeting] = useState([]);


  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    fetch('http://localhost:5000/api/meetings/' + id)
      .then((res) => res.json())
      .then((json) => { setMeeting(json); })
  }, [id]);


  return (
    <div>
      <h1>Meeting details</h1>

      <div className='show'>
        <div className='details'>
          <h2>Title:</h2>
          <p>{meeting.title}</p>
        </div>

        <div className='details'>
          <h2>Description:</h2>
          <p>{meeting.description}</p>
        </div>

        <div className='details'>
        <h2>Time:</h2>
        <p>{meeting.time}h</p>

        </div>

        <div className='details'>
          <h2>Participants:</h2>
          {meeting.participants?.map((x, i) => <li key={i}>{x}</li>)}
        </div>

        <div className='details'>
          <Button>Delete meeting</Button>
        </div>


      </div>

    </div>);
};

export default Id;