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
      const sorted = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
      this.students = sorted
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
  <h3 class="hpTitle">Student List</h3>
  <div>
    <div class="group">
      <input
        @input="filterStudents"
        v-model="search"
        placeholder="Search by name"
        class="studentListInput"
      />
      <div>
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
    </div>
  </div>
</template>
