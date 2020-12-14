<template>
  <div class="new-game">
    <h1>Wait for players.</h1>
    <GameLink></GameLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import GameLink from '@/components/GameLink.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    GameLink,
  },
  connect() {
    onMounted(() => {
      console.log('connect to websocket');
      const wss = new WebSocket('ws://localhost:8081');

      wss.onopen = () => {
        wss.send('Here\'s some text that the server is urgently awaiting!');
      };
    });
  },
});
</script>

<style scoped>

</style>
