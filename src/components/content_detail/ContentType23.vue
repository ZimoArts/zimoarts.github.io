<template>
    <div class="flex justify-start pt-28 pb-28 mr-9 ml-9">
        <div class="w-3/5">
            <div class="flex justify-center">
                <VideoPlayerComponent class="border border-black mt-3" style="height: 307px; width: 520px;"
                    :v-url="item.videoUrl" />
            </div>
        </div>
        <div class="w-2/5 ml-6">
            <div class="relative h-full">
                <span v-html="item.description"></span>
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
