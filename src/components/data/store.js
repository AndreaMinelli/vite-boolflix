import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],
  moviesGenres: [],
  seriesGenres: [],
  firstLoad: true,
  isLoading: false,
});
