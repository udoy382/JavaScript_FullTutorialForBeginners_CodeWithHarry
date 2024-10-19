// Chapter 10 - Practice Set #71

// Q1
let url = "https://kontests.net/api/v1/all";

let response = fetch(url);

response
  .then((v) => {
    return v.json();
  })
  .then((contest) => {
    ihtml = "";
    for (item in contest) {
      console.log(contest[item]);
      ihtml += `
        <div class="card" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p>Start at: ${contest[item].start_time} </p>
          <p>End at: ${contest[item].end_time} </p>
          <a href="${contest[item].url}" class="btn btn-primary">Visit Contests</a>
        </div>
      </div>
        `;
    }
    document.getElementById("cardContainer").innerHTML = ihtml;
  });

// Q2 [NOTES AP (REMINING QUESTION OF PRACTICE SET)]
/*
let a = localStorage.getItem("note");
alert("Your note is " + a);

let n = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", n);
}

let c = confirm("Do you want to delete your note");
if (c) {
  localStorage.removeItem("note");
}
*/