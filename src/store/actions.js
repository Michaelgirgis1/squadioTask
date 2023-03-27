
export default {

  async addBuilding({ commit },  building ) {
    commit('setUserBuilding', building)
    commit('setSelectedBuilding', building)
  },
  
  test() {
    console.log("test")
  }
}
