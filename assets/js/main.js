var state = false;
function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    state = false;
    document.getElementById("eye").style.color = "black";
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "blue";
    state = true;
  }
}
