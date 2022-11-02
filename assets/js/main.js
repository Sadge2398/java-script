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


let form = document.getElementById('login-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  let username = document.getElementById('name')
  let password = document.getElementById('password')

  // min 4, max 32
  if(username.value == ''){
    alert('username cannot be empty!')
  }
  // min 8, max 64
  if (password.value == '') {
    alert('password cannot be empty!')
  }

})