<template>
  <section class="user-dropdown">
    <select name="users" id="user"
      @change="changeUser(selectedUser)">
      <option :value="user.name" v-for="(user, index) of users" :key="index" :selected="selectedUserID === user.id" >{{user.name}}</option>
    </select>
  </section>
</template>

<script>
export default {
    name: "user-dropdown",
    props: {
        users: {
            type: Array,
            required: true
            
        },
        selectedUserID : {
            type: Number,
            default: 1
        }

    },
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