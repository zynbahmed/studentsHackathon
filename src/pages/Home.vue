<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import StudentCard from '../components/StudentCard.vue'

export default {
  name: 'Home',
  components: { StudentCard },
  data: function () {
    return {
      students: [],
      filteredStudents: [],
      search: null
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
    async getStudents() {
      const response = await axios.get(`${BASE_URL}/students`)
      this.students = response.data
    },
    selectStudent(id) {
      this.$router.push(`/students/${id}`)
    },
    filterStudents() {
      const searching = this.search.toLowerCase()
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(searching)
      )
    }
  }
}
</script>

<template>
  <div>
    <h3>Home page</h3>
    <input
      @input="filterStudents"
      v-model="search"
      placeholder="Search by name"
    />
    <div v-if="this.search">
      <div class="students-list">
        <StudentCard
          v-for="student in filteredStudents"
          :student="student"
          @click="selectStudent(student._id)"
        />
      </div>
    </div>
    <div v-else>
      <div class="students-list">
        <StudentCard
          v-for="student in students"
          :student="student"
          @click="selectStudent(student._id)"
        />
      </div>
    </div>
  </div>
</template>
