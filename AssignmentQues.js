/*let num = 10;
if(num % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}*/
/*let name = prompt("please enter your name");
let age = prompt("please enter your age");
alert(`${name} is ${age} years old`);*/

//Javascript Basics
//n element of an array
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);
//last n elemnts of an array
let arr1 = [7,9,0,-2];
let n1 = 3;
let ans1 = arr1.slice(arr1.length-n);
console.log(ans1);
//check string is blank or not 
let str = "1";
if(str.length == 0){
    console.log("string is blanked");
}
else{
    console.log("string is not blank");
}
//cehck the character are in lowercase
let str1 = "ApnaCollege";
let idx = 1;
if(str1[idx] == str1[idx].toLowerCase()){
    console.log("char is in lowercase");
    
}
else{
    console.log("char is not in lowercase");
}
//string 
let str2 = ("    please enter a string     ");
console.log(`original str = ${str2}`);
console.log(`string without spaces = ${str2.trim()}`);
//find element in array if exist or not
let arr2 = [10,5, 6,8,7,5];
let num = 10;
if(arr2.includes(num)){
    console.log("number is in array");
} 
else{
    console.log("number is not in array");
}
//Array Based Questions
let s = "Array Based Questions------------------------->>>>>>>>>";
console.log(s);
let a = [1,2,3,4,5,6,2,3];
  n = 2;
 for(let i=0; i<a.length; i++){
 if(a[i] == n){
    a.splice(i,1);
 }
}
console.log(a);

//2nd question
let num1 = 55556;
count = 0;
let copy = num1;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);
//3rd question
let num2 = 45658;
copy1 = num2;
let sum = 0;
while(copy1 > 0){
    digit = copy1 % 10;
        sum = sum + digit;
        copy1  = Math.floor(copy1/10);


}
console.log(sum);
//4th question
let n2 = 5;
let fac = 1;
for(let i =1 ; i<=n2; i++){
    fac *= i;
}
console.log(fac);
//largest element
let n3 =[1,5,8,9,16];
let largest = 0;
for(let i = 0; i<=n3.length; i++){
    if(n3[i] > largest){
        largest =n3[i];
}
}
console.log(largest);

//random numbers generating questions 
let max = "random no. b/w 1 to 6";
console.log(a);
let random = Math.floor(Math.random() * 6)+1;
