const number = '1234-5678-9109-9000';
const len = number.length;
const notToMaskUsingSlice = number.slice(-4).padStart(len,"X");
console.log(notToMaskUsingSlice)



const toMaskBeginning = number.slice(0,4).padEnd(len,"X");
console.log(toMaskBeginning)