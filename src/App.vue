<script>
import axios from "axios";
import { store } from "./components/data/store";
import { dbMovieUri, apiKey } from "./components/data";
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
export default {
  name: "BoolFlix",
  components: { AppHeader, AppMain },
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
    fetchFilterResult() {
      const query = {
        params: {
          api_key: apiKey,
          lenguage: "en-Us",
          query: this.nameFilter,
        },
      };
      axios.get(`${dbMovieUri}/search/movie`, query).then((res) => {
        const moviesList = res.data.results;
        store.movies = moviesList.map((movie) => {
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
      axios.get(`${dbMovieUri}/search/tv`, query).then((res) => {
        const seriesList = res.data.results;
        store.series = seriesList.map((serie) => {
          const { name, original_name, original_language, vote_average } =
            serie;
          return {
            title: name,
            originalTitle: original_name,
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
    @submit-filter="fetchFilterResult"></app-header>
  <app-main :movies="store.movies" :series="store.series"></app-main>
</template>

<style></style>
