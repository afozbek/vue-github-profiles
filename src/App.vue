<template>
  <div class="m-container">
    <div class="m-container__search">
      <b-field
        class="m-container__searchInput"
        label="Username"
        type="is-success"
        message="This username is available"
      >
        <b-input
          @keydown.enter="getUserData"
          v-model="username"
          maxlength="30"
        ></b-input>
      </b-field>

      <b-button
        @click="getUserData"
        class="m-container__searchButton"
        type="is-success"
      >
        Search
      </b-button>
    </div>

    <user-card :userData="user"></user-card>
  </div>
</template>

<script>
import axios from "./github-instance";

import UserCard from "@/components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      username: "afozbek",
      user: {},
      loading: false,
    };
  },
  components: {
    UserCard,
  },
  methods: {
    async getUserData() {
      this.loading = true;

      const result = await axios.get(`/users/${this.username}`);

      console.log(result.data);
      this.loading = false;
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

    &Input {
      margin-right: 5px;
    }

    &Button {
      margin-bottom: 2px;
    }
  }
}
</style>
