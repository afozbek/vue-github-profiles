<template>
  <div class="home">
    <search @username="username = $event"></search>

    <user-card-skeleton v-if="loading" :media="3"></user-card-skeleton>
    <info-message
      v-else-if="!loading && userList.length === 0 && !loading"
    ></info-message>
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
import InfoMessage from "@/components/Home/InfoMessage.vue";

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
    InfoMessage,
  },
  computed: {
    ...mapGetters({
      userList: "users/getUserList",
      loading: "users/getLoadingStatus",
    }),
  },
};
</script>

<style lang="scss">
.home {
  width: 90%;
  margin: 0 auto;
}
</style>
