<template>
  <div class="building-list">
    <div v-if="isLoading" class="loading-spinner"></div>
    <div v-else-if="buildings.length" >
      <ul>
        <li v-for="building in buildings" :key="building.id" @click="onSelectBuilding(building)">
          <BuildingItem :building="building" :isSelected="selectedBuilding.id === building.id" />
        </li>
      </ul>
    </div>
    <div v-else>
      No buildings found for this user.
    </div>
  </div>
</template>

<script>
import BuildingItem from '@/components/BuildingItem.vue'

export default {
  components: {
    BuildingItem
  },
  props: {
    buildings: {
      type: Array,
      required: true
    },
    selectedBuilding: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onSelectBuilding(building) {
      this.$emit('update:selectedBuilding', building)
    }
  }
}
</script>
<style lang="scss">
.building-list {

    ul {
        list-style: none;
        padding-inline-start: 0;
    }

}
</style>