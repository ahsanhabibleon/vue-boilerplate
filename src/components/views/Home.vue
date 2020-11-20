<template>
  <div class="home">
    <div class="page-title"></div>
    <div class="page-body">
      <h1>This is the homepage!</h1>
      <SelectDropdown
        :dropdownItems="newDropdownItems"
        @getActiveItem="items.item1 = $event"
      />
      <SelectDropdown
        :dropdownItems="newDropdownItems2"
        @getActiveItem="items.item2 = $event"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SelectDropdown from "../global/SelectDropdown";
export default {
  components: { SelectDropdown },
  data() {
    return {
      items: {
        item1: null,
        item2: null,
      },
      newDropdownItems: [
        {
          title: "Item 1",
          isActive: true,
        },
        {
          title: "Item 2",
          isActive: false,
        },
        {
          title: "Item 3",
          isActive: false,
        },
        {
          title: "Item 4",
          isActive: false,
        },
        {
          title: "Item 5",
          isActive: false,
        },
        {
          title: "Item 6",
          isActive: false,
        },
      ],
      newDropdownItems2: [
        {
          title: "Item 1",
          isActive: true,
        },
        {
          title: "Item 2",
          isActive: false,
        },
        {
          title: "Item 3",
          isActive: false,
        },
        {
          title: "Item 4",
          isActive: false,
        },
        {
          title: "Item 5",
          isActive: false,
        },
        {
          title: "Item 6",
          isActive: false,
        },
      ],
    };
  },
  computed: {},
  methods: {},
  watch: {
    items: {
      deep: true,
      handler(vars){
        console.log(vars)
      }
    }
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.page-body {
  text-align: center;
}
.select-dropdown-wrapper {
  max-width: 400px;
  margin: 1rem auto;
}
</style>