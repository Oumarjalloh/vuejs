<template>
  <div>
    <form @submit.prevent="ajoutPerso()">
      <label>Nom</label><input type="text" placeholder="Nom" v-model="formData.nom"> <br>
      <label>Prix</label><input type="number" placeholder="Prix" v-model="formData.prix"><br>
      <label>Stock</label><input type="number" placeholder="Stock" v-model="formData.stock"> <br>
        <button type="submit">Ajouter</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
      return {
          formData: {
              nom: '',
              prix: 0,
              stock: 0,
          },
      }

      
  },

  methods: {
    ajoutPerso() {
      this.$store.commit('ajoutPerso', this.formData)
      this.formData = {
              nom: '',
              prix: 0,
              stock: 0,
          }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
