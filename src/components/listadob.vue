<template>
    <div class="container">
        <b-table striped hover :items="juegos" :fields="fields"></b-table>
    </div>
</template>
<script>
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['codigo', 'nombre', 'stock', 'precio'],
        
    
        
      }
    },
    computed: {
        ...mapState(['juegos'])
    },
  }
</script>