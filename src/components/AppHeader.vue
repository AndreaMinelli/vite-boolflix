<script>
import TextForm from "./ui_components/TextForm.vue";
export default {
  name: "AppHeader",
  components: { TextForm },
  emits: ["text-filter", "submit-filter"],
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between">
      <h2>BOOLFLIX</h2>
      <text-form
        @typing="$emit('text-filter', $event)"
        @submit-text="$emit('submit-filter', $event)"
        placeholder="Cerca un film o una serie"
        :btnClasses="['btn-outline-secondary']"
        btnLabel="Cerca"
        class="w-50"></text-form>
    </div>
  </header>
</template>

<style></style>
