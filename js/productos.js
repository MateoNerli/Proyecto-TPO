const { createApp } = Vue;
createApp({
  data() {
    return {
      productos: [],
      url: "https://mateonerli.pythonanywhere.com/productos",
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      tipo: "",
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
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
          Swal.fire({
            title: "¿Estás seguro de eliminar el registro?",
            text: "No podrás revertirlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true,
          });
          location.reload(); // recarga el json luego de eliminado el registro
        });
    },
    grabar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        descripcion: this.descripcion,
        imagen: this.imagen,
        tipo: this.tipo,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto grabado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.href = "./productos.html"; // recarga productos.html
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al grabar el producto",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
