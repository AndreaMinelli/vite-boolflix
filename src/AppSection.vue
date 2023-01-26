<script>
import AppCard from "./AppCard.vue";
export default {
  name: "AppSection",
  components: { AppCard },
  props: {
    title: String,
    rowSplit: String,
    dataToRender: Array,
  },
};
</script>

<template>
  <section class="mb-3">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row" :class="rowSplit">
        <app-card
          v-for="data in dataToRender"
          :key="data.id"
          v-bind="data"
          class="col border"></app-card>
      </div>
    </div>
  </section>
</template>
