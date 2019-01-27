let modal = document.getElementById('secret-modal');

let btn = document.getElementById('jackalope');

let logo =
document.getElementsByClassName("logo")[0];

let hvlogo =
document.getElementsByClassName("hover-logo")[0];

let span = document.getElementsByClassName("close")[0];

let img = document.getElementById('it-me');

btn.onmouseover = function() {
  logo.style.display = "none";
  hvlogo.style.display = "block";
}

btn.onmouseleave = function() {
  logo.style.display = "block";
  hvlogo.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "block";
  img.style.zIndex = "0";

}

span.onclick = function() {
  modal.style.display = "none";
  img.style.zIndex = "1";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    img.style.zIndex = "1";
  }
}
