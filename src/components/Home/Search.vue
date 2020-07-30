<template>
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

  <!-- <user-card-skeleton v-if="loading"></user-card-skeleton>
    <user-card
      v-else-if="!loading && hasUserLoaded"
      :userData="user"
    ></user-card> -->
</template>

<script>
import axios from "@/github-instance";

export default {
  name: "Search",
  data() {
    return {
      username: "afozbek",
      userList: [],
    };
  },
  methods: {
    async getUserData() {
      console.log("Getting");

      const result = await axios.get(`/search/users?q=${this.username}`);

      this.userList = result.data.total_count > 0 ? result.data.items : [];

      console.log({ ...this.userList[0] });

      this.$emit("user-search", this.userList);
    },
  },
};
</script>

<style></style>
