
export default {


addBuilding({ commit },  building ) {
  commit('setUserBuilding', building)
  commit('setSelectedBuilding', building)
},

 deleteBuilding({commit}, {user, isActive}) {
    if(isActive) {
      commit('setSelectedBuilding', user.buildings[0])
    }
   commit('setSelectedAtUsers', user)
   commit('setSelectedUser', user)
 },

  updateSelectedUser({ commit, state }, index) {
    commit('setSelectedUser', state.users[index])
    commit('setSelectedBuilding', state.users[index].buildings[0])

  },
  async updateBuilding({ commit, state }, building ) {
    const buildingIndex = state.selectedUser.buildings.findIndex(build => build.id === building.id )
    state.users[state.selectedUserIndex].buildings.splice(buildingIndex, 1, building);
    commit('setSelectedBuilding', building)
  },

 
}
