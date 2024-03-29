import { createStore } from 'vuex'

export default createStore({
  state: {
    homes: [
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
    ]
  },
  getters: {
  },
  mutations: {
    ajoutPerso(state, home) {
      state.homes.push(home)
      console.log(state.homes)
    },
  },
  actions: {
  },
  modules: {
  }
})
