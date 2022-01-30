import AddNewMeeting from '../components/AddNewMeeting';
import Month from '../components/Month';
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [modalShow, toggleModal] = useState(false);

  return (
    <>
      <Month
        openModal={() => {
          toggleModal(true);
        }}
      />
      <AddNewMeeting show={modalShow} closeModal={() => toggleModal(false)}></AddNewMeeting>

    </>)
}


