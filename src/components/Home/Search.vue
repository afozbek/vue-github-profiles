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

    <!-- <user-card-skeleton v-if="loading"></user-card-skeleton>
    <user-card
      v-else-if="!loading && hasUserLoaded"
      :userData="user"
    ></user-card> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
