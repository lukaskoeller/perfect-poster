<template>
  <div class="new-game">
    <h1>Give your Game a name!</h1>
    <Input type="text" placeholder="Name of the Game..." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'New',
  components: {
    Input,
  },
});
</script>

<style scoped>

</style>
