// Print "Hello World"
// Every second
// And stop after 5 times
let counter = 0

function sayHello() {
  if (counter == 5) {
    console.log("Done")
    clearInterval(hiInterval)
  } else {
  console.log("Hello World")
  counter++    
  }
}
let hiInterval = setInterval(sayHello, 1000)
// After 5 times. Print "Done" and let Node exit.
