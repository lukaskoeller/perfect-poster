<template>
  <div class="new-game">
    <h1>Wait for players.</h1>
    <GameLink></GameLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameLink from '@/components/GameLink.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    GameLink,
  },
});
</script>

<style scoped>

</style>
