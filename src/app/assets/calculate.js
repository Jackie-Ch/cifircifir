export function calculate(data) {
  const [day, month, year] = data;
  let position1 = Number(day);
  if (position1 > 22) {
    position1 = position1 - 22;
  }
  const position2 = Number(month);
  let position3 = position1 + position2;
  position3 = position3 > 22 ? position3 - 22 : position3;
  let position4 = year.split("").reduce((acc, current) => {
    return acc + Number(current);
  }, 0);
  if (position4 > 22) {
    position4 = position4 - 22;
  }
  let position5 = position2 + position4;
  if (position5 > 22) {
    position5 = position5 - 22;
  }
  let position6 = position3 + position5;
  if (position6 > 22) {
    position6 = position6 - 22;
  }
  let position7 = position3 + position4;
  if (position7 > 22) {
    position7 = position7 - 22;
  }
  let position8 = position2 + position6;
  if (position8 > 22) {
    position8 = position8 - 22;
  }
  let position9 = position1 + position4;
  if (position9 > 22) {
    position9 = position9 - 22;
  }
  let position10 = position1 - position2;
  if (position10 <= 0) {
    position10 = position10 + 22;
  }
  let position11 = position2 - position4;
  if (position11 <= 0) {
    position11 = position11 + 22;
  }
  let position12 = position10 - position11;
  if (position12 <= 0) {
    position12 = position12 + 22;
  }
  return [
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    position10,
    position11,
    position12,
  ];
}
