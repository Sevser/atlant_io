<template>
  <div id="app">
    <div class="navigation-menu">
      <router-link to="home">Домашняя</router-link>
      <router-link to="interactiveWorkSpace">Рабочий стол</router-link>
      <router-link to="blockchain">Websocket blockchain</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "./styles/base";

  html, body {
    @extend %fullHeightWidth;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    @extend %fullHeightWidth;
    overflow: hidden;
    & .navigation-menu {
      display: flex;
      justify-content: center;
      padding: 1rem;
      & a {
        margin-right: 1rem;
      }
    }
  }
</style>
