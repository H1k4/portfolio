
let work = document.getElementById("work");
let list = document.querySelector(".qualific-list");
const massCards = [
   {
    name: "programmist",
    univer:"Spain",
    data:"20",
  },
   {
    name: "vbgggf",
    univer:"Srdf",
    data:"2045",
  },
   {
    name: "vbgggf",
    univer:"Srdf",
    data:"2045",
  },
];
for (let i = 0; i < massCards.length; i++) {
  console.log(massCards[i]);
  list.insertAdjacentHTML("afterbegin",` <article class="qualific-item">
  <h5>${massCards[i].name}</h5>
  <div class="qualific-item-bottom">
    <h5>${massCards[i].univer}</h5>
    <div class="qualific-item-data">
      <img src="./assets/images/data.svg" alt="">
    <h4>${massCards[i].data}</h4>
  </article>`);
}
console.log(list);

work.onclick = function () {

};
