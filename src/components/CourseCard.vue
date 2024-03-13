<script>
import AddCourse from '../pages/AddCourse.vue'

export default {
  name: 'CourseCard',
  data: function () {
    return {
      grade: null
    }
  },
  props: ['course', 'student'],
  mounted() {
    this.getGrade()
  },
  methods: {
    getGrade() {
      if (!this.course || !this.course.grades) {
      }

      const studentGrade = this.course.grades.find(
        (gradeEntry) => gradeEntry.student._id.toString() === this.student._id.toString()
      )

      if (studentGrade) {
        this.grade = studentGrade.grade
    }
  }
  }
}
</script>

<template>
  <div class="course-card">
    <h3>Course: {{ course.name }}</h3>
    <p>
      Grade:
      {{ this.grade ? this.grade.letter || this.grade : 'N/A' }}
    </p>
  </div>
</template>
