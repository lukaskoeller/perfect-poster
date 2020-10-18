<template>
  <div class="bottom-nav">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BottomNav',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* padding: var(--spacing-4); */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  grid-gap: 1px;
}
</style>
