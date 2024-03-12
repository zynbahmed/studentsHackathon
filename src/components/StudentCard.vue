<script>
export default {
  name: 'StudentCard',
  props: ['student']
}
</script>

<template>
  <div class="student-card">
    <h3>Name: {{ student.name }}</h3>
    <h4>Email: {{ student.email }}</h4>
    <h4>ID: {{ student.id }}</h4>
  </div>
</template>
