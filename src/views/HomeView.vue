<template>
  <div class="carousel-container">
    <carousel
      :items-to-show="1.5"
      :wrap-around="true"
      :autoplay="3000"
      @mouseover="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <slide v-for="slide in slides" :key="slide.id">
        <div class="slide-content">
          <img :src="slide.image" alt="slide image" class="slide-image" />
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

import AustraliaHealthcare1 from '@/assets/Australia_Healthcare.webp'
import AustraliaHealthcare2 from '@/assets/AustraliaHealthcare_3.webp'
import AustralianFlagAndChineseFlag from '@/assets/Australian_flag_and_Chinese_flag_2.jpeg'
import AustraliaNurse from '@/assets/AustraliaNurse.jpeg'
import GroupPhotoOfNurses from '@/assets/Group_photo_of_nurses.jpeg'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const slides = ref([
      {
        id: 1,
        title: 'A Symbol of Care and Service',
        description:
          "The image shows a doctor holding a stethoscope with the Australian flag in the background, symbolizing the care and professionalism of Australia's healthcare system.",
        image: AustraliaHealthcare1
      },
      {
        id: 2,
        title: "Australia's Healthcare Commitment",
        description:
          'The image displays a healthcare professional’s uniform with a stethoscope and an Australia-shaped badge featuring the Australian flag.',
        image: AustraliaHealthcare2
      },
      {
        id: 3,
        title: 'Australia and China: Bridging Communities',
        description:
          'This image showcases the flags of Australia and China side by side, symbolizing the close ties between the two nations.',
        image: AustralianFlagAndChineseFlag
      },
      {
        id: 4,
        title: "United for Healthcare: Australia's Medical Team",
        description:
          'This image illustrates a diverse group of healthcare professionals in Australia, standing together in front of the national flag.',
        image: AustraliaNurse
      },
      {
        id: 5,
        title: 'Healthcare Heroes: A Diverse Medical Team',
        description:
          'This image depicts a group of young, diverse healthcare professionals in Australia, symbolizing the next generation of caregivers.',
        image: GroupPhotoOfNurses
      }
    ])

    const isAutoplaying = ref(true)

    const pauseAutoplay = () => {
      isAutoplaying.value = false
    }

    const resumeAutoplay = () => {
      isAutoplaying.value = true
    }

    return {
      slides,
      isAutoplaying,
      pauseAutoplay,
      resumeAutoplay
    }
  }
}
</script>

<style scoped>
.carousel-container {
  width: 80%;
  margin: 80px auto; 
  padding: 20px; 
}

.slide-content {
  text-align: center;
  padding: 10px; 
}

.slide-image {
  width: 100%;
  height: 350px; 
  object-fit: cover; 
  border-radius: 10px; 
}

h3 {
  margin: 15px 0 5px; 
  font-size: 22px;
  font-weight: bold;
}

p {
  font-size: 14px; 
  line-height: 1.6; 
  margin: 0 15px; 
}

.carousel .carousel__slide {
  padding: 0 20px; 
}

.carousel__pagination {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
