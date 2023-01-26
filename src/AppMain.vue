<script>
import AppSection from "./AppSection.vue";
export default {
  name: "AppMain",
  components: { AppSection },
  props: {
    movies: Array,
  },
};
</script>

<template>
  <app-section
    title="Film"
    rowSplit="row-cols-4"
    :dataToRender="movies"></app-section>
</template>
