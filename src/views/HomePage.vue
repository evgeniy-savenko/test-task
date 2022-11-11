<template>
  <div class="wrapper">
    <div class="sort">
      <sort-gender v-model="selectedSort" :options="sortOptions"></sort-gender>
    </div>
    <div class="home-page">
      <CardItem
        v-for="character in characterInfo"
        :key="character.id"
        :image="character.image"
        :gender="character.gender"
        :origin="character.origin.name"
        :name="character.name"
        :id="character.id"
        @click="fetchFavorites"
      ></CardItem>
    </div>
    <pagination
      :paginationPages="paginationPages"
      @currentPage="getCurrentPage"
    />
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';
import axios from 'axios';
import SortGender from '../components/SortGender.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem,
    SortGender,
    Pagination,
  },
  data() {
    return {
      characterInfo: [],
      paginationPages: null,
      favorites: [],
      selectedSort: '',
      sortOptions: [],
      setCurrentPage: '',
    };
  },
  methods: {
    fetchData() {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((response) => {
          let paginationPages = response.data.info.pages;
          console.log(response.data.results, 'запрос ориг');
          let characterInfo = response.data.results;
          this.characterInfo = characterInfo;
          this.paginationPages = paginationPages;
        });
    },
    fetchFavorites(id) {
      this.favorites.push(id);
      this.favorites = this.favorites.filter((elem) => elem / 1);
    },
    getCurrentPage(page) {
      axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => {
          let characterInfo = response.data.results;
          this.characterInfo = characterInfo;
        });
    },
  },

  mounted() {
    this.fetchData();
  },
  watch: {
    favorites: {
      handler() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  padding: 25px;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
