<template>
    <div class="flex justify-start mt-12 relative">
        <div class="w-2/5">
            <template v-for="mainImage in item.mainImageList">
                <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                    :src="mainImage" alt="">
            </template>
        </div>
        <div class="w-3/5 ml-6 h-full">
            <div class="flex">
                <div class="w-1/2">
                    <div class="text-lg font-bold">{{ item.title }}</div>
                    <div class="w-56">{{ item.subTitle }}</div>
                </div>
                <div class="w-1/2 flex justify-end">
                    <img @click="handleTapImage(item.titleImage)" class="w-56 ml-9 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.titleImage" />
                </div>
            </div>
            <span v-html="item.description"></span>
            <div class="w-full mb-4">
                <div class="absolute bottom-0 right-0 mb-4 flex">
                    <template v-for="image in item.imageList">
                        <img @click="handleTapImage(image)" class="w-56 ml-9 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="image" />
                    </template>
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
