<template>
  <div class="page-not-found-container">
    Page not found
  </div>
</template>

<script>

export default {
  name: 'notFound',
  components: {},
  props: {},
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../styles/base";

.page-not-found-container {
  @extend %fullHeightWidth;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
