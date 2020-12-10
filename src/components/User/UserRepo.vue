<template>
  <div class="user-repo">
    <div class="user-repo__header">
      <repo-icon></repo-icon>
      <a class="user-repo__link" :href="repo.html_url">{{ repo.name }}</a>
    </div>
    <p class="user-repo__desc">{{ repo.description }}</p>
    <div class="user-repo__details">
      <div
        class="user-repo__languageCircle"
        v-if="repo.language"
        v-bind:class="languageColor"
      ></div>
      <div class="user-repo__language" v-if="repo.language">
        {{ repo.language }}
      </div>
      <div v-if="repo.stargazers_count > 0" class="user-repo__stars">
        <star-icon></star-icon>
        {{ repo.stargazers_count }}
      </div>

      <div>Updated {{ fromTime }}</div>
    </div>
  </div>
</template>

<script>
import RepoIcon from '@/components/icons/RepositoryIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import moment from 'moment';

export default {
  name: 'UserRepo',
  props: ['repo'],
  components: {
    RepoIcon,
    StarIcon,
  },
  computed: {
    languageColor() {
      switch (this.repo.language) {
        case 'Vue':
          return { '-vue': true };
        case 'JavaScript':
          return { '-js': true };
        case 'TypeScript':
          return { '-ts': true };
        case 'CSS':
          return { '-css': true };
        case 'HTML':
          return { '-html': true };
        case 'Java':
          return { '-java': true };
        case 'Python':
          return { '-python': true };
        case 'C#':
          return { '-csharp': true };
        case 'C':
          return { '-c': true };

        default:
          return;
      }
    },
    fromTime() {
      return moment(new Date(this.repo.updated_at)).fromNow();
    },
  },
};
</script>

<style lang="scss">
.user-repo {
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-top: 20px;

  padding: 20px;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  &__link {
    color: #0366d6;
    text-decoration: none;
    margin-left: 5px;
    padding-bottom: 4px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: #0366d6;
    }
  }

  &__desc {
    color: #586069;
    font-size: 13px;
    margin-bottom: 10px;
  }

  &__details {
    font-size: 13px;
    color: #586069;
    display: flex;
    align-items: center;
  }

  &__language {
    margin-right: 20px;
    &Circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
      padding-bottom: 2px;

      &.-vue {
        background-color: #2c3e50;
      }

      &.-js {
        background-color: #f1e05a;
      }

      &.-ts {
        background-color: #2b7489;
      }

      &.-css {
        background-color: #563d7c;
      }

      &.-html {
        background-color: #e34c26;
      }

      &.-java {
        background-color: #b07219;
      }

      &.-python {
        background-color: #3572a5;
      }

      &.-csharp {
        background-color: #178600;
      }

      &.-c {
        background-color: #555555;
      }
    }
  }

  &__stars {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}

.star-icon {
  cursor: pointer;
  margin-right: 3px;

  &:hover {
    color: #0366d6;
    fill: #0366d6;
  }
}
</style>
