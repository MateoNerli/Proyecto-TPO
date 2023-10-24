const form = document.querySelector("#form");

// Función para validar un campo
function validateField(field, errorSpan) {
  const fieldName = field.name;
  const fieldValue = field.value.trim();
  let isValid = true;

  if (fieldValue === "") {
    field.style.borderColor = "red";
    errorSpan.style.display = "block";
    isValid = false;
  } else {
    field.style.borderColor = "";
    errorSpan.style.display = "none";
  }

  if (fieldName === "email" && !isValidEmail(fieldValue)) {
    field.style.borderColor = "red";
    isValid = false;
  }

  if (errorSpan) {
    errorSpan.style.display = isValid ? "none" : "block";
  }

  return isValid;
}

// Función para validar una dirección de correo electrónico
function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Función para mostrar una alerta si hay errores
function showAlert() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Por favor, complete todos los campos obligatorios y asegúrese de que el correo electrónico sea válido.",
  });
}

// Función para manejar el evento submit
async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(this);

  // Validar campos
  let hasErrors = false;
  formData.forEach((value, key) => {
    const input = this.querySelector(`[name="${key}"]`);

    const errorSpan = this.querySelector(`#${key}Error`);
    if (!validateField(input, errorSpan)) {
      hasErrors = true;
    }
  });

  if (hasErrors) {
    showAlert();
    return;
  }

  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    Swal.fire({
      icon: "success",
      title: "Gracias por contactarnos",
      text: "Pronto nos pondremos en contacto con usted.",
    });
  }
}

// Agregar validación onBlur a todos los campos
const formFields = form.querySelectorAll("input, textarea");
formFields.forEach((field) => {
  field.addEventListener("blur", function () {
    const errorSpan = form.querySelector(`#${field.name}Error`);
    validateField(field, errorSpan);
  });
});

form.addEventListener("submit", handleSubmit);
