<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
  name: 'AddStudent',
  data: function () {
    return {
      name: '',
      email: '',
      id: null
    }
  },
  methods: {
    handleFormChange(event) {
      this[event.target.id] = event.target.value
    },
    async handleSubmit(event) {
      event.preventDefault()
      const student = { name: this.name, email: this.email, id: this.id }
      await axios.post(`${BASE_URL}/students`, student)
      this.name = ''
      this.email = ''
      this.id = null
    }
  }
}
</script>

<template>
  <div class="student-form">
    <form action="" @submit="handleSubmit">
      <label for="name">Name</label>
      <input type="text" id="name" @change="handleFormChange" />
      <label for="email">Email</label>
      <input type="email" id="email" @change="handleFormChange" />
      <label for="id">ID</label>
      <input type="number" id="id" @change="handleFormChange" />
      <button>Add</button>
    </form>
  </div>
</template>
