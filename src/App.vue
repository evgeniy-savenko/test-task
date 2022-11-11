<template>
  <div class="content-wrapper">
    <Header> </Header>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
