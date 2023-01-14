//selectors
const rating =Array.from(document.querySelectorAll("input[type='radio']"));
const submitButton = document.getElementById("submit");
const actualRating = document.getElementById("actualRating");
const containers = document.getElementsByClassName("container");

let ratedValue = 0;

rating.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    ratedValue = Number(e.target.value);
    return ratedValue;
  });
});

console.log(actualRating.innerHTML);
actualRating.innerHTML = ratedValue;

submitButton.addEventListener("click", (e) => {
  containers[0].style.display = "none";
  containers[1].style.display = "block";
});
console.log(ratedValue);
