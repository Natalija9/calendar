import Button from '../Button';
import styles from './addnewmeeting.module.css';
import Multiselect from 'multiselect-react-dropdown';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';


const AddNewMeeting = ({ show, closeModal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(showHideClassName);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [partic, setPartic] = useState([]);
  const [date, setDate] = useState('');

  const [allParticipants, setAllParticipants] = useState([]);
  const router = useRouter();

  const multiselectList = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setAllParticipants(data));
  }, []);

  const validate = (val) => !!val;

  const validateForm = () => {
    let isFormValid = true;

    if (!validate(title)
      || !validate(partic)
      || !validate(date)
      || !validate(time)) {
      isFormValid = false;
    }

    return isFormValid;
  }

  const resetForm = (e) => {
    e.preventDefault();

    setTitle('');
    setTime('');
    setDesc('');
    setPartic([]);
    multiselectList.current.resetSelectedValues();
    closeModal();
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newMeeting = {
        title: title,
        description: desc,
        time: time,
        date: date,
        participants: partic.map((x) => x.name),
      };

      sendRequest(newMeeting);
      resetForm(e);
    } else {
      window.alert("Please enter all information");
    }
  };

  const sendRequest = (newMeeting) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeeting),
    };

    fetch("http://localhost:5000/api/meetings/new", options)
      .then((res) => res.json())
      .then((data) => router.push("/meeting/" + data._id));
  };



  return (

    <div className={showHideClassName}>
      <section className="modal-main">

        <form
          className={styles.form}
          onSubmit={(e) => submitForm(e)}
        >
          <div className={styles.group}>
            <label className={styles.label}>Title</label>
            <input
              className={`${styles.input} ${!validate(title) ? styles.error : ''}`}
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => title.length < 10 && setTitle(e.target.value)}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.input}
              placeholder="Enter description..."
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Date</label>
            <input
              className={`${styles.input} ${!validate(date) ? styles.error : ''}`}
              type="text"
              placeholder="Enter date..."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Time</label>
            <input
              className={`${styles.input} ${!validate(time) ? styles.error : ''}`}
              type="text"
              placeholder="Enter time..."
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>Add participants</label>
            <Multiselect
              options={allParticipants}
              selectedValues={[]}
              onSelect={(selectedList, selectedItem) =>
                setPartic(selectedList)
              }
              onRemove={(selectedList, removedItem) =>
                setPartic(selectedList)
              }
              displayValue="name"
              ref={multiselectList}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>


      </section>
    </div>


  );
};

export default AddNewMeeting;
