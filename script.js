

let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (input.value === "") {
    alert("Enter some text here");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    input.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    savedata();
  }
}

function remove() {
  this.parentElement.remove();
  savedata();
}

function savedata() {
  let items = [];
  let itemList = text.querySelectorAll("ul");
  
  itemList.forEach((item) => {
    items.push(item.innerHTML);
  });

  localStorage.setItem("data", JSON.stringify (items));  
}


function showdata() {
  let storedData = localStorage.getItem("data");

  if (storedData) {
    let items = JSON.parse(storedData);
    text.innerHTML = "";

    items.forEach((item) => {
      let newEle = document.createElement("ul");
      newEle.innerHTML = item;
      text.appendChild(newEle);
      newEle.querySelector("i").addEventListener("click", remove);
    });
  }
}

showdata();


