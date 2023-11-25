function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please enter valid values for weight, height, and age.");
    return;
  }

  // Formula for calculating basal metabolic rate (BMR)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  document.getElementById(
    "result"
  ).innerHTML = `Your estimated daily calorie needs: <b>${bmr} calories</b>`;
}
