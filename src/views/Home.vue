<template>
  <div class="home-page">
    <section class="home__users-dropdown">
      <UserDropdown :users="users" :selectedUserID="userSelectedId" />
    </section>
    <section class="home__content">
      <div class="sidebar section-ui">
        <h2>Building</h2>
        <div class="sidebar__content">
          <div class="sidebar__buildings">
            <BuildingList :buildings="selectedBuildings" :selectedBuilding = "activeBuilding"/>
          </div>
          <button type="button" class="btn" @click="addBuilding()">
            Add Building
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UserDropdown from "@/components/UserDropdown.vue";
import BuildingList from "@/components/BuildingList.vue";
import { mapGetters } from 'vuex'
export default {
  name: "HomeComponent",
  data() {
    return {
   
    };
  },
  computed: {
    ...mapGetters(['getUsers', 'selectedUserBuildings', 'userBuildingSelected', 'userBuildingSelectedID', 'selectedUserID']),
    users() {
      return this.getUsers
    },
    selectedBuildings() {
        return this.selectedUserBuildings
    },
    activeBuilding() {
        return this.userBuildingSelected
    },
    activeBuildingID () {
        return this.userBuildingSelectedID
    },
    userSelectedId () {
        return this.selectedUserID
    }
  },
  components: {
    UserDropdown,
    BuildingList,
  },
  mounted() {
    console.log("users list from store ", this.users, this.userSelectedId)
  }
};
</script>

<style lang="scss" scoped>
$primaryColor: #595975;

.home__content {
  display: flex;
  width: 90%;
  margin: 0 auto 40px;
  .sidebar {
    width: 25%;
    margin-inline-end: 10px;
  }
  .user-content {
    width: 75%;
  }
  .sidebar__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .section-ui {
    border: 1px solid lightgray;
    border-radius: 10px;
    // margin-left: 10px;
    display: flex;
    flex-direction: column;
    &.user-content {
      h2 {
        margin: 0;
      }
    }
    h2 {
      margin: 0 0 15px 0;
      padding: 15px 10px;
      background: $primaryColor;
      color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
}
</style>
