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
}
</style>
