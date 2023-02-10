console.log("hiii");

//heart script
let redheart = document.querySelectorAll(".redheart");
for (let i = 0; i < redheart.length; i++) {
  redheart[i].addEventListener("click", () => {
    redheart[i].classList.toggle("text-white");
    redheart[i].classList.toggle("text-red-600");
    redheart[i].classList.toggle("fa-solid");
  });
}

//popup script
let filterBtn = document.getElementById("filterBtn");
let mobileFilterBtn = document.getElementById("mobileFilterBtn");
let submitBtn = document.getElementById("submitBtn");
let cancelBtn = document.getElementById("cancelBtn");
let filterPopupEl = document.getElementById("filterPopup");

filterBtn.addEventListener("click", () => {
  filterPopupEl.classList.add("filterPopupDisplay");
});
mobileFilterBtn.addEventListener("click", () => {
  filterPopupEl.classList.add("filterPopupDisplay");
});
submitBtn.addEventListener("click", () => {
  filterPopupEl.classList.remove("filterPopupDisplay");
});
cancelBtn.addEventListener("click", () => {
  filterPopupEl.classList.remove("filterPopupDisplay");
});
