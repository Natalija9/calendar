import React, { useRef, useEffect, useContext } from 'react';
import Link from 'next/link';
import { truncate } from '../../utils';
import { ThemeContext } from '../Layout';
import styles from './day.module.css';
import { Table } from 'semantic-ui-react';

const Day = ( {date}, {days} ) => {
  const wrapper = useRef(null);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    console.log('theme', theme);
  }, [theme]);

  return (

    <Table.Cell selectable className={styles.cell}>
          {date}
    </Table.Cell>

    // <div ref={wrapper} className={styles.text}>
    //   Cao
    // </div>
  );
};

export default React.memo(Day);
