<template>
    <div class="text-lg font-bold">{{ item.title }}</div>
    <div class="w-72">{{ item.subTitle }}</div>
    <div class="flex justify-start mt-9">
        <div class="w-2/5">
            <div class="flex justify-center">
                <VideoPlayerComponent class="border border-black mt-3" style="height: 307px; width: 520px;"
                    :v-url="item.videoUrl" />
            </div>
            <div class="mt-2">
                <div v-html="item.videoTitle"></div>
            </div>
            <img @click="handleTapImage(item.mainImage)" class="w-full mb-4 mt-24 object-contain hover:cursor-pointer"
                :src="item.mainImage" alt="">
        </div>
        <div class="w-3/5 ml-6">
            <div class="relative h-full">
                <span v-html="item.description"></span>
                <div class="absolute bottom-4 right-0">
                    <div class="flex justify-end">
                        <template v-for="image in item.imageList">
                            <img @click="handleTapImage(image)" class="w-1/3 pl-3 object-contain hover:cursor-pointer"
                                :src="image" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-9">
        <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
        <div class="w-64 text-sm">{{ item.size }}</div>
        <div class="text-sm">{{ item.material }}</div>
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
