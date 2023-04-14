import React from 'react';
import style from './FormDate.module.css';

function FormDate({ date, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="day"
        min="1"
        max="31"
        placeholder="день"
        value={date.day}
        onChange={handleChange}
      />
      <input
        type="number"
        name="month"
        max="12"
        min="1"
        placeholder="месяц"
        value={date.month}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="год"
        max="2023"
        min="1900"
        value={date.year}
        onChange={handleChange}
      />
    </form>
  );
}

export default FormDate;
