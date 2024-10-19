// Error Handling: try and catch #60

setTimeout(() => {
  console.log("Hacking wifi... Please wait...");
}, 1000);

setTimeout(() => {
  console.log("Fetching username and password...");
}, 2000);

try {
  setTimeout(() => {
    try {
      console.log(rahul);
    } catch (error) {
      console.log("I am error inside setTimeout");
    }
  }, 100);
} catch (error) {
  console.log("Balle balle");
}

setTimeout(() => {
  console.log("Hacking Rahul social media account...");
}, 3000);
