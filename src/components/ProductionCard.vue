<script>
import { langFlag } from "./data";
export default {
  name: "ProductionCard",
  data() {
    return {
      maxRating: 5,
    };
  },
  props: {
    id: Number,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    imageUrl: String,
    overview: String,
  },
  computed: {
    langCheck() {
      return langFlag.includes(this.language);
    },
    buildFlagImageUrl() {
      return new URL(
        `../assets/img/flags/${this.language}.png`,
        import.meta.url
      ).href;
    },
  },
  methods: {
    getStars(n) {
      const vote = Math.ceil(this.vote / 2);
      return n <= vote ? "fa-solid fa-star" : "fa-regular fa-star";
    },
  },
};
</script>

<template>
  <div>
    <div class="prod-card">
      <img :src="`${imageUrl}`" :alt="title" class="poster-img" />
      <div class="info">
        <ul class="list-unstyled">
          <li><span class="sub-info">Titolo:</span> {{ title }}</li>
          <li>
            <span class="sub-info">Titolo originale:</span> {{ originalTitle }}
          </li>
          <li>
            <span class="sub-info">Lingua:</span>
            <figure v-if="langCheck" class="w-25 my-2">
              <img :src="buildFlagImageUrl" :alt="language" class="img-fluid" />
            </figure>
            <p v-else class="text-uppercase my-1">{{ language }}</p>
          </li>
          <li>
            <span class="sub-info">Voto:</span>
            <font-awesome-icon
              v-for="n in maxRating"
              :key="`${id}/${n}`"
              :icon="getStars(n)"
              class="fa-solid fa-star" />
          </li>
          <li v-if="overview">
            <span class="sub-info">Overview:</span>{{ overview }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prod-card {
  color: white;
  height: 400px;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  border: 1px solid grey;
  overflow: hidden;

  .poster-img {
    width: 100%;
    height: 100%;
  }

  .info {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.5s, background-color 1s;
    overflow-y: auto;
    padding: 10px;
    &:hover {
      opacity: 1;
      background-color: black;
    }
  }

  .sub-info {
    font-weight: bold;
    margin-right: 4px;
  }

  .fa-solid {
    color: yellow;
  }

  .fa-star:hover {
    color: yellow;
    scale: 1.2;
  }
}
</style>
