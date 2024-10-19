// Introduction to Callbacks #52

// Syncronous Programming :
/*
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old has " + c + " favorite color.");
*/


// Asyncronous Programming :
/*
console.log("Start")
setTimeout(function() {
    console.log("Hey I am good!");
}, 3000)
console.log("End")
*/


// Callbacks :
function loadScript(scr, callback){
    let script = document.createElement("script");
    script.src = scr;
    script.onload = function() {
        console.log("Loaded script with SRC: " + scr);
        callback();
    }
    document.body.appendChild(script);
}

function hello(){
    alert("Hello World!")
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello);
