<template>
    <div class="w-64 text-lg font-bold">{{ item.title }}</div>
    <div class="w-56">{{ item.subTitle }}</div>
    <div class="flex justify-start mt-28">
        <div class="w-3/5">
            <template v-for="mainImage in item.mainImageList">
                <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer"
                    :src="mainImage" alt="">
            </template>
        </div>
        <div class="w-2/5 ml-6">
            <div class="relative h-full">
                <div class="">{{ item.description }}</div>
                <div class="absolute bottom-4 right-0">
                    <div class="flex justify-end mt-9">
                        <template v-for="image in item.imageList">
                            <img @click="handleTapImage(image)" class="w-3/4 bg-gray-50 object-contain hover:cursor-pointer"
                                :src="image" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-9">
        <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
        <div class="w-64 text-sm">{{ item.bottomSubTitle }}</div>
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
