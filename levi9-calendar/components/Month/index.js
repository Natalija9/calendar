import React, { useState, useEffect } from 'react';

import Day from '../Day';

const Month = ({openModal}) => {

  const month = [["", "", "", "", "", "01", "02"],
  ["03", "04", "05", "06", "07", "08", "09"],
  ["10", "11", "12", "13", "14", "15", "16"],
  ["17", "18", "19", "20", "21", "22", "23"],
  ["24", "25", "26", "27", "28", "29", "30"],
  ["31", "", "", "", "", "", ""]];

  return (
    <>
      <h1>January 2022</h1>

      <table>
        <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        </thead>
        <tbody>
        {month?.map((week, index) => (
          <tr key={index} >
            {week?.map((day, index) => (
              <Day key={index} date={day}

              openModal={
                openModal
              }

              />
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      

    </>
  );
};

export default Month;
