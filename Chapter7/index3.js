// Element only Nabigation #34


const changeBgRed = () => {
    document.body.firstElementChild.style.background = "green"
}


let b = document.body;

console.log("First child of b is: ", b.firstChild);
console.log("First element child of b is: ", b.firstElementChild);
console.log("Last element child of b is: ", b.lastElementChild);
