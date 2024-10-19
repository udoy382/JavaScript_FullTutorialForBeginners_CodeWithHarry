// Searching the DOM #36


let ctitle =  document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"


let ctext = document.getElementById("first-card-txt")
ctext.style.color = "yellow"


let ctitles = document.querySelectorAll(".card-title")
ctitles[1].style.color= "blue"
ctitles[2].style.color= "tomato"
console.log(ctitles)


document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"


console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))