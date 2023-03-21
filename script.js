// buisness logic
function grams(ounces,pound) {
  return ounces * (28.35) + pounds * (453.6);
}

// user interface logic
const ounces = parseInt(prompt("Enter ounces:"));
const pounds = parseInt(prompt("Enter pounds:"));

window.alert(grams(ounces,pounds));