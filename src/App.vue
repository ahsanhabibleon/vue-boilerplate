<template>
  <div id="app">
    <Window />
  </div>
</template>

<script>
import Window from "./components/layouts/Window";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Window },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--primary-font);
}
</style>

<style lang="scss">
::-webkit-scrollbar {
  width: 3px;
  background: transparent;
}
::-webkit-scrollbar:horizontal {
  height: 3px;
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 4px;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb:window-inactive {
  background: transparent;
}
:root {
  scrollbar-color: transparent #eee !important;
  scrollbar-width: thin !important;
}
</style>
