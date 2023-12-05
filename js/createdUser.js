const { createApp } = Vue;

createApp({
  data() {
    return {
      usuarios: [],
      url: "https://mateonerli.pythonanywhere.com/users",
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      nombre: "",
      apellido: "",
      user: "",
      email: "",
      password: "",
      role: 1,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(id) {
      const url = this.url + "/" + id;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          alert("Registro Eliminado");
          location.reload(); // recarga el json luego de eliminado el registro
        });
    },
    grabar() {
      let usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        user: this.user,
        email: this.email,
        password: this.password,
      };
      // console.log(usuario);
      var options = {
        body: JSON.stringify(usuario),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "../view/login.html";
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    editar(id) {
      const url = this.url + "/" + id;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.id = data.id;
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.user = data.password2;
          this.email = data.email;
          this.role = data.role;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
