import React, { useState, useEffect } from 'react';
import styles from './day.module.css';
import { useRouter } from 'next/router';

const Day = ({ date, openModal }) => {
  const [meetings, setMeetings] = useState([]);

  const router = useRouter();


  if (date === "") {
    return <td></td>
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/meetings/date/${date}`)
      .then((res) => res.json())
      .then((json) => { setMeetings(json); })
  }, []);

  return (

    <td className={styles.day} onDoubleClick={() => {
      openModal(date);
    }}>
      <div className={styles.main}>

        {date}
        <div >
          {meetings.length ? meetings?.map((x, i) =>
            <div key={i}>
              <p onClick={() => router.push(`/meeting/${x._id}`)} className={styles.meeting}>{x.title}</p>
              <p className={styles.time}>{x.time}h</p>
            </div>) : <></>}
        </div>

      </div>

    </td>

  );
};

export default Day;
