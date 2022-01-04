let counter = 0
let intervals = 100

const myInterval = setInterval( () => {
  if (counter < 5) {
    console.log(`Hello World. ${intervals}`)
    counter++
  } else {
    counter = 0
    intervals = intervals + 100
  }
}, intervals)

"outter interval ++ms"
  "1, 2, 3, 4, 5"
