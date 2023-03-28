
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
    setUserDeleteBuilding(state, indx) {
      state.selectedUser.buildings.splice(indx, 1)
    },
    setSelectedBuilding(state, building) {
      state.selectedBuilding = building
    },
    setDeletedBuildingID(state, id) {
      state.deletedBuildingID = id
    }
  }