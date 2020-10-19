<template>
  <component :is="type" :to="to" class="bottom-button">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BottomButton',
  props: {
    to: {
      required: false,
    },
  },
  computed: {
    type() {
      if (this.to) {
        return 'router-link';
      }
      return 'button';
    },
  },
});
</script>

<style scoped>
.bottom-button {
  display: grid;
  place-items: center;
  height: 100%;
  padding: var(--spacing-7) var(--spacing-4);
  background-color: var(--primary-color-lighten-2);
  color: var(--text-color);
  text-decoration: none;
  border: none;

  font-size: var(--base-font-size);
}
</style>
