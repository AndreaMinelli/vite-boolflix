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
      genresFiter: null,
    };
  },
  computed: {
    axiosConfig() {
      return {
        params: {
          api_key: apiKey,
          lenguage: "en-Us",
          query: this.nameFilter,
        },
      };
    },
    moviesMap() {
      let filteredMovies = store.movies;
      if (this.genresFiter) {
        filteredMovies = store.movies.filter((movie) => {
          return movie.genre_ids.includes(this.genresFiter);
        });
      }
      return filteredMovies.map((movie) => {
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
      let filteredSeries = store.series;
      if (this.genresFiter) {
        filteredSeries = store.series.filter((serie) => {
          return serie.genre_ids.includes(this.genresFiter);
        });
      }
      return filteredSeries.map((serie) => {
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
      store.genresList = [...store.moviesGenres, ...store.seriesGenres];
      const genres = store.genresList.map((genre) => {
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
      store.isLoading = true;
      axios
        .get(`${dbMovieUri}/${endpoint}`, this.axiosConfig)
        .then((res) => {
          store[target] = res.data[array];
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          store.isLoading = false;
        });
    },
    getProduction() {
      if (!this.nameFilter) {
        return;
      }
      if (store.firstLoad) {
        store.firstLoad = false;
      }
      store.movies = [];
      store.series = [];
      this.fetchApi("search/movie", "movies", "results");
      this.fetchApi("search/tv", "series", "results");
    },
    setGenresFilter(genres) {
      if (!this.genresList.includes(genres)) {
        this.genresFiter = null;
      } else {
        const genId = store.genresList.find((genre) => {
          return genre.name === genres;
        });
        this.genresFiter = genId.id;
      }
    },
    buildPosterImage(url) {
      return url
        ? posterPath + url
        : "https://cringemdb.com/img/movie-poster-placeholder.png";
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
  <app-main :movies="moviesMap" :series="seriesMap"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
