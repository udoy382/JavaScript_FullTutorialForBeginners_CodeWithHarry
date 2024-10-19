// JavaScript Practice Set 8 #49

/*
document.getElementById("google").addEventListener("click", function () {
  window.location = "https://www.google.com";
  window.focus();
});
*/


/*
setInterval(async function() {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 3000);
*/


setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 1000)