console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4); // producto_update.html?id=1
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      id: null,
      nombre: "",
      imagen: "",
      descripcion: 0,
      precio: 0,
      tipo: "",
      url: "https://mateonerli.pythonanywhere.com/productos/" + id,
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
          this.imagen = data.imagen;
          this.descripcion = data.descripcion;
          this.precio = data.precio;
          this.tipo = data.tipo;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        descripcion: this.descripcion,
        imagen: this.imagen,
        tipo: this.tipo,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto modificado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.href = "./productos.html"; // navega a productos.html
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al modificar el producto",
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
