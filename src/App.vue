<template>
  <div class="m-container">
    <div class="m-container__search" @keydown.enter="getUserData">
      <b-field
        class="m-container__searchInput"
        label="Username"
        type="is-success"
        message="This username is available"
      >
        <b-input v-model="username" maxlength="30"></b-input>
      </b-field>

      <b-button
        @click="getUserData"
        class="m-container__searchButton"
        type="is-success"
      >
        Search
      </b-button>
    </div>

    <user-card-skeleton v-if="loading"></user-card-skeleton>
    <user-card
      v-else-if="!loading && hasUserLoaded"
      :userData="user"
    ></user-card>
  </div>
</template>

<script>
import axios from "./github-instance";

import UserCard from "@/components/UserCard.vue";
import UserCardSkeleton from "@/components/Skeleton.vue";

export default {
  name: "App",
  data() {
    return {
      username: "afozbek",
      user: {},
      loading: false,
      hasUserLoaded: false,
    };
  },
  components: {
    UserCard,
    UserCardSkeleton,
  },
  methods: {
    async getUserData() {
      this.loading = true;

      const result = await axios.get(`/users/${this.username}`);

      this.user = result.data;
      console.log({ ...result.data });

      this.loading = false;
      this.hasUserLoaded = true;
    },
  },
};
</script>

<style lang="scss">
.m-container {
  width: 500px;
  margin: 0 auto;
  padding-top: 150px;

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    &Input {
      margin-right: 5px;
    }

    &Button {
      margin-bottom: 2px;
    }
  }
}
</style>
