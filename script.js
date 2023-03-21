// buisness logic
function liters(gallons){
  return gallons * (3.785)
}

// user interface logic
const gallons = parseInt(prompt("Enter amount of gallons to convert to liters:"));

window.alert(liters(gallons));