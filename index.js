// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
  var x = document.querySelector("#nested")
  return x.querySelector(".target")
  //getElementById("nested").querySelector(".target")
}


// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  var y = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < y.length; i++) {
    y[i].innerHTML = (i + 1).toString();
  }
  return y
}


//