<template>
  <div class="m-container__search" @keydown.enter="getUserData">
    <b-field
      class="m-container__searchInput"
      :type="inputType"
      :message="errorMessage"
    >
      <b-input v-model="username" maxlength="30"></b-input>
    </b-field>

    <b-button
      @click="getUserData"
      class="m-container__searchButton"
      type="is-dark"
    >
      Search
    </b-button>
  </div>
</template>

<script>
import axios from "@/github-instance";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      username: "",
      type: "is-dark",
    };
  },
  computed: {
    ...mapGetters({
      userList: "users/getUserList",
      hasError: "users/hasError",
      errorMessage: "users/errorMessage",
    }),
    inputType() {
      return this.hasError ? "is-danger" : "is-dark";
    },
  },
  mounted() {
    this.username = localStorage.getItem("username") || "";
  },
  methods: {
    ...mapActions({
      getUserList: "users/getUserList",
    }),
    async getUserData() {
      localStorage.setItem("username", this.username);

      this.getUserList({ username: this.username });
    },
  },
};
</script>

<style lang="scss" scoped>
// .m-container {
//   &__searchButton {
//     background-color: #24292e;
//     color: #fff;

//     &:hover {
//       color: #fff;
//       background-color: #24292edb;
//     }
//   }
// }
</style>
