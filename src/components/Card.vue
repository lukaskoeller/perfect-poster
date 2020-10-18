<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  //   props: {
  //     msg: String,
  //   },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: min(600px, 100%);
  padding: var(--spacing-5);
  background-color: var(--primary-color-lighten-2);
  border-radius: var(--card-radius);
}
</style>
