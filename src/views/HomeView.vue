<template>
  <div class="carousel-container">
    <carousel
      :items-to-show="1.5"
      :wrap-around="true"
      :autoplay="5000"
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
        title: 'Australia Healthcare 1',
        description: 'This is an image of the Australian healthcare system 1',
        image: AustraliaHealthcare1
      },
      {
        id: 2,
        title: 'Australia Healthcare 2',
        description: 'This is an image of the Australian healthcare system 2',
        image: AustraliaHealthcare2
      },
      {
        id: 3,
        title: 'Australian and Chinese Flags',
        description: 'Flags of Australia and China',
        image: AustralianFlagAndChineseFlag
      },
      {
        id: 4,
        title: 'Australian Nurse',
        description: 'An image showing an Australian nurse',
        image: AustraliaNurse
      },
      {
        id: 5,
        title: 'Group Photo of Nurses',
        description: 'A group photo of nurses',
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
  margin: 0 auto;
}

.slide-content {
  text-align: center;
}

.slide-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

h3 {
  margin: 10px 0;
  font-size: 24px;
}

p {
  font-size: 16px;
}
</style>
