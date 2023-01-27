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
  },
  computed: {
    langCheck() {
      return langFlag.includes(this.language);
    },
    voteCalc() {
      return Math.ceil(this.vote / 2);
    },
  },
  methods: {
    buildFlagImageUrl(flag) {
      return new URL(`../assets/img/flags/${flag}.png`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="prod-card">
    <img :src="`${imageUrl}`" :alt="title" class="poster-img" />
    <!-- <p>{{ title }}</p>
    <p>{{ originalTitle }}</p>
    <figure v-if="langCheck" class="w-25">
      <img
        :src="buildFlagImageUrl(language)"
        :alt="language"
        class="img-fluid" />
    </figure>
    <p v-else class="text-uppercase">{{ language }}</p>
    <font-awesome-icon
      v-for="n in voteCalc"
      :key="`${id}/${n}`"
      icon="fa-solid fa-star" />
    <font-awesome-icon
      v-for="n in maxRating - voteCalc"
      :key="`${n}/${id}`"
      icon="fa-regular fa-star" /> -->
  </div>
</template>

<style lang="scss" scoped>
.prod-card {
  height: 400px;

  .poster-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid grey;
  }
}
</style>
