<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-2/5">
            <div class="w-full mt-6">
                <div class="flex justify-end">
                </div>
            </div>
        </div>
        <div class="w-3/5 h-full">
            <div class="w-full mt-6">
                <div class="flex justify-start">
                    <img @click="handleTapImage(item.image1)" class="w-1/2 mb-4 object-contain hover:cursor-pointer"
                        :src="item.image1" alt="">
                    <img @click="handleTapImage(item.image2)" class="w-1/2 mb-4 object-contain hover:cursor-pointer"
                        :src="item.image2" alt="">
                </div>
            </div>
            <div class="mt-9">
                <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-sm">{{ item.size }}</div>
                <div class="text-sm">{{ item.material }}</div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { v3ImgPreviewFn } from 'v3-img-preview'

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
