<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <div class="nav">
    <router-link to="/" name="Home">Home</router-link>
    <router-link to="/addstudent">Add Student</router-link>
    <router-link to="/addcourse">Add Course</router-link>
  </div>
</template>
