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
  --primary-color-lighten-3: hsl(256, 71%, 26%);
  --primary-color-lighten-4: hsl(256, 71%, 30%);
  --primary-color-lighten-5: hsl(256, 71%, 34%);
  --primary-color-lighten-6: hsl(256, 71%, 38%);
  --primary-color-lighten-7: hsl(256, 71%, 42%);
  --secondary-color: hsl(223, 80%, 39%);
  --highlight-color: hsl(22, 100%, 43%);
  --light-color: hsl(256, 100%, 93%);
  --text-color: var(--light-color);

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
  --input-radius: calc(var(--base-spacing) * 4);
  --button-radius: calc(var(--base-spacing) * 4);

  /* Font Families */
  --font-family-base: Avenir, Helvetica, Arial, sans-serif;

  /* Font Sizes */
  --base-font-size: 16px;
  --input-font-size: 20px;
  --button-font-size: 20px;

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 600;

  /* Transitions */
  --transition: 0.25s ease;
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
  font-family: var(--font-family-base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  /* width: fit-content; */
  padding: var(--spacing-2);
}

/* Light Theme */
/* [data-theme="light"] {

} */

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  margin-bottom: var(--spacing-1);
}
</style>
