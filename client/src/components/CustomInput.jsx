import React from 'react'

//styles
import styles from '../styles';

const regex = /^[A-Za-z0-9]+$/;

const CustomInput = ({ label, placeholder, value, handleValueChange }) => {
  return (
    <>
        <label htmlFor='name' className={styles.label}>{label}</label>
        <input
        className={styles.input}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            if(e.target.value === '' || regex.test(e.target.value)) handleValueChange(e.target.value);
          }
        }/>
    </>
  )
}

export default CustomInput