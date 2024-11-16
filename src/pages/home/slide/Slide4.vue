<template>
  <SlideItem>
    <SlideList
      uniqueId="home"
      style="background: #000"
      :active="props.active"
      :api="recommendedPost"
    />
  </SlideItem>
</template>

<script setup lang="jsx">
import SlideItem from '@/components/slide/SlideItem.vue'
import SlideList from './SlideList.vue'
import { recommendedPost } from '@/api/videos'

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>
