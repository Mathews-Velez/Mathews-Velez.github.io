<template>
  <NavBar />
    <body>
      <!--main content-->
      <div class="row">
        <div class="column side"></div>
        <div class="column middle">
          <div class="middleText">
            <h1>
              cd about
              <div>_</div>
            </h1>
          </div>
          <p>
            Agile and disciplined programmer with 4 years of programming
            experience . Experience in Python, Java, HTML, CSS. Comfortable
            using Linux based OS in day to day workflow. Fast and resourceful
            learner. Always working on projects to have more experience and
            knowledge in the field of software and electrical engineering.
          </p>
          <h2 class="topbottomtext"></h2>
        </div>
        <div class="column side"></div>
      </div>
    </body>
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