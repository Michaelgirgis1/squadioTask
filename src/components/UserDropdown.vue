<template>
  <section class="user-dropdown">
    <select name="users" id="user"
      v-model="selectedUser"
      @change="changeUser(selectedUser)">
      <option value="User one" selected>User one</option>
      <option value="User two">User two</option>
    </select>
  </section>
</template>

<script>
export default {
    name: "user-dropdown",
    methods: {
        changeUser(user) {
            console.log(user)
        }
    }
}
</script>

<style lang="scss" scoped>
  .user-dropdown{
    margin: 20px 0;
    select {
      padding: 8px 15px;
      min-width: 20%;
     
    }
     option {
        padding: 10px 25px;
      }
  }
</style>