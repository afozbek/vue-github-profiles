<template>
  <router-link :to="`/user/${userData.login}`" :username="userData.username">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="userData.avatar_url" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ userData.login }}</p>
            <p class="subtitle is-6">{{ userData.html_url }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import FollowerIcon from "@/components/icons/FollowerIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";

export default {
  name: "UserCard",
  props: ["userData"],
  components: {
    FollowerIcon,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.image img {
  border-radius: 50%;
}

.m-userSection {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  &__followers {
    margin-left: 5px;
  }
}
</style>
