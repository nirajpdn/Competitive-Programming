const GetCentury = (year) => Math.ceil(year / 100);

console.log(GetCentury(19)); // 1
console.log(GetCentury(1900)); // 19
console.log(GetCentury(1901)); // 20
console.log(GetCentury(2000)); // 20
console.log(GetCentury(2020)); // 21
