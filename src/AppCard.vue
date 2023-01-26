<script>
export default {
  name: "AppCard",
  props: {
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
  },
};
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ originalTitle }}</p>
    <p>{{ language }}</p>
    <p>{{ vote }}</p>
  </div>
</template>
