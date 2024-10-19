// Exercise 1 - Guess the Number #22


random_number = Math.floor((Math.random()) * 10) + 1
// console.log(random_number)

user = prompt("Enter your number");

guess = 0;

if (guess === 10) {
  console(`Your gussing nubmer is over, your guess number is ${guess}`);
  exit()
} else if (user < random_number) {
  console.log("Oops! Your guessing nubmer is less than random number.");
  guess++;
} else if (user > random) {
  console.log("Oops! Your gussing number is greater than random number.");
  guess++;
} else if (user == random_number) {
  console.log("Congratulation! You won the game!");
  console.log(
    `Your gussing number is ${guess} and random nubmer is ${random_number} and your guss number is ${user}`
  );
}
