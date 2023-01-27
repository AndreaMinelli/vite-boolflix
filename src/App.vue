<script>
import axios from "axios";
import { store } from "./components/data/store";
import { dbMovieUri, apiKey, posterPath } from "./components/data";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "BoolFlix",
  components: { AppHeader, AppMain },
  data() {
    return {
      nameFilter: "",
      store,
    };
  },
  computed: {
    moviesMap() {
      return store.movies.map((movie) => {
        const {
          id,
          title,
          original_title,
          original_language,
          vote_average,
          poster_path,
        } = movie;
        return {
          id,
          title,
          originalTitle: original_title,
          language: original_language,
          vote: vote_average,
          imageUrl: this.buildPosterImage(poster_path),
        };
      });
    },
    seriesMap() {
      return store.series.map((serie) => {
        const {
          name,
          original_name,
          original_language,
          vote_average,
          poster_path,
        } = serie;
        return {
          title: name,
          originalTitle: original_name,
          language: original_language,
          vote: vote_average,
          imageUrl: this.buildPosterImage(poster_path),
        };
      });
    },
  },
  methods: {
    setNameFilter(name) {
      this.nameFilter = name;
    },
    fetchSearchApi(endpoint, target) {
      const query = {
        params: {
          api_key: apiKey,
          lenguage: "en-Us",
          query: this.nameFilter,
        },
      };
      store.isLoading = true;
      axios
        .get(`${dbMovieUri}/${endpoint}`, query)
        .then((res) => {
          store[target] = res.data.results;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          if (store[target].length) store.isLoading = false;
        });
    },
    getProduction() {
      if (!this.nameFilter) {
        store.movies = [];
        store.series = [];
        store.isLoading = true;
        return;
      }
      this.fetchSearchApi("search/movie", "movies");
      this.fetchSearchApi("search/tv", "series");
    },
    buildPosterImage(url) {
      return url ? posterPath + url : "";
    },
  },
};
</script>

<template>
  <app-header
    @text-filter="setNameFilter"
    @submit-filter="getProduction"></app-header>
  <app-main
    v-if="!store.isLoading"
    :movies="moviesMap"
    :series="seriesMap"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
