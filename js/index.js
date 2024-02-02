let work = document.getElementById("work");
let list = document.querySelector(".qualific-list");

const massCards = [
  {
    name: "Web Design",
    univer: "Spain-Institute",
    data: "2014-2017",
  },
  {
    name: "Web Development",
    univer: "Peru-Institute",
    data: "2017-2019",
  },
];

education.onclick = function () {
  list.innerHTML = "";
  education.style.color = "red";
  work.style.color = "unset";
  for (let i = 0; i < massCards.length; i++) {
    console.log(massCards[i]);
    list.insertAdjacentHTML(
      "afterbegin",
      ` <article class="qualific-item">
      <h5>${massCards[i].name}</h5>
      <div class="qualific-item-bottom">
      <h5>${massCards[i].univer}</h5>alt
      <div class="qualific-item-data">
      <img src="./assets/images/data.svg" alt="">
    <h4>${massCards[i].data}</h4>
    </div>
    </div>
    </article>`
    );
  }
};

work.onclick = function () {
  list.innerHTML = "";
  work.style.color = "red";
  education.style.color = "unset";
  for (let i = 0; i < massCards.length; i++) {
    console.log(massCards[i]);
    list.insertAdjacentHTML(
      "afterbegin",
      ` <article class="qualific-item">
      <h5>${massCards[i].name}</h5>
      <div class="qualific-item-bottom">
      <h5>${massCards[i].univer}</h5>
      <div class="qualific-item-data">
      <img src="./assets/images/data.svg" alt="">
      <h4>${massCards[i].data}</h4>
      </div>
      </div>
    </article>`
    );
  }
  console.log(list);
};
console.log(list);
