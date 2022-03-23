<template>
<NavBar />
  <!--main content-->
  <div class="row">
    <div class="column side"></div>
    <div class="column middle">
      <div class="middleText">
        <h1>
          cd contact
          <div>_</div>
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
        lorem, egestas id tortor eu, tristique tincidunt nisl. Cras vestibulum
        semper porttitor. In sed magna fermentum, suscipit orci a, viverra arcu.
        Nullam ligula est, interdum tincidunt eleifend sodales, vehicula ac dui.
        Donec in feugiat arcu. Curabitur feugiat pellentesque dui.
      </p>
      <h2 class="topbottomtext"></h2>
    </div>
    <div class="column side"></div>
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";
export default {
  components: {
    NavBar,
  }
};
</script>

<style>
</style>