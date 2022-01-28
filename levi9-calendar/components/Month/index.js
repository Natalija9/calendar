// import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// import { useSelector, useDispatch } from 'react-redux';
import Day from '../Day';
// import { Table } from 'semantic-ui-react';
// import Button from '../Button';
// import { increment, decrement } from '../../store/slices/counterSlice';
import {styles} from './month.module.css';
// import { getUser } from '../../store/slices/userSlice';

const Month = () => {
  // const callback = useCallback(() => console.log('foo'), []);
  const router = useRouter();
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const { data, pending, error } = useSelector((state) => state.user);

  // console.log('data', data);
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
              />
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      {/* <div className={styles['btn-wrapper']}>
        <Button onClick={() => router.push('/new')}>Add new</Button>
      </div> */}

    </>
  );
};

export default Month;
