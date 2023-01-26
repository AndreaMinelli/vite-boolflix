<script>
import axios from "axios";
import { store } from "./components/data/store";
import { dbMovieUri, apiKey } from "./components/data";
import AppHeader from "./AppHeader.vue";
export default {
  name: "BoolFlix",
  components: { AppHeader },
  data() {
    return {
      nameFilter: "",
      store,
    };
  },
  methods: {
    setNameFilter(name) {
      this.nameFilter = name;
    },
    fetchMovieFilter() {
      const query = {
        params: {
          api_key: apiKey,
          lenguage: "en-Us",
          query: this.nameFilter,
        },
      };
      axios.get(`${dbMovieUri}/search/movie`, query).then((res) => {
        const movieList = res.data.results;
        store.movies = movieList.map((movie) => {
          const { title, original_title, original_language, vote_average } =
            movie;
          return {
            title,
            originalTitle: original_title,
            language: original_language,
            vote: vote_average,
          };
        });
      });
    },
  },
};
</script>

<template>
  <app-header
    @text-filter="setNameFilter"
    @submit-filter="fetchMovieFilter"></app-header>
</template>

<style></style>
