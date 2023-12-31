console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4); // producto_update.html?id=1
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      id: null,
      nombre: "",
      apellido: "",
      user: "",
      email: "",
      password: "",
      role: 1,
      url: "https://mateonerli.pythonanywhere.com/users/" + id,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = data.id;
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.user = data.user;
          this.email = data.email;
          this.role = data.role;
          this.password = data.password;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    editar() {
      let usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        user: this.user,
        email: this.email,
        role: this.role,
        password: this.password,
      };
      var options = {
        body: JSON.stringify(usuario),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario modificado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });

          window.location.href = "./usuarios.html"; // navega a productos.html
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
          });
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
