const app = Vue.createApp({
    data() {
        return {
            miarreglo: [],
            nombre: '',
            genero: '',
            plataforma: '',
            precio: ''
        }
    },
    methods: {
        agregarJuego() {
            const nuevoJuego = {
                nombre: this.nombre,
                genero: this.genero,
                plataforma: this.plataforma,
                precio: this.precio
            }
            this.miarreglo.push(nuevoJuego);
            this.nombre = '';
            this.genero = '';
            this.plataforma = '';
            this.precio = '';
        }
    }
})

app.mount('#myApp2');