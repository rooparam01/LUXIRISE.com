//Pre loader functionally
let loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
//End pre loader functionally
let gifts = document.getElementById("gifts");
let giftso = document.querySelector(".giftsoptions");
gifts.addEventListener("mouseover", () => {
  giftso.style.display = "flex";
  giftso.style.background = "#fff";
  giftso.style.height = "100vh";
  setTimeout(() => {
    giftso.style.height = "0";
  }, 1500);
});

//start nav hover functionally
let newinEl = document.getElementById("newin");
let newindivEl = document.querySelector(".newin");

newinEl.addEventListener("mouseover", () => {
  newindivEl.style.display = "flex";
  newindivEl.style.background = "#fff";
  newindivEl.style.height = "100vh";
  setTimeout(() => {
    newindivEl.style.height = "0";
  }, 1500);
});

//End nav hover functionally
