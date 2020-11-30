export default  {
    mounted: function() {
      this.saludo2()
    },
    methods : {
      saludo2 : function() {
        console.log('Hola desde el mixin mounted')
      }
    }
}