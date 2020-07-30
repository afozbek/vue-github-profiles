<template>
  <div>
    <user-card-skeleton v-if="loading" :media="1"></user-card-skeleton>
    <user-card v-else :userData="userData"></user-card>

    <user-repo
      v-for="repo in userRepos"
      :key="repo.id"
      :repo="repo"
    ></user-repo>
  </div>
</template>

<script>
import UserCard from "@/components/User/UserCard.vue";
import UserCardSkeleton from "@/components/common/UserCardSkeleton.vue";
import UserRepo from "@/components/User/UserRepo.vue";

import axios from "@/github-instance";

export default {
  name: "UserPage",
  data() {
    return {
      userData: [],
      loading: true,
      userRepos: [],
    };
  },
  components: {
    UserCard,
    UserCardSkeleton,
    UserRepo,
  },
  async mounted() {
    const result = axios
      .get(`/users/${this.$route.params.username}`)
      .then(async (res) => {
        this.userData = res.data;

        const repos = await axios.get(
          `/users/${this.$route.params.username}/repos?sort=stars&per_page=6`
        );

        console.log({ ...repos.data[0] });
        this.userRepos = repos.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });

    // this.loading = false;
  },
};
</script>
