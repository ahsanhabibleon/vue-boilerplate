<template>
  <div class="chaos-card" :class="extraClasses">
    <div class="card-header" v-if="!noCardHeader">
      <h3 v-if="title" class="card-title">
        <slot name="card-title"></slot>
      </h3>
      <slot name="card-header"></slot>
    </div>

    <div class="card-body">
      <slot name="card-body"></slot>
    </div>

    <div class="card-footer" v-if="hasCardFooter">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "extraClasses", "noCardHeader", "hasCardFooter"],
};
</script>

<style lang="scss" scoped>
.chaos-card {
  background: #fff;
  border-radius: var(--radius);
  padding: 2rem;
}
.card-title {
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 0.1rem solid var(--border-color);
}
.chaos-card {
  &.card-with-no-padding {
    padding: 0;
    .card-header,
    .card-footer {
      padding: 1.5rem 2rem;
    }
  }
  .card-footer {
    border-top: 0.1rem solid #dce5ea;
  }
}
.chaos-card__with-offseted-table {
  padding-bottom: 1rem;
}
</style>