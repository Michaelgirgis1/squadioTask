<template>
  <div class="building-item" :class="{ 'is-selected': isSelected }">
    <div class="building-name">{{ building.name }}</div>
    <div class="btns">
        <button type="button" class="delete-building" @click="deleteBuilding(building.id)">
             <img src="../assets/delete.png" alt="delete image" srcset="">
        </button>
        <button type="button" class="edit-building" @click="editBuilding(building.id)">
             <img src="../assets/edit.png" alt="edit image " srcset="">
        </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    deleteBuilding(index) {
        console.log(index)
    },
     editBuilding(index) {
        console.log(index)
    }
  }
}
</script>


<style lang="scss">
  .building-item{
    transition: all 0.5s ease;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &:hover {
      background-color: rgba(32, 33, 36, 0.056);
    }
    .building-name {
      display: block;
      text-decoration: none;
      color: #000;
      padding: 0 10px;
      font-size: 18px;
      transition: all 0.5s ease;
      text-align: initial;
      cursor: pointer;
      
    }
    &.is-selected {
        .building-name {

            color: #f00;
        }
      }
      button {
        all: unset;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
      }
      img {
        max-width: 20px;
      }

  }
</style>
