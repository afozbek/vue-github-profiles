<template>
  <div class="m-container">
    <header class="m-header">Github User Search App</header>
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
  padding-bottom: 50px;

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

.m-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  color: white;
  background: #24292e;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 2px 2px 17px 0px rgba(0, 0, 0, 0.53);
}
</style>
