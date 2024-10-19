// Async / Await in JavaScript #59

async function udoy() {
  let sylhetWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("26 deg");
    }, 2000);
  });

  let dhakaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("33 deg");
    }, 4000);
  });

//   sylhetWeather.then(alert)
//   dhakaWeather.then(alert)

console.log("Fetching sylhet weather, please wait...")
let sylhetW = await sylhetWeather
console.log("Fetching dhaka weather, please wait...")
let dhakaW = await dhakaWeather
console.log("Fetching Sylhet weather: " + sylhetW + " Dhaka weather: " + dhakaW)
return [sylhetW, dhakaW]
}

const main1 = async () => {
    console.log("Welocme to weather control room")
    let a = await udoy()
    console.log(a)
    // a.then((value)=>{
    //     console.log(value)
    // })
}

main1()