<template>
  <div class="m-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
