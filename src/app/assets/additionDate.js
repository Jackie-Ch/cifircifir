export function additionDate(firstArr, secondArr) {
  const newarr = firstArr.map((elem, index) => elem + secondArr[index]);
  const supernew = newarr.map((elem) => {
    if (elem > 22) {
      return elem - 22;
    } else {
      return elem;
    }
  });
  return supernew;
}
