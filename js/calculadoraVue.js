
const app = Vue.createApp({
  data() {
    return {
      resultado: ''

    }
  },
  methods: {
    entrada: function (valor) {
      this.resultado += valor;
    },
    limpiarEntrada: function () {
      this.resultado = '';
    },
    calculoResultado: function () {
      this.resultado = eval(this.resultado);
    }
  }
})
app.mount('#app');;

/*new Vue({
    el: '#app',
    data: {
      resultado: ''
    },
    methods: {
      entrada: function(valor) {
        this.resultado += valor;
      },
      limpiarEntrada: function() {
        this.resultado = '';
      },
      calculoResultado: function() {
        this.resultado = eval(this.resultado);
      }
    }
  });
 */
