<script>
import AppSection from "./AppSection.vue";
import { store } from "./data/store";
export default {
  name: "AppMain",
  components: { AppSection },
  data() {
    return {
      store,
    };
  },
  props: {
    movies: Array,
    series: Array,
  },
};
</script>

<template>
  <main>
    <div v-if="store.firstLoad || store.isLoading" class="waiting-production">
      <h2 v-if="store.firstLoad">Cerca un titolo per iniziare!</h2>
      <font-awesome-icon
        v-else
        icon="fa-solid fa-spinner"
        class="fa-spin-pulse fa-4x" />
    </div>
    <div v-else>
      <app-section
        title="Film"
        rowSplit="row-cols-4"
        :dataToRender="movies"></app-section>
      <app-section
        title="Series"
        rowSplit="row-cols-4"
        :dataToRender="series"></app-section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.waiting-production {
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
