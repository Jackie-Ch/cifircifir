import React, { useState } from 'react';
import { calculate } from '../../assets/calculate';
import Table from '../Table/Table';
import FormDate from '../FormDate/FormDate';
import style from './PersonalCharacteristics.module.css';

function PersonalCharacteristics() {
  const [numbers, setNumbers] = useState([]);
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date.day || !date.month || !date.year) return console.log('UPSss');
    const dateOfBirthday = Object.values(date);
    const calculatedArray = calculate(dateOfBirthday);
    setNumbers(calculatedArray);
  };

  return (
    <div className={style.personalCharacteristic_content}>
      <div className={style.date_block}>
        <FormDate handleChange={handleChange} date={date} />
        <button onClick={handleSubmit}>Расчитать</button>
      </div>
      <div className={style.dateofbirthday}>
        {date.day && date.month && date.year
          ? `${date.day}.${date.month}.${date.year}`
          : 'дата рождения'}
      </div>
      <Table numbers={numbers} />
    </div>
  );
}

export default PersonalCharacteristics;
