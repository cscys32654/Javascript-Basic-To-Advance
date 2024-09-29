//Calculate array average by arrow function
const arrAverage = (arr) => {
let total = 0;
for(let number in arr){
    total += number;
}
return total/arr.length;
};
 let arr = [1,2,3,4,5];
 console.log(arrAverage(arr));



 
 //ifEven() by arrow function
 const ifEven = (n) => (
    n % 2 == 0
 );