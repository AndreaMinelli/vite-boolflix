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
          overview,
        } = movie;
        return {
          id,
          title,
          originalTitle: original_title,
          language: original_language,
          vote: vote_average,
          imageUrl: this.buildPosterImage(poster_path),
          overview,
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
          overview,
        } = serie;
        return {
          title: name,
          originalTitle: original_name,
          language: original_language,
          vote: vote_average,
          imageUrl: this.buildPosterImage(poster_path),
          overview,
        };
      });
    },
    genresList() {
      const genresList = [...store.moviesGenres, ...store.seriesGenres];
      const genres = genresList.map((genre) => {
        const { name } = genre;
        return name;
      });
      return [...new Set(genres)];
    },
  },
  methods: {
    setNameFilter(name) {
      this.nameFilter = name;
    },
    fetchApi(endpoint, target, array) {
      const config = {
        params: {
          api_key: apiKey,
          lenguage: "en-Us",
          query: this.nameFilter,
        },
      };
      store.isLoading = true;
      axios
        .get(`${dbMovieUri}/${endpoint}`, config)
        .then((res) => {
          store[target] = res.data[array];
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
      this.fetchApi("search/movie", "movies", "result");
      this.fetchApi("search/tv", "series", "result");
    },
    setGenresFilter(genres) {
      console.log(genres);
    },
    buildPosterImage(url) {
      return url ? posterPath + url : "";
    },
  },
  created() {
    this.fetchApi("/genre/movie/list", "moviesGenres", "genres");
    this.fetchApi("/genre/tv/list", "seriesGenres", "genres");
  },
};
</script>

<template>
  <app-header
    :genresList="genresList"
    @selected-genres="setGenresFilter"
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
