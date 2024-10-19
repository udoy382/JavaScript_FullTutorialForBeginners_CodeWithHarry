// Chapter 7 - Practice Set #38

// Q1

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "pink";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "yellow";



Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "red";
});
