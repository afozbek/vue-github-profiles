<template>
  <div>
    <search></search>

    <user-card-skeleton v-if="loading"></user-card-skeleton>
    <user-search-list v-else :userList="userList"></user-search-list>
  </div>
</template>

<script>
import Search from "@/components/Home/Search.vue";
import UserSearchList from "@/components/Home/UserList.vue";
import UserCardSkeleton from "@/components/Home/UserCardSkeleton.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",

  components: {
    Search,
    UserSearchList,
    UserCardSkeleton,
  },
  computed: {
    ...mapGetters({
      userList: "users/getUserList",
      loading: "users/getLoadingStatus",
    }),
  },
};
</script>

<style lang="scss"></style>
