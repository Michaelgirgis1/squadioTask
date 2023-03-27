
export default {
    setUsers(state, users) {
      state.users = users
    },
    setSelectedUser(state, user) {
      state.selectedUser = user
    },
    setUserBuilding(state, building) {
       state.selectedUser.buildings.push(building)
    },
    setSelectedBuilding(state, building) {
      state.selectedBuilding = building
    }
  }