/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

let jonSnowHealth = 50;
let jonSnowDefense = 10;

// if(jonSnowAttack . jamieLannisterAttack){
//     console.log("Jon Snow has a greater attack power than Jamie Lannister");
// else if(jonSnowAttack < jamieLannisterAttack){"Jamie Lannister has a greater attack power than Jon Snow"}
// } else {
//     console.log("Jon and Jamie have the same attack level")
// }

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log("Jon Snow has succumbed to his injuries and died");
} else {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon has ${jonSnowHealth} health`);
}

if (jonSnowHealth + 50 >= 100)
  console.log(`Jon cannot use a health pack right now`);
else {
  console.log(
    `Jon used a health pack and now has ${jonSnowHealth + 50} health`
  );
}

// let coinLandsHeads = false;

// if (coinLandsHeads) {
//   console.log("The fight continues!");
// } else {
//   console.log("Jon is allowed to run away");
// }
