// Fetch API #66


let p = fetch("https://goweather.herokuapp.com/weather/Ny") // API doesn't work

p.then((value)=>{
    return value.json
}).then((value)=>{
    confirm.log(value)
})