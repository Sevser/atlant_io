<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/blockchain">blockchain</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "/styles/base";

html, body, #app {
  @extend %fullHeightWidth;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
