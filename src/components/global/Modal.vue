<template>
  <transition name="modal" mode="out-in">
    <div class="v-modal-mask">
      <div class="v-modal-wrapper" :class="extraClasses">
        <div class="v-modal-container">
          <div class="v-modal-content">
            <h3 class="v-modal-title">
              <button
                v-if="showCloseIcon"
                class="close-btn-with-icon"
                @click.prevent="$emit('close')"
              >
                X
              </button>
              <slot name="modal-title"></slot>
            </h3>
            <div class="v-modal-body">
              <slot name="body">Modal body</slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["extraClasses", "showCloseIcon", "showCloseBtn"],
  components: {
    IconCross,
  },
};
</script>

<style lang="scss" scoped>
.v-modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#1c2b3c, 0.3);
  transition: opacity 0.3s;
}
.v-modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  padding: 3rem 1.5rem;
}
.v-modal-container {
  width: 100%;
  max-width: 66rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}
.v-modal-content {
  padding: 20px 30px;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}
.modal-enter {
  opacity: 0;
  transition: opacity 0.3s;
}
.modal-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.modal-enter .v-modal-container,
.modal-leave-active .v-modal-container {
  transform: scale(1.1);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s;
}
.v-modal-title {
  position: relative;
  color: var(--primary-color);
}
.v-modal-footer {
  padding: 2rem 3rem;
  border-top: 1px solid var(--border-color);
}
.close-btn-with-icon {
  position: absolute;
  right: 0;
  top: 1rem;
  font-size: 1.7rem;
  background: transparent;
  border: none;
  padding: 0.5rem;
  line-height: 1;
  @media (max-width: 1199px) {
    top: 0;
  }
}
.address-book-modal {
  .v-modal-container {
    max-width: 108rem;
  }
  .v-modal-content {
    padding: 4rem 0 2rem;
  }
  .v-modal-title {
    padding: 0 3rem;
  }
  .v-modal-footer {
    border: none;
    padding: 0 3rem 3rem;
  }

  .close-btn-with-icon {
    right: 2.6rem;
  }
}

.modal-alert {
  .v-modal-container {
    max-width: 46rem;
    .v-modal-content {
      padding: 3rem;
    }
  }
  .v-modal-title {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--typo-title);
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid var(--border-color);
  }
  .v-modal-body {
    padding-top: 2rem;
  }
}
</style>
