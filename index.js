//Pre loader functionally
let loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
//End pre loader functionally
let gifts = document.querySelector(".gifts");
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
let newinEl = document.querySelector(".newin");
let newindivEl = document.querySelector(".newind");

newinEl.addEventListener("mouseover", () => {
  newindivEl.style.display = "flex";
  newindivEl.style.background = "#fff";
  newindivEl.style.height = "100vh";
  setTimeout(() => {
    newindivEl.style.height = "0";
  }, 1500);
});
//women hover

let womenEl = document.querySelector(".womenel");
let womendivEl = document.querySelector(".womennav");

womenEl.addEventListener("mouseover", () => {
  womendivEl.style.display = "flex";
  womendivEl.style.background = "#fff";
  womendivEl.style.height = "100vh";
  setTimeout(() => {
    womendivEl.style.height = "0";
  }, 1500);
});
let menEl = document.querySelector(".menel");
let mendivEl = document.querySelector(".mennav");

menEl.addEventListener("mouseover", () => {
  mendivEl.style.display = "flex";
  mendivEl.style.background = "#fff";
  mendivEl.style.height = "100vh";
  setTimeout(() => {
    mendivEl.style.height = "0";
  }, 1500);
});

let childrenEl = document.querySelector(".childrenel");
let childrendivEl = document.querySelector(".childrennav");

childrenEl.addEventListener("mouseover", () => {
  childrendivEl.style.display = "flex";
  childrendivEl.style.background = "#fff";
  childrendivEl.style.height = "100vh";
  setTimeout(() => {
    childrendivEl.style.height = "0";
  }, 1500);
});

let outwearEl = document.querySelector(".outwearel");
let outweardivEl = document.querySelector(".outwearnav");

outwearEl.addEventListener("mouseover", () => {
  outweardivEl.style.display = "flex";
  outweardivEl.style.background = "#fff";
  outweardivEl.style.height = "100vh";
  setTimeout(() => {
    outweardivEl.style.height = "0";
  }, 1500);
});

let bagEl = document.querySelector(".bagsel");
let bagdivEl = document.querySelector(".bagsnav");

bagEl.addEventListener("mouseover", () => {
  bagdivEl.style.display = "flex";
  bagdivEl.style.background = "#fff";
  bagdivEl.style.height = "100vh";
  setTimeout(() => {
    bagdivEl.style.height = "0";
  }, 1500);
});

let storiesEl = document.querySelector(".storiesel");
let storiesdivEl = document.querySelector(".storiesnav");

storiesEl.addEventListener("mouseover", () => {
  storiesdivEl.style.display = "flex";
  storiesdivEl.style.background = "#fff";
  storiesdivEl.style.height = "100vh";
  setTimeout(() => {
    storiesdivEl.style.height = "0";
  }, 1500);
});

let beyondEl = document.querySelector(".beyondel");
let beyonddivEl = document.querySelector(".beyondnav");

beyondEl.addEventListener("mouseover", () => {
  beyonddivEl.style.display = "flex";
  beyonddivEl.style.background = "#fff";
  beyonddivEl.style.height = "100vh";
  setTimeout(() => {
    beyonddivEl.style.height = "0";
  }, 1500);
});

//End nav hover functionally
//Start humberger fuctionally
let humiconEl = document.getElementById("humicon");
let humcontentEl = document.querySelector(".humbergercontent");
humiconEl.addEventListener("click", () => {
  humcontentEl.style.display = "block";
  humcontentEl.style.background = "#fff";
  humcontentEl.style.width = "250px";
});
humcontentEl.addEventListener("mouseleave", () => {
  humcontentEl.style.display = "none";
  humcontentEl.style.width = "0";
});

//End humberger functionally
