// store/actions.js
// import userService from '@/services/userService'
// import buildingService from '@/services/buildingService'

export default {

//     commit('setIsLoading', true)
//     const users = await userService.getUsers()
//     commit('setUsers', users)
//     commit('setSelectedUser', users[0])
//     commit('setIsLoading', false)
//   },
//   async selectUser({ commit }, user) {
//     commit('setSelectedUser', user)
//     commit('setSelectedBuilding', user.buildings[0])
//   },
//   async selectBuilding({ commit }, building) {
//     commit('setSelectedBuilding', building)
//   },
addBuilding({ commit },  building ) {
  commit('setUserBuilding', building)
  commit('setSelectedBuilding', building)
},

 deleteBuilding({commit}, user) {
   commit('setSelectedUser', user)
  //  commit('setSelectedBuilding', state.selectedUser.buildings[0])
 }
  // async updateBuilding({ commit }, { user, building }) {
  //   const updatedBuilding = await buildingService.updateBuilding(building)
  //   const index = user.buildings.findIndex(b => b.id === updatedBuilding.id)
  //   user.buildings.splice(index, 1, updatedBuilding)
  //   commit('setSelectedBuilding', updatedBuilding)
  // },
//   async deleteBuilding({ commit }, { user, building }) {
//     await buildingService.deleteBuilding(building.id)
//     const index = user.buildings.findIndex(b => b.id === building.id)
//     user.buildings.splice(index, 1)
//     commit('setSelectedBuilding', null)
//   }
 
}
