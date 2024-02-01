
let work = document.getElementById("work");
let list = document.querySelector(".qualific-list");
const massCards = [
   {
    name: "Web Design",
    univer:"Spain-Institute",
    data:"2014-2017",
    number:"20",
    text:"Completed projects",
  },
   {
    name: "Web Development",
    univer:"Peru-Institute",
    data:"2017-2019",
    number:"4",
    text:"Companies worked",
  },
   {
    name: "Master UI/ UX",
    univer:"Peru-Istitute",
    data:"2019-2021",
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
for (let i = 0; i < massCards.length; i++) {
  console.log(massCards[i]);
  list.insertAdjacentHTML("afterbegin",` <article class="info-list-card">
  <div class="info-list-card-bottom">
  <h5>${massCards[i].name}</h5>
  <h1>${massCards[i].name}</h1>
</div>
</article>`);
}
console.log(list);

work.onclick = function () {

};
