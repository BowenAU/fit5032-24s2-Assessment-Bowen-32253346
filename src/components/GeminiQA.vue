<template>
    <div>
        <h1 class="mb-5">Ask Your Own Question</h1>

        <!-- 问题提交表单 -->
        <form class="mb-5" @submit.prevent="fetchAnswer">
            <div>
                <textarea name="question" id="question" cols="105" rows="5" v-model="question"></textarea>
            </div>
            <button type="submit" :disabled="!question">
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
        const question = ref('');
        const answer = ref('');
        const isLoading = ref(false);
        const errorMessage = ref('');

        // 调用 Gemini AI API 获取回答
        const fetchAnswer = async () => {
            answer.value = '';
            errorMessage.value = '';
            isLoading.value = true;

            try {
                const VITE_GOOGLE_AI_STUDIO_API_KEY = 'AIzaSyCeAaZdiXBXFWbNUnx-bziXMtqtAuqtz5Q';
                const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_STUDIO_API_KEY);
                const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

                const result = await model.generateContent(question.value);
                const response = await result.response;
                answer.value = await response.text();
            } catch (error) {
                console.log({ error });
                errorMessage.value = '抱歉，获取回答时出现问题。请稍后再试。';
            } finally {
                isLoading.value = false;
                question.value = '';
            }
        };
        return {
            question,
            answer,
            isLoading,
            errorMessage,
            fetchAnswer,
        };
    },
};
</script>
  
<style scoped>
.mb-5 {
    margin-bottom: 5rem;
}

.mb-10 {
    margin-bottom: 10rem;
}

.error-message {
    color: red;
}
</style>