<script>
import TextForm from "./components/ui_components/TextForm.vue";
export default {
  name: "AppHeader",
  components: { TextForm },
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between">
      <h2>BOOLFLIX</h2>
      <text-form
        placeholder="Cerca un film o una serie"
        :btnClasses="['btn-outline-secondary']"
        btnLabel="Cerca"
        class="w-50"></text-form>
    </div>
  </header>
</template>

<style></style>
