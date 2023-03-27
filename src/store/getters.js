export default {
    selectedUserBuildings(state) {
      return state.selectedUser ? state.selectedUser.buildings : []
    },
    getUsers(state){
        return state.users
    },
    userBuildingSelected (state) {
        return state.selectedBuilding ?? state.selectedUser.buildings[0]

    },
    userBuildingSelectedID (state) {
        return state.selectedBuilding ? state.selectedBuilding.id : state.selectedUser.buildings[0].id

    },
    selectedUserID (state) {
        return state.selectedUser ? state.selectedUser.id : 1
    },
    countries (state) {
        return state.countriesList
    }
}