// Callback Hell & Pyramindof Doom #53

// Callbacks :
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log("Error");
    return;
  }
  alert("Hello World! " + src);
}

function sendEmergencyMessageToCeo(){
    console.log("Hey CEO, get up there is a problem on this program.")
}

function goodmorning(error, src) {
  if (error) {
    console.log(error);
    sendEmergencyMessageToCeo();
    return;
  }
  alert("Good morning " + src);
}


// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello);
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", goodmorning);

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
});