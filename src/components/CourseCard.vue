<script>
import AddCourse from '../pages/AddCourse.vue'

export default {
  name: 'CourseCard',
  data: function () {
    return {
      grade: ''
    }
  },
  props: ['course', 'student'],
  mounted() {
    this.getGrade()
  },
  methods: {
    getGrade() {
      // console.log(course)
    }
  }
}
</script>

<template>
  <div class="course-card">
    <h3>Course: {{ course.name }}</h3>
    <p>
      Grade:
      <!-- {{ course.grades[0].student }} -->
    </p>
  </div>
</template>
