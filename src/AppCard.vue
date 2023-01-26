<script>
import { langFlag } from "./components/data";
export default {
  name: "AppCard",
  props: {
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
  },
  computed: {
    langCheck() {
      return langFlag.includes(this.language);
    },
  },
  methods: {
    buildFlagImageUrl(flag) {
      return new URL(`./components/img/flags/${flag}.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ originalTitle }}</p>
    <figure v-if="langCheck" class="w-25">
      <img
        :src="buildFlagImageUrl(language)"
        :alt="language"
        class="img-fluid" />
    </figure>
    <p v-else class="text-uppercase">{{ language }}</p>
    <p>{{ vote }}</p>
  </div>
</template>
