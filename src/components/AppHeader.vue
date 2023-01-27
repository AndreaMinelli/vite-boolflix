<script>
import TextForm from "./ui_components/TextForm.vue";
import SelectBase from "./ui_components/SelectBase.vue";
export default {
  name: "AppHeader",
  components: { TextForm, SelectBase },
  props: {
    genresList: Array,
  },
  emits: ["text-filter", "submit-filter", "selected-genres"],
};
</script>

<template>
  <header>
    <div class="container d-flex">
      <h2>BOOLFLIX</h2>
      <div class="input-group">
        <select-base
          :options="genresList"
          @change-option="$emit('selected-genres', $event)"
          first-options="Seleziona un genere"
          class="w-25 flex-grow-0 ms-auto me-3"></select-base>
        <text-form
          @typing="$emit('text-filter', $event)"
          @submit-text="$emit('submit-filter', $event)"
          placeholder="Cerca un film o una serie"
          :btnClasses="['btn-secondary']"
          btnLabel="Cerca"
          class="w-25 d-flex align-items-center"></text-form>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 15px;

  h2 {
    margin: 0;
    color: red;
  }
}
</style>
