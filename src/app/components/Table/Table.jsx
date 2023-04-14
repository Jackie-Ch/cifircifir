import React from 'react';
import { convertToRoman } from '../../assets/converToRoman';
import style from './Table.module.css';

function Table({ numbers }) {
  const romanArr = numbers.map((item) => convertToRoman(item));
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <span className={style.d4}></span>
            <span className={style.d15}></span>
            <span className={style.d16}></span>
          </td>
          <td></td>
          <td>{romanArr[12 - 1]}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>{romanArr[10 - 1]}</td>
          <td></td>
          <td>{romanArr[11 - 1]}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{romanArr[1 - 1]}</td>
          <td></td>
          <td>{romanArr[2 - 1]}</td>
          <td></td>
          <td>{romanArr[4 - 1]}</td>
          <td></td>
          <td>{romanArr[7 - 1]}</td>
        </tr>

        <tr>
          <td></td>
          <td>{romanArr[3 - 1]}</td>
          <td></td>
          <td>{romanArr[5 - 1]}</td>
          <td></td>
          <td>{romanArr[8 - 1]}</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>{romanArr[6 - 1]}</td>
          <td></td>
          <td>{romanArr[9 - 1]}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
