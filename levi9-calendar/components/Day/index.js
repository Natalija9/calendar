import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Day = ({date}) => {
  const [meetings, setMeetings] = useState([]);

  const router = useRouter();

  if(date === "") {
    return <td></td>
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/meetings/date/' + date)
      .then((res) => res.json())
    .then((json) => {setMeetings(json);})
  }, []);

  return (
    
    <td className='day'>
      <div className='main'>

      {date}
      <div >
      {meetings.length ? meetings?.map((x, i) => <p onClick={() => router.push('/meeting/' + x._id)} key={i} className='meeting'>{x.title}</p>) : <></>}
      </div>
    
      </div>

    </td>

  );
};

export default React.memo(Day);
