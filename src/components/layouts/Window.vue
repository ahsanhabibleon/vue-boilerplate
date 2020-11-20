<template>
  <div class="window">
    <!-- <SideNav /> -->
    <TopToolbar />
    <div class="page-title">
      {{ $route.params.id}}
    </div>
    <main class="main-content">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import TopToolbar from "./TopToolbar";
import SideNav from "./SideNav";
import { mapGetters } from "vuex";
export default {
  components: { TopToolbar, SideNav },
  methods: {
    ttt() {
      console.log("ttt")
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.slide-enter,
.slide-leave-to {
  opacity: 0;
  // transform: translateY(10%);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s;
}
</style>