<template>
    <div class="home">
  <!-- <form>
  <div class="row">
    <div class="col-25">
      <label>Nom</label>
      <input type="text">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Prix</label>
      <input type="number">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Stock</label>
      <input type="number">
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Ajouter">
  </div>
  </form> -->

  <div v-for="homes in home" :key="homes.nom">
    <h2>{{ homes.nom }}</h2>
    <p>{{ homes.prix }} euro</p>
    <p>{{ homes.stock }}</p>
  </div>
  <HelloWorld />
</div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    methods: {
        ajoutPerso() {
            this.homes.push(this.helloWorld);
            this.helloWorld = {
                nom: "",
                prix: 0,
            };
        }
    },
    components: { HelloWorld }
}
</script>

<style>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>