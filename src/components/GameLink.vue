<template>
  <Card class="game-link">
    <h2>
      <span class="game-name">Game name</span>
      <span class="game-id"> #133789</span>
    </h2>
    <Input type="text" value="https://perfectposter.de/game/133789" />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'GameLink',
  components: {
    Card,
    Input,
  },
  //   props: {
  //     msg: String,
  //   },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-id {
  color: var(--primary-color-lighten-7);
}
</style>
