<script>
export default {
  name: "TextForm",
  props: {
    placeholder: String,
    btnLabel: String,
    btnClasses: Array,
  },
};
</script>

<template>
  <form class="input-group mb-3">
    <input type="text" class="form-control" :placeholder="placeholder" />
    <button class="btn" :class="btnClasses">{{ btnLabel }}</button>
  </form>
</template>

<style scoped></style>
