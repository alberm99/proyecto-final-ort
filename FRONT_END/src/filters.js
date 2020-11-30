export default  {
    methods : {
      pasarAMayuscula : function(value) {
        return value.toUpperCase()
      },
      formatearFecha : function(fyh) {
        return new Date(fyh).toLocaleString()
      },
      reverse(value) {
          return value.split('').reverse().join('')
      },
      wrap(value, strIni, strFin) {
          return strIni + value + strFin
      }
    }
}