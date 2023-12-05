const { createApp } = Vue;

createApp({
  data() {
    return {
      username: "",
      password: "",
      users: [],
    };
  },
  mounted() {
    // Aquí realizas la solicitud para obtener los usuarios desde la API
    fetch("https://mateonerli.pythonanywhere.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Asignas los usuarios obtenidos a la propiedad 'users'
        console.log(data);
        this.users = data;
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  },
  methods: {
    async login() {
      try {
        const response = await fetch(
          "https://mateonerli.pythonanywhere.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: this.username,
              password: this.password,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error al iniciar sesión");
        }

        const data = await response.text();

        if (data === "Inicio de sesión exitoso") {
          alert("Inicio de sesión exitoso");
          window.location.href = "../index.html";
        } else {
          alert("Nombre de usuario o contraseña incorrectos");
        }
      } catch (error) {
        console.error(error);
        alert("Error al iniciar sesión");
      }
    },
  },
}).mount("#app");
