import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import FormDate from '../FormDate/FormDate';
import style from './HumanCompatibility.module.css';
import { calculate } from '../../assets/calculate';
import { additionDate } from '../../assets/additionDate';

function HumanCompatibility() {
  const [numbersOne, setNumbersOne] = useState([]);
  const [numbersTwo, setNumbersTwo] = useState([]);
  const [dateOne, setDateOne] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [dateTwo, setDateTwo] = useState({
    day: '',
    month: '',
    year: '',
  });

  // useEffect(() => {
  //   const num1 = JSON.parse(localStorage.getItem("numbersOne"));
  //   const num2 = JSON.parse(localStorage.getItem("numbersTwo"));
  //   setNumbersOne(num1);
  //   setNumbersTwo(num2);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("numbersOne", JSON.stringify(numbersOne));
  //   localStorage.setItem("numbersTwo", JSON.stringify(numbersTwo));
  // }, [numbersOne, numbersTwo]);

  const numbersThree = additionDate(numbersOne, numbersTwo);
  const numbersFour = additionDate(numbersThree, numbersOne);
  const numbersFive = additionDate(numbersThree, numbersTwo);

  const handleChangeOne = (event) => {
    const { name, value } = event.target;
    setDateOne((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeTwo = (event) => {
    const { name, value } = event.target;
    setDateTwo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitOne = (event) => {
    // event.preventDefault();
    if (
      !dateOne.day ||
      !dateOne.month ||
      !dateOne.year ||
      !dateTwo.day ||
      !dateTwo.month ||
      !dateTwo.year
    )
      return;
    const dateOfBirthday = Object.values(dateOne);
    const calculatedArray = calculate(dateOfBirthday);
    setNumbersOne(calculatedArray);
  };
  const handleSubmitTwo = (event) => {
    // event.preventDefault();
    if (
      !dateTwo.day ||
      !dateTwo.month ||
      !dateTwo.year ||
      !dateOne.day ||
      !dateOne.month ||
      !dateOne.year
    )
      return;
    const dateOfBirthday = Object.values(dateTwo);
    const calculatedArray = calculate(dateOfBirthday);
    setNumbersTwo(calculatedArray);
  };
  const handleAllSubmit = () => {
    handleSubmitOne();
    handleSubmitTwo();
  };

  const clearLocalStorageForm = () => {
    localStorage.removeItem('numbersOne');
    localStorage.removeItem('numbersTwo');
  };

  return (
    <div className={style.container}>
      <div className={style.date_block}>
        <FormDate
          handleChange={handleChangeOne}
          handleSubmit={handleSubmitOne}
          date={dateOne}
        />
        <FormDate
          handleChange={handleChangeTwo}
          handleSubmit={handleSubmitTwo}
          date={dateTwo}
        />
        <button type="button" onClick={handleAllSubmit}>
          расчитать
        </button>
        {/* <button type="button" onClick={clearLocalStorageForm}>
          очистить
        </button> */}
      </div>
      <div className={style.dateOne}>
        <span className={style.dataofbirhday}>
          {dateOne.day && dateOne.month && dateOne.year
            ? `${dateOne.day}.${dateOne.month}.${dateOne.year}`
            : 'дата рождения'}
        </span>
        <Table numbers={numbersOne} />
      </div>
      <div className={style.dateTwo}>
        <span className={style.dataofbirhday}>
          {dateTwo.day && dateTwo.month && dateTwo.year
            ? `${dateTwo.day}.${dateTwo.month}.${dateTwo.year}`
            : 'дата рождения'}
        </span>
        <Table numbers={numbersTwo} />
      </div>
      <div className={style.dateThree}>
        <span className={style.dataofbirhday}>
          {dateOne.day &&
          dateOne.month &&
          dateOne.year &&
          dateTwo.day &&
          dateTwo.month &&
          dateTwo.year
            ? `${dateOne.day}.${dateOne.month}.${dateOne.year} + ${dateTwo.day}.${dateTwo.month}.${dateTwo.year}`
            : 'дата рождения'}
        </span>
        <Table numbers={numbersThree} />
      </div>
      <div className={style.dateFour}>
        <span className={style.dataofbirhday}>
          {dateOne.day &&
          dateOne.month &&
          dateOne.year &&
          dateTwo.day &&
          dateTwo.month &&
          dateTwo.year
            ? `( ${dateOne.day}.${dateOne.month}.${dateOne.year}+${dateTwo.day}.${dateTwo.month}.${dateTwo.year} ) + ${dateOne.day}.${dateOne.month}.${dateOne.year}`
            : 'дата рождения'}
        </span>
        <Table numbers={numbersFour} />
      </div>
      <div className={style.dateFive}>
        <span className={style.dataofbirhday}>
          {dateOne.day &&
          dateOne.month &&
          dateOne.year &&
          dateTwo.day &&
          dateTwo.month &&
          dateTwo.year
            ? `( ${dateOne.day}.${dateOne.month}.${dateOne.year}+${dateTwo.day}.${dateTwo.month}.${dateTwo.year} ) + ${dateTwo.day}.${dateTwo.month}.${dateTwo.year}`
            : 'дата рождения'}
        </span>
        <Table numbers={numbersFive} />
      </div>
    </div>
  );
}

export default HumanCompatibility;
