<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { role as Role } from '../router/index'
import { username as Username } from '../router/index'

const router = useRouter()

const formData = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}
const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}
const submitForm = () => {
  //validate the user name is valid
  validateName(true)
  //validate the password is valid
  validatePassword(true)
  //after the authentication is successful, the user information is stored in the localStorage
  const username = formData.value.username
  const pwd = formData.value.password
  //gets a value from the form data
  let users = JSON.parse(localStorage.getItem('users')) || []
  const isExist = users.some((user) => user.username === username)
  if (isExist) {
    alert('User Name has been used')
    clearForm()
  } else {
    const role = username.toLowerCase().includes('volunteer') ? 'volunteer' : 'users'
    users.push({
      username: username,
      password: pwd,
      role: role
    })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Success!')
    Role.value = role
    Username.value = username
    router.push('/')
  }
  //if it matches, the user is allowed to log in and jump to the home page
  //otherwise, a login failure message is displayed
}
const errors = ref({
  username: null,
  password: null,
  confirmPassword: null
})

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: ''
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Sign Up</h1>
        <p class="text-center">Make it Happen</p>
        <p class="text-center">Join now</p>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
