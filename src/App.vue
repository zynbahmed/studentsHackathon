<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: "App",
  components: { NavBar },
}
</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="Students"></router-view>
    </main>
  </div>
</template>

<style></style>
