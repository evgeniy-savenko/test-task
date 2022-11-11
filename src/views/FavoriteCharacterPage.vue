<template>
  <!-- <div class="favorites-empty">
    <h1>ПУСТО</h1>
  </div> -->
  <div class="favorites-list">
    <card-item
      v-for="favorite in favoriteCollectionData"
      :key="favorite"
      :name="favorite.name"
      :origin="favorite.origin.name"
      :gender="favorite.gender"
      :image="favorite.image"
    />
  </div>
</template>

<script>
import CardItem from '../components/CardItem.vue';
import axios from 'axios';

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      favoriteCollection: [],
      favoriteCollectionData: [],
    };
  },
  mounted() {
    if (localStorage.favorites) {
      let data = JSON.parse(localStorage.favorites);
      let unique = new Set(data);
      this.favoriteCollection = [...unique];
      this.favoriteCollection.map((elem) => {
        axios
          .get(`https://rickandmortyapi.com/api/character/${elem}`)
          .then((response) => {
            this.favoriteCollectionData.push(response.data);
          });
      });
    }
  },
};
</script>

<style>
.favorites-empty {
  height: 100%;
}
.favorites-list {
  height: 100%;

  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding: 25px;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
