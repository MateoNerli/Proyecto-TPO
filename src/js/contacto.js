const form = document.querySelector("#form");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(this);
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

form.addEventListener("submit", handleSubmit);
