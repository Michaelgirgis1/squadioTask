<template>
  <div class="Building-map">
    <GMapMap
      :center="getBuilding.position"
      :zoom="zoomLevel"
      :minZoom="minZoom"
      :maxZoom="maxZoom"
      map-type-id="terrain"
      ref="myMapRef"
      style="width: 100%; height: 400px"
    >
      <GMapMarker
        :key="getBuilding.id"
        @click="openMarker(getBuilding.id)"
        :position="getBuilding.position"
      >
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: this.building.position,
      minZoom: this.zoomLevel - 3,
      maxZoom: this.zoomLevel + 3,
      zoomLevel: 9,
      marker:  this.building
    };
  },
  computed: {
    getBuilding() {
      return this.building
    }

  },
  props: {
    building: {
        type: Object,
        require: true
    }
  },
  mounted() {
    console.log("building object from mapp component ", this.building)
  }
};
</script>