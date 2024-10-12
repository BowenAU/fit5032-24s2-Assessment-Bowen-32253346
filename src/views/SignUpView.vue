<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import db from "../firebase/init"
import Select from 'primevue/select';


const router = useRouter()

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  role: ''
})

const roles = ref(['admin', 'user', 'volunteer']);
const validateEmail = (blur) => {
  if (formData.value.email.length < 10) {
    if (blur) errors.value.email = 'Please input right Email'
  } else {
    errors.value.email = null
  }
}
const validateRole = (blur) => {
  if (formData.value.role === '') {
    if (blur) errors.value.role = 'Please select a role'
  } else {
    errors.value.role = null
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
const submitForm = async () => {
  //validate the user name is valid
  validateEmail(true)
  //validate the password is valid
  validatePassword(true)
  validateRole(true)
  //after the authentication is successful, the user information is stored in the localStorage
  const email = formData.value.email
  const pwd = formData.value.password
  const userRole = formData.value.role
  console.log(email, pwd)
  //if it matches, the user is allowed to log in and jump to the home page
  //otherwise, a login failure message is displayed
  const auth = getAuth()
  const { user } = await createUserWithEmailAndPassword(auth, email, pwd)
  const userEmail = user.email;
  const userID = user.uid;
  const role = userRole;

  try {
    await setDoc(doc(db, "users", userID), {
      email: userEmail,
      role: role
    })
    router.push('/about')
  } catch (error) {
    console.log(error)
  }
}
const errors = ref({
  email: null,
  password: null,
  confirmPassword: null,
  role: null,
})

const clearForm = () => {
  formData.value = {
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Sign Up</h1>
        <p class="text-center">Make it Happen</p >
        <p class="text-center">Join now</p >
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" @blur="() => validateEmail(true)"
                @input="() => validateEmail(false)" v-model="formData.email" />
              <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)" v-model="formData.password" />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input type="password" class="form-control" id="confirm-password" v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)" />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="text-center">
              <Select v-model="formData.role" :options="roles" placeholder="Select a Role" class="w-full md:w-56"
                @blur="() => validateRole(true)" />
              <div v-if="errors.role" class="text-danger">
                {{ errors.role }}
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