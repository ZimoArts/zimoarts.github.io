<template>
    <div class="text-lg font-bold">{{ item.title }}</div>
    <div class="w-72">{{ item.subTitle }}</div>
    <div class="flex justify-start mt-12">
        <div class="w-3/5">
            <template v-for="mainImage in item.mainImageList">
                <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                    :src="mainImage" alt="">
            </template>
        </div>
        <div class="w-2/5 ml-6">
            <template v-for="image in item.imageList">
                <div class="w-full flex justify-end mb-4">
                    <img @click="handleTapImage(image)" class="w-3/4 bg-gray-50 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="image" />
                </div>
            </template>
        </div>
    </div>
    <div class="flex justify-start">
        <div class="mt-9">
            <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
            <div class="w-64 text-sm">{{ item.size }}</div>
            <div class="w-64 text-sm">{{ item.material }}</div>
        </div>
        <span v-html="item.description"></span>
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
