<template>
  <header class="header">
    <nav>
      <ul class="navbar">
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="go-back" to="./"> GoBack </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: center;
  padding: 0;
  li {
    list-style: none;
    margin: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #777;
  }
  .is-active {
    color: lightcoral;
  }
  .go-back {
    color:lightslategray;
  }
}
</style>
