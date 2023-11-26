const dropBox = document.querySelector("#dropbox");
const container = document.querySelector("#dropbox__container");
const img_elements = document.querySelectorAll("img");
const array1 = [dropBox, container];

function render() {
  const chooseTexts = document.querySelectorAll(".choose-text");
  const emptyCards = document.querySelectorAll(".gallery__item-empty");
  const array = [chooseTexts, emptyCards];

  img_elements.forEach(element => {
    element.draggable = false
  })

  array.forEach((array_item) => {
    array_item.forEach((el) => {
      el.addEventListener("click", () => {
        dropBox.style.display = "flex";
      });
    });
  });
}

array1.forEach((element) => {
  element.addEventListener("click", () => {
    dropBox.style.display = "none";
  });
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    emptyCards[0].src = e.dataTransfer.files[0].name;
    dropBox.style.display = "none";
  });
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  element.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });
  element.addEventListener("dragend", (e) => {
    e.preventDefault();
  });
});
let dragSrcEl;

function dragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
  render();
  return false;
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  render();
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  render();
  return false;
}

function dragEnd() {
  const listItems = document.querySelectorAll(".gallery__item");
  [].forEach.call(listItems, function(item) {
    item.draggable = "true";
  });
  render();
  return false;
}

function addEventsDragAndDrop(el) {
  el.addEventListener("dragstart", dragStart, false);
  el.addEventListener("dragover", dragOver, false);
  el.addEventListener("drop", dragDrop, false);
  el.addEventListener("dragend", dragEnd, false);
}

const listItems = document.querySelectorAll(".gallery__item");
[].forEach.call(listItems, function(item) {
  addEventsDragAndDrop(item);
});

render();
