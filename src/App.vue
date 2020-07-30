<template>
  <div class="m-container">
    <header class="m-header">
      Github User Search App
      <div class="toggle-theme">
        <input
          class="toggle-theme__checkbox"
          type="checkbox"
          name="toggle-theme"
          id="toggle-theme"
          ref="toggleThemeCheckbox"
        />

        <label
          class="toggle-theme__label"
          for="toggle-theme"
          @click="changeApplicationTheme"
        >
          <moon-icon></moon-icon>
          <sun-icon></sun-icon>
          <div class="ball"></div>
        </label>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

export default {
  name: "App",
  data() {
    return {
      lightTheme: true,
    };
  },
  components: {
    MoonIcon,
    SunIcon,
  },
  methods: {
    changeApplicationTheme() {
      this.lightTheme = !this.lightTheme;

      localStorage.setItem("isLightTheme", this.lightTheme);
      document.body.classList = [];
      if (this.lightTheme) {
        document.body.classList.add("light");
      } else {
        document.body.classList.add("dark");
      }
    },
  },
  mounted() {
    const isLightActive = JSON.parse(localStorage.getItem("isLightTheme"));

    if (isLightActive) {
      console.log("LIGHT a düştü");

      document.body.classList.add("light");
      this.$refs.toggleThemeCheckbox.checked = true;
    } else {
      console.log("DARK'a düştü");

      document.body.classList.add("dark");
      this.lightTheme = false;
      this.$refs.toggleThemeCheckbox.checked = false;
    }
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}

.m-container {
  width: 500px;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 50px;

  &__search {
    display: flex;
    justify-content: center;

    &Input {
      margin-right: 5px;
    }

    &Button {
      margin-bottom: 2px;
    }
  }
}

.m-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  color: white;
  background: #24292e;
  text-align: center;
  text-transform: uppercase;
  z-index: 1000;
  font-size: px;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 2px 2px 17px 0px rgba(0, 0, 0, 0.53);
}

.toggle-theme {
  position: absolute;
  right: 15px;
  top: -5px;

  &__label {
    width: 70px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #24292e;
    border-radius: 30px;
    padding: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    background: #000;

    & .ball {
      width: 28px;
      height: 28px;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.4s;
      position: absolute;
      z-index: 10;
      justify-self: flex-start;
      top: 1.7px;
      left: 2px;
    }
  }

  &__checkbox {
    visibility: hidden;
  }

  &__checkbox:checked ~ .toggle-theme__label .ball {
    transform: translateX(37px);
  }
}

.dark {
  background: #24292e;
  color: #fff;
}

.light {
  background: #fff;
  color: #24292e;
}
</style>
