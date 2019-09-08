// for (i=0; i<8; i++){
//     console.log(i);
// }

// let target = 6
// let currentnumber = 1
// while (currentnumber !=target){
//     console.log(currentnumber)
//     currentnumber=(Math.floor(Math.random()*12)) 
// console.log(currentnumber)
// }





// let number = 1
// {console.log(number+4)}

let dice1 =((Math.floor(Math.random()*6))+1);
{console.log(`Dice1 = ${dice1}`);
let dice2 =((Math.floor(Math.random()*6))+1)
{console.log(`Dice2 = ${dice2}`)}
let total=(dice1+dice2)
{console.log(`Total= ${total}`)}
const result = () => {
if (total>11){
console.log("WINNER")}}
    if (total>7 && total<12){
    console.log("Good")}
       if (total>3 && total<8){
        console.log("Could be worse")}
          if (total<4){
            console.log("Bad luck")}
        //  else {console.log("Bad luck")}
 result () }

