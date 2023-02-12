const GetCentury = (year) => {
  if (year - 100 <= 0) return 1;
  else if (year % 100 === 0) return year / 100;
  else return Math.ceil(year / 100); // or you can use Math.floor(year) + 1
};

console.log(GetCentury(19)); // 1
console.log(GetCentury(1900)); // 19
console.log(GetCentury(1901)); // 20
console.log(GetCentury(2000)); // 20
console.log(GetCentury(2020)); // 21
