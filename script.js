let modal = document.getElementById('secret-modal');

let btn = document.getElementById('jackalope');

let span = document.getElementsByClassName("close")[0];

let img = document.getElementById('it-me');

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
