import AddNewMeeting from '../components/AddNewMeeting';
import Month from '../components/Month';
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [modalShow, toggleModal] = useState(false);
  const [date, setDate] = useState('');

  return (
    <>
      <Month
        openModal={(date) => {
          toggleModal(true);
          setDate(date);
        }}
      />
      <AddNewMeeting show={modalShow} closeModal={() => toggleModal(false)} date={date}></AddNewMeeting>

    </>)
}


