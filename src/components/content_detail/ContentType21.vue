<template>
    <div class="text-lg font-bold">{{ item.title }}</div>
    <div class="w-72">{{ item.subTitle }}</div>
    <div class="flex justify-start mt-9">
        <div class="w-5/12">
            <img @click="handleTapImage(item.leftImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                :src="item.leftImage" alt="">
        </div>
        <div class="w-7/12 ml-6">
            <div class="relative h-full">
                <div class="w-full h-96 pl-28 flex items-center">
                    <span v-html="item.description"></span>
                </div>
                <div class="absolute bottom-4 right-0">
                    <div class="flex justify-end">
                        <img @click="handleTapImage(item.rightImage1)"
                            class="w-1/3 ml-3 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150" :src="item.rightImage1" />
                        <img @click="handleTapImage(item.rightImage2)"
                            class="w-1/3 ml-3 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150" :src="item.rightImage2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex">
        <div class="w-1/2 flex justify-start">
            <div class="mt-2">
                <div class="w-64 text-sm font-bold">{{ item.leftBottomTitle }}</div>
                <div class="w-64 text-sm">{{ item.leftSize }}</div>
                <div class="text-sm">{{ item.leftMaterial }}</div>
            </div>
        </div>
        <div class="w-1/2 flex justify-end">
            <div class="mt-2 mr-6">
                <div class="text-sm font-bold">{{ item.rightBottomTitle }}</div>
                <div class="text-sm">{{ item.rightSize }}</div>
                <div class="text-sm">{{ item.rightMaterial }}</div>
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
