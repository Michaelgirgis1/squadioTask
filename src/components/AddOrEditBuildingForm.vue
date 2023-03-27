<template>
  <form class="add-building-form" @submit="sumbiBuildingForm($event)">
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingInputGroup1"
        placeholder="Building Name"
        :value="isAdd? '' :building.name"
        required
      />
    </div>
    <div class="form-floating">
      <select class="form-select" id="" :value="isAdd? building.name :building.country">
        <option
          :value="country.name"
          v-for="country in countriesList"
          :key="country.id"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <div class="form-btn">
      <button type="submit" class="btn btn--submit">Save</button>
      <button
        type="button"
        class="btn btn--cancel"
        @click="cancelAdddBuilding()"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "adddBuilding",
  props: {
    building: {
        type: Object,
        require: true,
        default() {
            return {
                name: ""

            }
        }
    
    },
    isAdd: {
      type: Boolean,
      default: true
    }

  },
  data() {
    return {
      countrySelected: null
    };
  },
  computed: {
    ...mapGetters(["countries"]),
    countriesList() {
      return this.countries;
    }
  },
  mounted() {
    console.log("add new " + this.building)
  }
};
</script>


<style lang="scss">
.add-building-form {
  width: 75%;
  > div {
    margin-bottom: 30px;
  }
  .form-floating {
    > .form-select {
      padding: 12px;
      width: 100%;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      &:focus-visible {
       outline: 0;

      }
      option {
        padding: 5px;
        font-size: 16px;
      }
    }
  }
  .form-btn {
    display: flex;
    justify-content: flex-end;
    .btn {
      border-radius: 28px;
      &:first-child {
        margin-inline-end: 15px;
      }
      &.btn--cancel {
        background-color: #b0aeae !important;
        color: #000;
      }
    }
  }
  .btn {
    background-color: #595975 !important;
    color: #fff;
    border-radius: 17px;
    padding: 10px;
    font-size: 18px;
    outline: 0;
    border: 0;
    min-width: 100px;
    &:hover {
      color: #fff;
      background-color: #595975 !important;
      border-color: unset;
    }
  }
}
</style>

