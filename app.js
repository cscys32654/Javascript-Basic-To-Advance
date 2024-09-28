let str = "i love coding";
//trim method
str.trim();
//lowercase method
console.log(str.toLowerCase());
//uppercase method
console.log(str.toUpperCase());
//indexOf method
console.log(str.indexOf("ove"));
//slicing method
console.log(str.slice(-8));
//replace method
console.log(str.replace("coding","programming"));
//repeat method
console.log(str.repeat(5));
//odd num in backward 
for(let i=15 ; i>= 1; i = i-2){
    console.log(i);
    }
//even num
let evenno = "even no:";
console.log(evenno);
for(let i=2;i<=10;i = i+2){
    console.log(i);
}
//multiplication table of 5
for(let i = 5; i<=50 ; i=i+5){
    console.log(i);
}
//user ip of table
let str1 = "table----";
console.log(str1);
let a = prompt("write a number");
a = parseInt(a);
for(i=a;i<=a*10;i=i+a){
    console.log(i);
}

