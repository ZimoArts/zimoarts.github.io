<template>
    <div>
        <div class="mt-12">
            <div v-html="item.title"></div>
            <div v-html="item.subTitle"></div>
        </div>
        <div class="flex justify-start relative mt-12">
            <div class="w-7/12">
                <div class="flex justify-start">
                    <VideoPlayerComponent style="height: 360px; width: 630px;" :v-url="item.videoUrl" />
                </div>
            </div>
            <div class="w-5/12 ml-6 h-80">
                <div class="w-full h-full flex items-center">
                    <span v-html="item.description"></span>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-end mt-24">
            <div class="w-9/12 flex">
                <div class="w-1/3 border border-black">
                    <img @click="handleTapImage(item.image1)" class="w-full p-3 object-scale-down hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.image1" alt="">
                </div>
                <div class="w-1/3 border border-black ml-4">
                    <img @click="handleTapImage(item.image2)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.image2" alt="">
                </div>
                <div class="w-1/3 border border-black ml-4">
                    <img @click="handleTapImage(item.image3)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.image3" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { v3ImgPreviewFn } from 'v3-img-preview'
import VideoPlayerComponent from '../VideoPlayerComponent.vue';

const props = defineProps({
    itemDetail: Object
})

let item = ref({})
const contentType = ref(0)
item = props.itemDetail
contentType.value = item.type

const hasTitleImageImage = ref(false)
if (item.titleImage != "") {
    hasTitleImageImage.value = true
}

function handleTapImage(url) {
    v3ImgPreviewFn(url)
}


</script>
