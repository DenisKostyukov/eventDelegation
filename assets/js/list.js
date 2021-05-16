'use strict'
const subList = document.querySelectorAll(".subList");
const list = document.querySelector(".list");
function addHiddenToSubList(){
  subList.forEach((item) => {
    item.hidden = true
  })
}
addHiddenToSubList()

list.addEventListener("click", listListener)

function listListener({
  target
}) {
  if (target.firstElementChild.hidden) {
    addHiddenToSubList()
    target.firstElementChild.hidden = false;
  } else {
    target.firstElementChild.hidden = true;
  }

}



