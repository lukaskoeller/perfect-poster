<template>
  <keep-alive>
    <component
      :is="type"
      :to="to"
      :fullWidth="fullWidth"
      :class="
        fullWidth
          ? 'full-width'
          : ''
      "
      class="button">
      <slot />
    </component>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    to: {
      required: false,
      default: '',
    },
    fullWidth: { required: false },
  },
  setup(props) {
    const type = computed(() => (props.to ? 'router-link' : 'button'));

    return {
      type,
    };
  },
});
</script>

<style scoped>
.button {
  display: inline-block;
  padding: var(--spacing-7) var(--spacing-4);
  background-color: var(--primary-color-lighten-2);
  color: var(--text-color);
  border-radius: var(--button-radius);
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  overflow: hidden;

  box-shadow: inset 0px 0px 0px 2px var(--primary-color-lighten-6);

  font-size: var(--button-font-size);
  transition: var(--transition);
}

.button:hover {
  background-color: var(--highlight-color);
}

.full-width {
  width: 100%;
}
</style>
