<script>
import axios from "axios"
import { BASE_URL } from "../globals"
export default {
  name: "AddStudent",
  data: function () {
    return {
      name: "",
      email: "",
      id: null,
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
      this.name = ""
      this.email = ""
      this.id = null
    },
  },
}
</script>

<template>
  <div class="student-form">
    <form action="" @submit="handleSubmit" class="studentForm">
      <span class="addForm">Add Student</span>

      <input
        type="text"
        placeholder="Full Name"
        class="form--input"
        id="name"
        @change="handleFormChange"
        :value="name"
      />

      <input
        type="number"
        placeholder="Student ID"
        class="form--input"
        id="id"
        @change="handleFormChange"
        :value="id"
      />

      <input
        type="email"
        id="email"
        @change="handleFormChange"
        :value="email"
        placeholder="Email"
        class="form--input"
      />

      <button class="form--submit">Add</button>
    </form>
  </div>
</template>
