<script>
import axios from 'axios'
import { BASE_URL } from '../globals'

export default {
  name: 'StudentDetails',
  data: function () {
    return {
      student: {},
      courses: []
    }
  },
  mounted() {
    this.getDetails()
    this.getCourses()
  },
  methods: {
    async getDetails() {
      const id = this.$route.params.id
      const response = await axios.get(`${BASE_URL}/students/${id}`)
      this.student = response.data
    },
    async getCourses() {
      const response = await axios.get(`${BASE_URL}/courses`)
      this.courses = response.data.filter((course) => {
        if (!this.student.courses.includes(course.name)) {
          return course
        }
      })
    }
  }
}
</script>

<template>
  <div class="student-details">
    <h2>Name: {{ student.name }}</h2>
    <h3>Email: {{ student.email }}</h3>
    <h3>ID: {{ student.id }}</h3>
    <div class="enroll">
      <select name="courses">
        <option v-for="course in courses" :value="course._id">
          {{ course.name }}
        </option>
      </select>
      <button @click="enroll">Enroll</button>
    </div>
  </div>
</template>
