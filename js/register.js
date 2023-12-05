function togglePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function togglePasswordCon() {
  var x = document.getElementById("passCon");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
