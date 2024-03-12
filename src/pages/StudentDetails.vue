<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import CourseCard from '../components/CourseCard.vue'

export default {
  name: 'StudentDetails',
  components: { CourseCard },
  data: function () {
    return {
      student: {},
      courses: [],
      grades: [],
      selectedCourse: null,
      selectedGrade: null
    }
  },
  mounted() {
    this.getDetails()
    this.getCourses()
    this.getGrades()
  },
  methods: {
    async getDetails() {
      const id = this.$route.params.id
      const response = await axios.get(`${BASE_URL}/students/${id}`)
      this.student = response.data
    },
    async getCourses() {
      const response = await axios.get(`${BASE_URL}/courses`)
      this.courses = response.data
    },
    async getGrades() {
      const response = await axios.get(`${BASE_URL}/grades`)
      this.grades = response.data
    },
    async enroll() {
      const id = this.$route.params.id
      const course = { course: this.selectedCourse }
      await axios.put(`${BASE_URL}/students/${id}`, course)
      this.courses = ''
    },
    selectCourse(event) {
      this.selectedCourse = event.target.value
    },
    selectGrade(event) {
      this.selectedGrade = event.target.value
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
      <select v-if="courses" name="courses" @change="selectCourse">
        <option v-for="course in courses" :value="course._id">
          {{ course.name }}
        </option>
      </select>
      <select v-if="grades" name="grades" @change="selectGrade">
        <option v-for="grade in grades" :value="grade._id">
          {{ grade.letter }}
        </option>
      </select>
      <button @click="enroll">Enroll</button>
    </div>
    <h3>Registered in:</h3>
    <div class="course-list">
      <CourseCard
        v-for="course in student.courses"
        :course="course"
        :student="student"
      />
    </div>
  </div>
</template>
