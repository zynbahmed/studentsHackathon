<script>
import AddCourse from '../pages/AddCourse.vue'

export default {
  name: 'CourseCard',
  data: function () {
    return {
      grade: ''
    }
  },
  props: ['course', 'student']
}
</script>

<template>
  <div class="course-card">
    <h3>Course: {{ course.name }}</h3>
    <p>
      Grade:
      {{
        course.grades.find(
          ({ studentCheck }) => studentCheck._id === student._id
        )?.grade.letter
      }}
    </p>
  </div>
</template>
