<template>
  <div>
    <search @user-search="userList = $event"></search>

    <user-search-list :userList="userList"></user-search-list>
  </div>
</template>

<script>
import Search from "@/components/Home/Search.vue";
import UserSearchList from "@/components/Home/UserList.vue";

export default {
  name: "Home",
  data() {
    return {
      userList: [],
    };
  },
  components: {
    Search,
    UserSearchList,
  },
  methods: {
    getUserList() {},
  },
};
</script>

<style lang="scss"></style>
