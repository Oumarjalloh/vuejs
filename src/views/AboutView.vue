<template>
  <div class="about">
    <div v-for="homes in home" :key="homes.nom">
        <table class="tftable">
<tr><th>Nom</th><th>Prix</th><th>Stock</th></tr>
<tr>
    <td>
        <p>{{ homes.nom }}</p>
    </td>
    <td>
        <p>{{ homes.prix }}€</p>
    </td>
    <td>
        <p>{{ homes.stock }}</p>
    </td>
</tr>
</table>
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
<style>

.tftable {font-size:12px;color:#333333;width:90%;border-width: 1px;border-color: #9dcc7a;border-collapse: collapse;}
.tftable th {font-size:12px;background-color:#abd28e;border-width: 1px;padding: 5px;border-style: solid;border-color: #9dcc7a;text-align:left;}
.tftable tr {background-color:#bedda7;}
.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #9dcc7a; text-align: left;}
.tftable tr:hover {background-color:#ffffff;}

</style>