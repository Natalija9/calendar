import { useState } from 'react';
import Button from '../Button';
import styles from './addnewmeeting.module.css';

const AddNewMeeting = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');

  const validateTitle = (title) => !!title;

  const validateImage = (image) => {
    let isValid = true;

    if (!image) isValid = false;
    else {
      const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);

      if (!image.match(regex)) isValid = false;
    }

    return isValid;
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        let isFormValid = true;

        if (!validateTitle(title)) {
          isFormValid = false;
        }

        if (!validateImage(image)) {
          isFormValid = false;
        }

        if (isFormValid) {
          const product = {
            id: Math.random() * 10000,
            title: title,
            image: image,
            description: desc,
          };

          localStorage.setItem('products', JSON.stringify([product]));
        }
      }}
    >
      <div className={styles.group}>
        <label className={styles.label}>Title</label>
        <input
          className={`${styles.input} ${!validateTitle(title) ? styles.error : ''}`}
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => title.length < 10 && setTitle(e.target.value)}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Image</label>
        <input
          className={`${styles.input} ${!validateImage(image) ? styles.error : ''}`}
          type="text"
          placeholder="Enter image..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddNewMeeting;
