//PQ1
console.log("PQ1->->");
function poem(){
    console.log("Boats sail on the rivers");
        console.log("And ships sail on the seas");
        console.log("But clouds that sail across the sky");
        console.log("Are prettier far than these");
}
poem();
// PQ2
console.log("PQ2->->");
function dice(){
    let max = Math.floor(Math.random() * 6 + 1);
    console.log(max);
}
dice();
console.log("PQ3->->");
function average(a1,a2,a3){
    let a = ((a1+a2+a3)/3);
    console.log(a);
}
average(26,5,2);
//PQ4
console.log("PQ4->->");
function table(n1,r){
    for(let i =1; i<=10; i++){
         r = n1 * i;  
         console.log(`${n1}` +"*"+`${i} `+"=" + `${r}`);     
    }
    
    
}
table(2);
//PQ5
console.log("PQ5->->");
function getsum(n){
    let s = 0;
    for(let i =1; i<=n; i++){
        s= s + i;
        
        
    }
    return s;

}
getsum(5);
//PQ6
console.log("PQ6->->");
let str = ["i","am","so","tired"];
function concatenate(str){
    let ans ="";
    for(let i=0; i < str.length; i++){
        ans += str[i];
    }
    return ans;
}
console.log(concatenate(str));
//PQ7
console.log("PQ7->->");
let greet = "hello";
function changegreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
console.log(greet);
changegreet();
//PQ8
console.log("PQ8");
let arr = [1,5,6,7,2,9,10,8];
let num = 5;
function printLargestNo(arr,num){
    for(let i=0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        
        }
    }


}
printLargestNo(arr,num);

//PQ9
console.log("PQ9");
let string = "abcdcnacnsvgaa";

function uniqueExtract(string){
    let temp = "";
for(let i = 0; i < string.length; i++){
    let curr = string[i];
    if(temp.indexOf(curr) == -1){
        temp += curr;
}

}
console.log( temp);

}
uniqueExtract(string);


//PQ10
console.log("PQ10");
let temp = 0;






