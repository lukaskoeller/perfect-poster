<template>
  <div class="home">
    <h1>Caramba! Welcome to perfect poster 👋</h1>
    <Card>
      <h2>Join Game</h2>
      <Input placeholder="Enter ID" />
    </Card>
    <Button fullWidth="true">New Game</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Card,
    Input,
    Button,
  },
});
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
