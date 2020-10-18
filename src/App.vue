<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
:root {
  /* Colors */
  --primary-color: hsl(256, 71%, 14%);
  --primary-color-lighten-1: hsl(256, 71%, 18%);
  --primary-color-lighten-2: hsl(256, 71%, 22%);
  --secondary-color: hsl(223, 80%, 39%);
  --highlight-color: hsl(22, 100%, 43%);
  --text-color: hsl(256, 100%, 93%);

  /* Spacing */
  --base-spacing: 4px;
  --spacing-1: calc(var(--base-spacing) * 1);
  --spacing-2: calc(var(--base-spacing) * 2);
  --spacing-3: calc(var(--base-spacing) * 3);
  --spacing-4: calc(var(--base-spacing) * 4);
  --spacing-5: calc(var(--base-spacing) * 5);
  --spacing-6: calc(var(--base-spacing) * 6);
  --spacing-7: calc(var(--base-spacing) * 7);
  --spacing-8: calc(var(--base-spacing) * 8);
  --spacing-9: calc(var(--base-spacing) * 9);
  --spacing-10: calc(var(--base-spacing) * 10);

  /* Radii */
  --card-radius: calc(var(--base-spacing) * 4);

  /* Font Sizes */
  --base-font-size: 16px;
}

html {
  margin: auto;
  box-sizing: border-box;
  font-size: var(--base-font-size);
}

* {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  margin: auto;
  background-color: var(--primary-color);
  font-size: var(--base-font-size);
  color: var(--text-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: fit-content;
  padding: var(--spacing-2);
}

/* [data-theme="light"] {

} */
</style>
