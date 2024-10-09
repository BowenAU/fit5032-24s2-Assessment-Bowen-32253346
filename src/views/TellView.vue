<template>
    <h1>Tell them</h1>
 
    <div class="container text-center" >
  <div class="row mb-3">
    <div class="offset-4 col-4" >
        <input  
                placeholder="Email"
                type="text"
                class="form-control"
                id="email"
                v-model="email"
    />
    </div>
  </div>
  <div class="row mb-3">
    <div class="offset-4 col-4">
        <input
                placeholder="Name"
                type="text"
                class="form-control"
                id="name"
                v-model="name"
    />
    </div>
  </div>
  <button @click="sendEmail" class="btn btn-primary me-2">Send Email</button>
</div>

</template>

<script setup>

import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const email = ref('')
const name = ref('')

const sendEmail = async () => {
    // console.log(email.value, name.value)
    try { emailjs.init('woIvKzjWPZjbeCrVo');
    emailjs.send('service_Bowen5032', 'template_emqvjc3',{
to_name: name.value,
from_name: "FIT5032_Bowen",
message: "Hello",
to_email: email.value
} );
    } catch (error) {
        console.log(error)
        
    }
}



</script>