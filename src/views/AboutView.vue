<template>
  <div class="about">
    <div v-for="homes in home" :key="homes.nom">
    <h2>{{ homes.nom }}</h2>
    <p>{{ homes.prix }} euro</p>
    <p>{{ homes.stock }}</p>
  </div>
  </div>
</template>
<script>
export default {
 
 computed: {
     home() {
         /*return [
             {
                 nom: "Jus",
                 prix: 16,
                 stock: 1
             },
             {
                 nom: "Chips",
                 prix: 36,
                 stock: 3
             },
         ];*/
         return this.$store.state.homes
     }
 },
 methods: {
     ajoutPerso() {
         this.homes.push(this.helloWorld);
         this.helloWorld = {
             nom: "",
             prix: 0,
             stock: 0,
         };
     }
 },
}
</script>