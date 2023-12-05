const { createApp } = Vue;
createApp({
  data() {
    return {
      url: "https://mateonerli.pythonanywhere.com/productos",
      error: false,
      datosFinales: [],
      datos: [],
      tipos: [],
      tipo: "",
    };
  },
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data;
          this.datosFinales = this.datos;

          for (elemento of this.datos) {
            if (this.tipos.indexOf(elemento.tipo) < 0)
              this.tipos.push(elemento.tipo);
          }
        });
    },
    filtarDatos() {
      const tipoSeleccionado = document.querySelector("#tipo").value;

      if (tipoSeleccionado === "todos") {
        this.datosFinales = this.datos;
      } else {
        this.datosFinales = this.datos.filter(
          (elemento) => elemento.tipo === tipoSeleccionado
        );
      }
    },
    ordenarDatos() {
      if (document.querySelector("#ordenNombre").checked)
        this.datosFinales.sort((a, b) =>
          a.nombre.toUpperCase() > b.nombre.toUpperCase() ? 1 : -1
        );
      else if (document.querySelector("#ordenTipo").checked)
        this.datosFinales.sort((a, b) =>
          a.tipo.toUpperCase() > b.tipo.toUpperCase() ? 1 : -1
        );
      else if (document.querySelector("#ordenPrecio").checked)
        this.datosFinales.sort((a, b) => a.precio - b.precio); //   > 1 intercambia,  <1 igual

      console.log(this.datosFinales);
    },
  },
  created() {
    this.fetchdata(this.url);
  },
}).mount("#app");
