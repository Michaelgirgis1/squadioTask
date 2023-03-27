
export default {
    setUsers(state, users) {
      state.users = users
    },
    setSelectedUser(state, user) {
      state.selectedUser = user
    },
    setSelectedBuilding(state, building) {
      state.selectedBuilding = building
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    }
  }