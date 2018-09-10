function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var x = document.querySelector("#nested")
  return x.querySelector(".target")
  //getElementById("nested").querySelector(".target")
}

function increaseRankBy(n) {
  var y = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < y.length; i++) {
    y[i].innerHTML = (i + 1).toString();
  }
  return y
}

function deepestChild() {
  return document.getElementById("grand-node").querySelectorAll("div")[document.getElementById("grand-node").querySelectorAll("div").length - 1]
}