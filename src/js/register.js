function togglePassword() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("eye").className = "fa fa-eye-slash";
  } else {
    x.type = "password";
    document.getElementById("eye").className = "fa fa-eye";
  }
}

function togglePasswordCon() {
  var x = document.getElementById("passCon");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("eye").className = "fa fa-eye-slash";
  } else {
    x.type = "password";
    document.getElementById("eye").className = "fa fa-eye";
  }
}
