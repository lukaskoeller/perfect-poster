<template>
  <input class="input" :type="type" :placeholder="placeholder" :value="value" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    type: String,
    placeholder: String,
    value: {
      type: String,
      default: '',
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  background-color: var(--primary-color-lighten-2);
  border: none;
  padding: var(--spacing-6) var(--spacing-4);
  border-radius: var(--input-radius);

  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  font-size: var(--input-font-size);
  color: var(--text-size);

  box-shadow: inset 0px 0px 0px 2px var(--primary-color-lighten-6);

  width: 100%;
  text-align: center;
}

.input:focus {
  outline: none;
}

::placeholder {
  color: var(--primary-color-lighten-7);
}
</style>
