<script>
import ProductionCard from "./ProductionCard.vue";
export default {
  name: "AppSection",
  components: { ProductionCard },
  props: {
    title: String,
    rowSplit: String,
    dataToRender: Array,
  },
};
</script>

<template>
  <section class="mb-3" :id="title">
    <div class="container">
      <h1 class="text-capitalize">{{ title }}</h1>
      <div class="row g-3" :class="rowSplit">
        <production-card
          v-for="data in dataToRender"
          :key="data.id"
          v-bind="data"
          class="col"></production-card>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 15px 0;
}
h1 {
  margin-bottom: 20px;
  color: white;
  font-size: 25px;
}
</style>
