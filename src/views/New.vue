<template>
  <div class="new-game">
    <h1>Give your Game a name!</h1>
    <Input type="text" placeholder="Name of the Game..." />
    <BottomNav>
      <BottomButton to="/">Back</BottomButton>
      <BottomButton to="/dashboard">Continue</BottomButton>
    </BottomNav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';
import BottomNav from '@/components/BottomNav.vue';
import BottomButton from '@/components/BottomButton.vue';

export default defineComponent({
  name: 'New',
  components: {
    Input,
    BottomNav,
    BottomButton,
  },
});
</script>

<style scoped>

</style>
