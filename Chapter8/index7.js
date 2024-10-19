// Introduction to Browser Events #47

let a = document.getElementsByClassName("container")[0];

a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello World!";
};
