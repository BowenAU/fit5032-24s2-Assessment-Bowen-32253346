<template>
  <div>
    <h1 class="mb-5">Ask Your Own Question</h1>

    <!-- 问题提交表单 -->
    <form class="mb-5" @submit.prevent="fetchAnswer">
      <div>
        <label for="question" class="sr-only">Type your question here</label>
        <textarea
          name="question"
          id="question"
          cols="105"
          rows="5"
          v-model="question"
          placeholder="Type your question here..."
          aria-label="Ask your question"
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="!question"
        :aria-busy="isLoading"
        aria-live="polite"
        class="ask-button"
      >
        {{ isLoading ? 'Asking Gemini...' : 'Ask' }}
      </button>
    </form>

    <!-- 回答显示区域 -->
    <div class="mb-10">
      <p v-if="answer">{{ answer }}</p>
    </div>

    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
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

    // 调用 Gemini AI API 获取回答
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
.mb-5 {
  margin-bottom: 5rem;
}

.mb-10 {
  margin-bottom: 10rem;
}

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
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 1.2em;
}
</style>
