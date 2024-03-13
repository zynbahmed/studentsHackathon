<script>
import axios from "axios"
import { BASE_URL } from "../globals"
import CourseCard from "../components/CourseCard.vue"

export default {
  name: "StudentDetails",
  components: { CourseCard },
  data: function () {
    return {
      student: {},
      courses: [],
      grades: [],
      selectedCourse: null,
      selectedGrade: null,
      search: null,
      filteredCourses: [],
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
      if (this.selectCourse !== null && this.selectGrade !== null) {
        const id = this.$route.params.id
        const course = {
          course: this.selectedCourse,
          grade: this.selectedGrade,
        }
        await axios.put(`${BASE_URL}/students/${id}`, course)
      }
      this.getDetails()
    },
    selectCourse(event) {
      this.selectedCourse = event.target.value
    },
    selectGrade(event) {
      this.selectedGrade = event.target.value
    },
    filterAvailableCourses() {
      if (!this.courses || !this.student.courses) {
        return []
      }

      return this.courses.filter((course) => {
        return !this.student.courses.some(
          (enrolledCourse) =>
            enrolledCourse._id.toString() === course._id.toString()
        )
      })
    },
    filterCourses() {
      const searching = this.search.toLowerCase()
      this.filteredCourses = this.student.courses.filter((course) =>
        course.name.toLowerCase().includes(searching)
      )
    },
  },
}
</script>

<template>
  <div class="studentDetailsForm">
    <span class="studentDetailsTitle">
      <p>Name: {{ student.name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>ID: {{ student.id }}</p>
      <p>GPA: {{ student.GPA  }}</p>
    </span>
    <div class="enroll">
      <select
        v-if="courses"
        name="courses"
        @change="selectCourse"
        className="form--input"
      >
        <option selected disabled>Select a Course</option>
        <option v-for="course in filterAvailableCourses()" :value="course._id">
          {{ course.name }}
        </option>
      </select>
      <select
        v-if="grades"
        name="grades"
        @change="selectGrade"
        className="form--input"
      >
        <option selected disabled>Select a Grade</option>
        <option v-for="grade in grades" :value="grade._id">
          {{ grade.letter }}
        </option>
      </select>
      <button @click="enroll" class="form--submit">Enroll</button>
    </div>

    <div class="RegisteredSection">
      <p class="RegisteredSectionTitle">Registered in:</p>
      <input
        @input="filterCourses"
        v-model="search"
        placeholder="Search by course"
        class="studentListInput"
      />
      <div v-if="this.search">
        <div class="course-list">
          <div v-for="course in filteredCourses">
            <CourseCard v-if="course" :course="course" :student="student" />
            <div class="divider"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="course-list">
          <div v-for="course in student.courses">
            <CourseCard v-if="course" :course="course" :student="student" />
            <div class="divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
