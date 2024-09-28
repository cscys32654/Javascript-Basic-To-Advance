const max = prompt("please enter a max number");
const random = Math.floor(Math.random() * max) + 1;
console.log(max);
let guess=prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you won");
        break;
    }elseif(guess < random){
        guess = prompt("you guess largest value in comparison to random val");
    }else
    {
        guess = prompt("you guess small value in comparison to random val");
    }

}