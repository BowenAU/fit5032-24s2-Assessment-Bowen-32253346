<template>
  <div>   
    <!-- Title for the question submission form -->
    <h1 class="mb-5">Ask Your Own Question</h1>

    <!-- Question submission form -->
    <form class="mb-5" @submit.prevent="fetchAnswer" role="form">
      <div>
        <!-- Label for accessibility, screen-reader only -->
        <label for="question" class="sr-only">Type your question here</label>
        <!-- Textarea input for user to type their question -->
        <textarea
          name="question"
          id="question"
          cols="105"
          rows="5"
          v-model="question"
          placeholder="Type your question here..."
          aria-labelledby="ask-question-label"
        ></textarea>
      </div>

      <!-- Submit button container -->
      <div class="button-container">
        <button
          type="submit"
          :disabled="!question"
          :aria-busy="isLoading"
          aria-live="polite"
          class="ask-button"
        >
          {{ isLoading ? 'Asking Gemini...' : 'Ask' }}
        </button>
      </div>
    </form>

    <!-- Display area for the answer -->
    <div class="mb-10">
      <p v-if="answer">{{ answer }}</p>
    </div>

    <!-- Error message display in case of failure -->
    <div v-if="errorMessage" class="error-message" role="alert" aria-live="assertive">
      <p><i class="error-icon">⚠️</i>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default {
  setup() {
    const question = ref('')
    const answer = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')

    // Function to fetch the answer using Google Gemini AI API
    const fetchAnswer = async () => {
      answer.value = ''
      errorMessage.value = ''
      isLoading.value = true

      try {
        const VITE_GOOGLE_AI_STUDIO_API_KEY = 'AIzaSyCeAaZdiXBXFWbNUnx-bziXMtqtAuqtz5Q'
        const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_STUDIO_API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

        const result = await model.generateContent(question.value)
        const response = await result.response
        answer.value = await response.text()
      } catch (error) {
        console.log({ error })
        errorMessage.value =
          'Sorry, there was an issue fetching the answer. Please try again later.'
      } finally {
        isLoading.value = false
        question.value = ''
      }
    }

    return {
      question,
      answer,
      isLoading,
      errorMessage,
      fetchAnswer
    }
  }
}
</script>

<style scoped>

/* Margin styles */
.mb-5 {
  margin-bottom: 5rem;
}

.mb-10 {
  margin-bottom: 10rem;
}

/* Textarea styles for question input */
textarea {
  width: 100%;
  max-width: 900px;
  padding: 15px;
  font-size: 1.1em;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

textarea:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.2);
}

/* Button container styles */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Submit button styles */
.ask-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

.ask-button:hover:enabled {
  background-color: #0056b3;
}

.ask-button:disabled {
  background-color: #999; 
  cursor: not-allowed;
}

/* Error message styles */
.error-message {
  color: red;
  font-size: 1.2em;
  display: flex;
  align-items: center;
}

.error-icon {
  margin-right: 10px;
}
</style>
