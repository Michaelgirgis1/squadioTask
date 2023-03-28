<template>
  <div class="home-page">
    <section class="home__users-dropdown">
      <UserDropdown :users="users" :selectedUserID="userSelectedId" />
    </section>
    <section class="home__content">
      <section class="sidebar section-ui">
        <h2>Building</h2>
        <div class="sidebar__content">
          <div class="sidebar__buildings">
            <BuildingList :buildings="selectedBuildings" :selectedBuilding = "activeBuilding"/>
          </div>
          <button type="button" class="btn" @click="addBuilding()">
            Add Building
          </button>
        </div>
      </section>
      <section class="user-content section-ui">
        <h2>{{actionType}}</h2>
        <div class="user-content__map" v-if="isShowMap">
            <BuildingMap :building= "userBuildingSelected"/>
          
        </div>
        <div class="user-content__add-building" v-if="!isShowMap">
            <AddOrEditBuildingForm @buildingAdded="listUpdated"  :building= "userAddOrEditBuilding" :isAdd ="isAddBuilding"/>

        </div>

      </section>
    </section>
  </div>
</template>

<script>
import UserDropdown from "@/components/UserDropdown.vue";
import BuildingList from "@/components/BuildingList.vue";
import BuildingMap from "@/components/BuildingMap.vue";
import AddOrEditBuildingForm from "@/components/AddOrEditBuildingForm.vue"
import { mapGetters } from 'vuex'
export default {
  name: "HomeComponent",
  data() {
    return {
        actionType: "Building Location",
        isShowMap: true,
        isAddBuilding: false,
        userAddOrEditBuilding: {
        id: 'AFG',
        name: 'Afghanistan',
       position: [34.79120620588236, 67.78638470588234]
       }

    };
  },
  watch: {
    selectedBuildings(newValue) {
      if(newValue.length === 0) {
        this.isAddBuilding = true
        this.isShowMap = false

      }
      console.log("listing after remove ", newValue)
    }

  },
  computed: {
    ...mapGetters(['getUsers', 'selectedUserBuildings','countriesList', 'userBuildingSelected', 'userBuildingSelectedID', 'selectedUserID']),
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
    BuildingMap,
    AddOrEditBuildingForm
  },
  methods: {
    addBuilding() {
      this.isAddBuilding = true
      this.actionType = 'Add New Building';
      this.isShowMap = false

    },
    listUpdated() {
        this.isShowMap = true
    }
  }, 
  mounted() {
    console.log("users list from store ", this.users, this.userBuildingSelected)
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
  .btn {
    background-color: $primaryColor !important;
    color: #fff;
    border-radius: 17px;
    padding: 10px;
    font-size: 18px;
    outline: 0;
    border: 0;
    min-width: 100px;
    &:hover {
      color: #fff;
      background-color: $primaryColor !important;
      border-color: unset;
    }
  }
  .user-content__add-building {
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    min-height: 400px;

  }
</style>
