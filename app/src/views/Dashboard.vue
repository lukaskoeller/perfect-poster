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
  setup() {
    onMounted(() => {
      console.log('Connect to websocket');
      const wss = new WebSocket('ws://localhost:8081');

      wss.onopen = () => {
        wss.send('newSession');
      };

      wss.onmessage = (event) => {
        console.log(JSON.parse(event.data));
      };
    });
  },
});
</script>

<style scoped>

</style>
