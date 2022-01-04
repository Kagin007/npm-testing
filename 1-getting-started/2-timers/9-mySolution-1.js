const hiInterval = step => 
  setTimeout(() => {
    console.log(`Hello World. ${step}`)
    hiInterval(step + 1)
  }, step * 1000)

hiInterval(1)
