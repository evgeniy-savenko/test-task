<template>
  <div class="header-wrapper">
    <nav>
      <router-link active-class="active" to="/">Все персонажи</router-link>
      <div class="logo"><h1>Rick and Morty</h1></div>
      <router-link active-class="active" to="/favorite"
        >Избранные персонажи</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  height: 100px;
  background-color: #000ecc;
  border-radius: 0 0 10px 10px;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}
a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.logo {
  color: rgb(31, 138, 31);
}

.active {
  color: rgb(145, 253, 145);
}
</style>
