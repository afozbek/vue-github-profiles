<template>
  <user-card-skeleton v-if="loading" :media="1"></user-card-skeleton>
  <user-card v-else :userData="userData"></user-card>
</template>

<script>
import UserCard from "@/components/User/UserCard.vue";
import UserCardSkeleton from "@/components/common/UserCardSkeleton.vue";
import axios from "@/github-instance";

export default {
  name: "UserPage",
  data() {
    return {
      userData: [],
      loading: true,
    };
  },
  components: {
    UserCard,
    UserCardSkeleton,
  },
  async mounted() {
    const result = await axios.get(`/users/${this.$route.params.username}`);

    this.userData = result.data;

    this.loading = false;
  },
};
</script>
