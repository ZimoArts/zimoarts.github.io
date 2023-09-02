<template>
    <div class="mt-12">
        <div class="text-lg font-bold">{{ item.title }}</div>
        <div class="w-72">{{ item.subTitle }}</div>
    </div>
    <div class="flex justify-start relative">
        <div class="w-1/2">
            <div class="mt-9 border border-black">
                <img @click="handleTapImage(item.mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer"
                    :src="item.mainImage" alt="">
            </div>
        </div>
        <div class="w-1/2 ml-6 h-full">
            <div class="w-full mt-6">
                <div class="flex justify-end">
                    <img @click="handleTapImage(item.topImage)" class="w-4/5 ml-9 object-contain hover:cursor-pointer"
                        :src="item.topImage" />
                </div>
            </div>
            <div class="w-full h-36 flex items-center">
                <span v-html="item.description"></span>
            </div>
        </div>
    </div>
    <div class="mt-9">
        <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
        <div class="w-64 text-sm">{{ item.size }}</div>
        <div class="w-2/5 text-sm">{{ item.material }}</div>
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
