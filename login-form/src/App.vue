<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: inherit;
}

ul,
ol {
  list-style: none;
}

input,
select,
button {
  font: inherit;
}

html,
body {
  height: 100%;
}

body {
  background-color: #007dff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
