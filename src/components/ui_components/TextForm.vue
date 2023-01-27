<script>
export default {
  name: "TextForm",
  data() {
    return {
      text: "",
    };
  },
  props: {
    placeholder: String,
    btnLabel: String,
    btnClasses: Array,
  },
  emits: ["typing", "submit-text"],
};
</script>

<template>
  <form @submit.prevent="$emit('submit-text')" class="input-group mb-3">
    <input
      v-model="text"
      @keyup="$emit('typing', text)"
      :placeholder="placeholder || 'Cerca...'"
      type="text"
      class="form-control" />
    <button class="btn" :class="btnClasses">{{ btnLabel || "Cerca" }}</button>
  </form>
</template>

<style scoped></style>
