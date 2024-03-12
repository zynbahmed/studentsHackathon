<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import StudentCard from '../components/StudentCard.vue'

export default {
  name: 'Home',
  components: { StudentCard },
  data: function () {
    return {
      students: []
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
    }
  }
}
</script>

<template>
  <div>
    <h3>Home page</h3>
    <div class="students-list">
      <StudentCard
        v-for="student in students"
        :student="student"
        @click="selectStudent(student._id)"
      />
    </div>
  </div>
</template>
