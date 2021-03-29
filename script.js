//When you press enter, click on the add button
var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) document.getElementById("myBtn").click();
});

//Congrats Message when all task done
var parent = document.getElementById("myUL");
var nodesSameClass = parent.getElementsByClassName("checked");
var task = document.getElementsByTagName("LI");
var nbTask = task.length;
document.querySelector("ul").addEventListener("click", function () {
  if (nodesSameClass.length + 1 === nbTask) {
    alert("good job!\nYou made it!");
    for (var i = 0; i < task.length; i++) {
      task[i].classList.remove("checked");
    }
  }
});

//Shortcut section
document.onkeyup = function (e) {
  var els = document.querySelectorAll(".checked");
  var close = document.getElementsByClassName("close");

  //UnCheck all when you press space
  if (e.ctrlKey && e.which == 32) {
    for (var i = 0; i < els.length; i++) {
      els[i].click();
    }
    //Remove all if you press backspace
  } else if (e.ctrlKey && e.which == 8) {
    for (var i = 0; i < close.length; i++) {
      close[i].click();
    }
  }
};

// create close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// "checked" symbol
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "hvr-float hvr-bounce-out";
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("The text fiel is empty");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
