<script>
export default {
  name: "SelectBase",
  data() {
    return {
      selected: "",
    };
  },
  props: {
    firstOptions: String,
    options: Array,
  },
  emits: ["change-option"],
  computed: {
    defaultValue() {
      return this.firstOptions ? this.firstOptions : "Seleziona";
    },
  },
  created() {
    this.selected = this.defaultValue;
  },
};
</script>

<template>
  <select
    v-model="selected"
    @change="$emit('change-option', selected)"
    class="form-select">
    <option selected>{{ defaultValue }}</option>
    <option v-for="option in options" :key="option">{{ option }}</option>
  </select>
</template>
