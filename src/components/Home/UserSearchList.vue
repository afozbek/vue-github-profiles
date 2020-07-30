<template>
  <div class="search-list">
    <h1 v-if="userList.length">
      Results for <strong>{{ username }}</strong
      >:
    </h1>

    <user-card
      v-for="user in userList"
      :userData="user"
      :key="user.id"
    ></user-card>
  </div>
</template>

<script>
import UserCard from "./UserCard";

export default {
  name: "UserSearchList",
  data() {
    return {
      username: "",
    };
  },
  props: ["userList"],
  components: {
    UserCard,
  },
  mounted() {
    this.username = localStorage.getItem("username") || "";
  },
};
</script>

<style lang="scss" scoped>
.search-list {
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-bottom: 20px;
  }
}
</style>
