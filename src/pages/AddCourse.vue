<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
  name: 'AddCourse',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    handleFormChange(event) {
      this[event.target.id] = event.target.value
    },
    async handleSubmit(event) {
      event.preventDefault()
      const course = { name: this.name }
      await axios.post(`${BASE_URL}/courses`, course)
      this.name = ''
    }
  }
}
</script>

<template>
  <div class="course-form">
    <form action="" @submit="handleSubmit">
      <label for="name">Name</label>
      <input type="text" id="name" @change="handleFormChange" :value="name" />
      <button>Add</button>
    </form>
  </div>
</template>
