<template>
    <div class="flex justify-start pt-28 mr-9 ml-9">
        <div class="w-3/5">
            <div class="text-lg font-bold">{{ item.title }}</div>
            <div class="w-72">{{ item.subTitle }}</div>
            <div class="flex justify-start">
                <VideoPlayerComponent class="border border-black mt-3" style="height: 408px; width: 680px;"
                    :v-url="item.videoUrl" />
            </div>
        </div>
        <div class="w-2/5 ml-6">
            <div class="relative h-full">
                <span v-html="item.description"></span>
                <div class="w-full flex justify-center">
                    <VideoPlayerComponent class="border border-black mt-16" style="height: 240px; width: 400px;"
                        :v-url="item.subVideoUrl" />
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
