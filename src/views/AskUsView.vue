<template>
  <div class="ask-us-container">
    <h1>Ask Us</h1>
    <p>Have any questions? Ask us and get answers instantly!</p>

    <!-- FAQ Section -->
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li v-for="(faq, index) in faqs" :key="index" @click="toggleAnswer(index)">
          <strong>{{ faq.question }}</strong>
          <p v-if="faq.show">{{ faq.answer }}</p>
        </li>
      </ul>
    </section>

    <!-- User Input Section -->
    <div class="ask-input-section">
      <h3>Ask Your Own Question</h3>
      <textarea 
        v-model="userQuestion" 
        placeholder="Type your question here..." 
        rows="4"
      ></textarea>
      <button @click="submitQuestion">Ask AI Assistant</button>
    </div>

    <!-- Chat Display Section -->
    <div class="chat-section">
      <div v-for="(chat, index) in chats" :key="index" class="chat-message">
        <div class="user-message">
          <strong>You:</strong> {{ chat.question }}
        </div>
        <div class="chatgpt-response">
          <strong>ChatGPT:</strong> {{ chat.answer }}
        </div>
      </div>
    </div>

    <!-- Error message -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AskUsView',
  data() {
    return {
      userQuestion: '',  // 用户输入的问题
      chats: [],         // 用于保存问题和 ChatGPT 回答
      errorMessage: '',  // 错误信息提示
      faqs: [
        { question: 'What services does MigrantCare offer for newly arrived immigrants?', answer: 'MigrantCare offers a range of services such as healthcare information, language learning resources, career resources, and cultural integration programs.', show: false },
        { question: 'How can I access healthcare services as a new migrant?', answer: 'You can access healthcare services through our Health Information section, which provides details about local healthcare facilities and insurance options.', show: false },
        { question: 'Where can I find language learning resources?', answer: 'You can find language learning resources under the "Language Learning" section of our website. We offer guides and links to online language courses and local language schools.', show: false },
        { question: 'What cultural integration programs are available?', answer: 'Our cultural integration programs offer workshops, community events, and counseling services to help you better integrate into your new environment.', show: false },
        { question: 'How can I search for a job as a migrant?', answer: 'Our Career Resources section provides tools for job searching, tips for building resumes, and information on industries that are actively hiring.', show: false },
        { question: 'Are there any mentorship programs for new migrants?', answer: 'Yes, we offer mentorship programs where experienced migrants can help guide you through your first steps in a new country.', show: false },
        { question: 'How do I get in contact with MigrantCare for specific inquiries?', answer: 'You can use our "Contact Us" page to reach out to us directly for any specific questions or concerns you may have.', show: false },
        { question: 'How can I find local community centers?', answer: 'Our "Find Us" section lists local community centers and organizations where you can meet other migrants and access additional services.', show: false },
        { question: 'Can MigrantCare help with legal advice?', answer: 'While we do not provide direct legal services, we can refer you to trusted legal professionals who specialize in migrant law.', show: false },
        { question: 'How do I know if I’m eligible for government assistance programs?', answer: 'Visit our "Inform" section for guidance on eligibility requirements and how to apply for various government assistance programs.', show: false },
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].show = !this.faqs[index].show;
    },
    async submitQuestion() {
      if (!this.userQuestion.trim()) {
        this.errorMessage = "Please enter a valid question.";
        return;
      }

      this.errorMessage = ""; // 清空错误信息

      try {
      //   const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003',
            prompt: this.userQuestion,
            max_tokens: 150,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
          }
        );

        const answer = response.data.choices[0].text.trim();
        
        // 保存用户问题和 ChatGPT 回答
        this.chats.push({
          question: this.userQuestion,
          answer: answer
        });

        // 清空用户输入
        this.userQuestion = '';
      } catch (error) {
        this.errorMessage = 'Sorry, something went wrong while fetching the answer.';
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style scoped>
.ask-us-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
}

.faq-section {
  margin-bottom: 40px;
}

.faq-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.faq-section ul {
  list-style-type: none;
  padding: 0;
}

.faq-section li {
  background-color: #007bff;
  color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.faq-section li:hover {
  background-color: #0056b3;
}

.faq-section p {
  margin-top: 10px;
  font-size: 1em;
  color: white;
}

.ask-input-section {
  text-align: center;
  margin-bottom: 30px;
}

textarea {
  width: 100%;
  max-width: 800px;
  padding: 15px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.chat-section {
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.chat-message {
  border-bottom: 1px solid #eee;
  padding: 15px;
}

.user-message {
  color: #007bff;
  font-size: 1.1em;
}

.chatgpt-response {
  color: #333;
  font-size: 1.1em;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>