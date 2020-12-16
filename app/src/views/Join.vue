<template>
  <h1>Joining game <strong>{{ $route.params.id }}</strong></h1>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Join',
  setup() {
    const route = useRoute();

    onMounted(() => {
      fetch(`http://localhost:8081/join/${route.params.id}`);
    });
  },
});
</script>

<style scoped>

</style>
