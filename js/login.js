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

        const data = await response.json();

        if (data.status === "Inicio de sesión exitoso") {
          localStorage.setItem("user", JSON.stringify(data));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.href = "../index.html";
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al iniciar sesión",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al iniciar sesión",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
}).mount("#app");
