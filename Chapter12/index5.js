// Closures in javaScript #90

/*
message = "Good Global!"

function hello1(){
    message = "Good Morning!"

    // {
    //     let message = "Good Afternoon"
    //     console.log("Hello 1 " + message)
    // }
    // console.log(message)
    

    console.log("Hello 1 " + message)


    let c = function hello2(){
        console.log("I am c " + message)
    }
    return c
}


// hello1()

c = hello1()
c()
*/

// ------------------------

/*
function init() {
  var name = "Mozilla"; // name is a local variable created by init

  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }

  name = "Udoy";
  return displayName;
}

let c = init();
c();
*/

// ------------------------

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
    //   let a = 2;
      console.log(a);
      const z = () => {
        let a = 3;
        console.log(a);
      };

      z();
    };

    a = 999
    y();
  };

  //   x();

  return x;
}


let a = returnFunc()
a()