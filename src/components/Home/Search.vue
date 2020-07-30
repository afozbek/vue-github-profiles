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
</template>

<script>
import axios from "@/github-instance";
import { mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      username: "afozbek",
      userList: [],
    };
  },
  methods: {
    ...mapActions({
      getUserList: "users/getUserList",
    }),
    async getUserData() {
      this.getUserList({ username: this.username });
    },
  },
};
</script>

<style></style>
