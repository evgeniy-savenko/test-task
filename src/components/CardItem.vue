<template>
  <div class="card-wrapper">
    <button class="clear-fav">&times;</button>

    <img :src="image" class="card-image" />
    <div class="card-description">
      <div class="card-description__name"><b>Имя:</b> {{ name }}</div>
      <div class="card-description__gender"><b>Пол:</b> {{ gender }}</div>
      <div class="card-description__origin">
        <b>Происхождение:</b> {{ origin }}
      </div>
    </div>
    <div class="card-favourite">
      <div class="card-favourite__button">
        <button @click="$emit('click', id)">Добавить в избранное</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    emit: [],
  },
  name: 'CardItem',
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
  height: 280px;
  padding: 10px;
  width: 180px;
  border-radius: 12px;
  border: 2px solid rgb(31, 223, 31);
  display: flex;
  flex-direction: column;
  background-color: rgb(145, 255, 145);
}

.card-image {
  height: 100%;
  width: 100%;
  border-radius: 12px;
}

.card-description {
  font-size: 15px;
}

.clear-fav {
  font-size: 30px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: transparent;
  color: red;
  border: none;
}
</style>
