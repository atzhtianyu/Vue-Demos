<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <avatar />
    <gradient />
    <todo-list />
    <todo-detail />
    <todo-editing />
    <floating-button />
  </div>
</template>

<script>
import Gradient from "../../components/content/Gradient.vue";
import AppBar from "../../components/common/AppBar.vue";
import Avatar from "./childComps/Avatar.vue";
import TodoList from "../../components/content/TodoList.vue";
import TodoDetail from "../../components/content/TodoDetail.vue";
import TodoEditing from "../../components/content/TodoEditing.vue";
import FloatingButton from "../../components/content/FloatingButton.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton,
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  // background: linear-gradient(30deg, #ff6262, #ffa947);
}
</style>
