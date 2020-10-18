<template>
  <div class="home">
    <h1>Caramba! Welcome to perfect poster 👋</h1>
    <Card>
      <h2>🧑‍🎨 Card Component</h2>
    </Card>
    <BottomNav>
      <BottomButton to="/join">Join Game</BottomButton>
      <BottomButton to="/new">New Game</BottomButton>
    </BottomNav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import BottomNav from '@/components/BottomNav.vue';
import BottomButton from '@/components/BottomButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Card,
    BottomNav,
    BottomButton,
  },
});
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
