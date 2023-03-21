// buisness logic
function milliliters(tsp,tbsp,cups) {
  return tsp * (4.929) + tbsp * (14.787) + cups * (236.6)
}

// user interface logic
const tsp = parseInt(prompt("Enter teaspoons:"));
const tbsp = parseInt(prompt("Enter tablespoons:"));
const cups = parseInt(prompt("Enter cups:"));

window.alert(milliliters(tsp,tbsp,cups));