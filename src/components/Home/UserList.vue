<template>
  <div>
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
  props: ["userList"],
  components: {
    UserCard,
  },
};
</script>
