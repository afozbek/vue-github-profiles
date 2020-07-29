<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="userData.avatar_url" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ userData.name }}</p>
          <p class="subtitle is-6">@{{ userData.login }}</p>
        </div>
      </div>

      <div class="m-userSection">
        <FollowerIcon />
        <div class="m-userSection__followers">
          <strong>{{ userData.followers }}</strong> followers
        </div>

        <div class="m-userSection__followers">
          -
        </div>

        <div class="m-userSection__followers">
          <strong>{{ userData.following }}</strong> following
        </div>
        <div class="m-userSection__followers">
          -
        </div>

        <div class="m-userSection__followers">
          <strong>{{ userData.public_repos }}</strong> public repositories
        </div>
      </div>

      <div class="content">
        {{ userData.bio }}
      </div>
    </div>
  </div>
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
