
let h1 = document.getElementsByTagName("h1");
console.log(h1);
let h2Mass = document.getElementsByTagName("h3");
console.log(h2Mass);
h2Mass[0].innerText = "CalaMaleikum";
let classElem = document.getElementsByClassName("header-menu-item");
classElem[classElem.length - 1].innerHTML = "ABOBA";
let work = document.getElementById("work");
let education = document.getElementById("education");
console.log(work, education);
let Blyad = document.querySelector(".header-menu-item");
console.log(Blyad);
work.style.bColor = "rgba(75,130,200)";
work.onclick = function () {
    education.style.display = "flex";
    console.log(this);
};
education.onclick = () => {
    console.log(this);
};