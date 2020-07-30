<template>
  <div>
    <search @username="username = $event"></search>

    <user-card-skeleton v-if="loading" :media="3"></user-card-skeleton>
    <user-search-list
      v-else
      :userList="userList"
      :username="username"
    ></user-search-list>
  </div>
</template>

<script>
import Search from "@/components/Home/Search.vue";
import UserSearchList from "@/components/Home/UserSearchList.vue";
import UserCardSkeleton from "@/components/common/UserCardSkeleton.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      username: "",
    };
  },
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
