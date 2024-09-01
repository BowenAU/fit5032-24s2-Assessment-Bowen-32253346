<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { role } from '../router/index'

const router = useRouter()

const formData = ref({
    username: '',
    password: '',
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
const submitForm = () => {
    //validate the user name is valid
    validateName(true)
    //validate the password is valid
    validatePassword(true)
    //validate that the user name and password match
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const username = formData.value.username;
    const pwd = formData.value.password;
    const user = users.find(user => user.username === username && user.password === pwd)
    if (user) {
        alert('success!')
        //If it matches, the user is allowed to log in and redirect to the home page
        //redirect
        role.value = user.role
        router.push({ name: 'home' })
    } else {
        //otherwise, a login failure message is displayed
        alert('Login info wrong, please check your username or password')
    }
}
const errors = ref({
    username: null,
    password: null,
    confirmPassword: null,
})
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">MigrantCare</h1>
                <p class="text-center">
                    Allow user to login to our MigrantCare system
                </p>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6 col-sm-6 offset-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" @blur="() => validateName(true)"
                                @input="() => validateName(false)" v-model="formData.username" />
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
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
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>