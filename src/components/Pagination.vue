<template>
  <div class="pagination-container">
    <button
      v-for="page in paginationPages"
      :key="page"
      class="pagination-block"
      @click="onClickSelectPage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Pagination',
  props: {
    paginationPages: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickSelectPage(page) {
      this.$emit(
        'currentPage',
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      );
    },
  },
};
</script>

<style>
.pagination-container {
  display: flex;
}

.pagination-block {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
