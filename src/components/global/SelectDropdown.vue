<template>
  <div
    class="select-dropdown-wrapper d-flex align-items-center"
    @click="toggleDropdown"
    :class="{ 'style-two': styleTwo == true }"
  >
    <div class="select-icon" v-if="icon">
      <slot name="icon" />
    </div>
    <div class="select-dropdown">
      <span>
        <!-- <ArrowDown /> -->
      </span>
      <div class="active-item">
        {{ dropdownItems[activeIndex].title }}
      </div>
      <ul class="dropdown-items" v-if="showDropdown">
        <li
          v-for="(item, index) in dropdownItems"
          :key="index"
          @click="setActiveItem(index)"
          :class="{ 'is-active': item.isActive }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ArrowDown from "@/components/Icons/icon-arrow-down";
export default {
  components: {
    // ArrowDown,
  },
  data() {
    return {
      showDropdown: false,
      activeIndex: 0,
      activeItem: null,
    };
  },
  props: ["icon", "dropdownItems", "styleTwo"],
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    setActiveItem(idx) {
      this.activeIndex = idx;
      this.dropdownItems.map((item, index) => {
        item.isActive = false;
        this.activeItem = item;
      });
      this.$emit("getActiveItem", this.dropdownItems[idx]);
      this.dropdownItems[idx].isActive = true;
    },
    hideDropdown(e) {
      !this.$el.contains(e.target) ? (this.showDropdown = false) : false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideDropdown);
  },
  watch: {
    activeIndex: {
      handler(vars) {
        this.activeIndex = vars;
        console.log(this.value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.select-dropdown-wrapper {
  position: relative;
  padding: 1rem;
  border: 0.1rem solid var(--border-color);
  border-radius: var(--radius);
  text-align: left;
  cursor: pointer;

  &.style-two {
    border: none;
    background-color: var(--light-bg-color);
    padding: 0 1rem;
    max-width: 20rem;

    .active-item {
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--typo-title);
      font-weight: 500;
    }
  }
}
.dropdown-items {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: #fff;
  border: 0.1rem solid var(--border-color);
  border-radius: var(--radius);
  margin: 0;
  z-index: 9;
  li {
    list-style: none;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--typo-title);
    font-weight: 500;
    transition: all 0.5s;
    &:hover,
    &.is-active {
      color: var(--primary-color);
    }
  }
}
.select-dropdown {
  flex: 1 1 auto;
  i,
  span {
    position: absolute;
    right: 1.5rem;
    top: 0;
    display: inline-flex;
    align-items: center;
    height: 100%;
    color: var(--typo-light);
  }
  path {
    stroke: var(--typo-light);
    height: 1.4rem;
  }
}
.active-item {
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding-right: 2rem;
  font-weight: 500;
  > div {
    width: 100%;
    transition: all 0.5s;
    overflow: hidden;
    white-space: nowrap;
  }
}

.left-sidebar {
  .dropdown-items {
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }
}

.top-toolbar {
  .dropdown-items {
    top: -0.5rem;
    left: -0.5rem;
  }
  .select-dropdown {
    span {
      @media (max-width: 991px) {
        right: 1rem;
      }
    }
  }
}

.call-results {
  .active-item {
    display: inline-flex;
    > div {
      padding: 0.3rem 0.8rem;
      border-radius: 0.4rem;
    }
  }
}
</style>